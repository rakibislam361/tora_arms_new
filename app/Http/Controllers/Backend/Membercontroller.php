<?php

namespace App\Http\Controllers\Backend;

use App\Models\Backend\Company;
use App\Mail\SendMembersToCompany;
use Illuminate\Http\Request;
use App\Domains\Auth\Models\User;
use App\Models\Agent;
use App\Models\Status;
use App\Models\District;
use App\Models\Member;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;
use App\Models\Position;
use App\Models\Upazila;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use PDF;
use ZipArchive;

class MemberController extends controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $status = Status::orderby('name', 'asc')->get();
        return view('backend.content.member.index', compact('status'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $thana = Upazila::orderBy('name', 'asc')->pluck('name', 'id');
        $districts = District::orderBy('name', 'asc')->get()->pluck('name', 'id');
        $thana_list = Upazila::orderBy('name', 'asc')->get();
        $years = years_collection();
        $positions = Position::orderBy('position_name')
            ->pluck('position_name', 'id')
            ->prepend('All Positions', '');
        return view('backend.content.member.create', compact('districts', 'thana_list', 'years', 'thana', 'positions'));
    }

    public function store(Request $request)
    {
        $member = $this->validateMembers();
        $data = $request->validate([
            'name' => 'required|min:4|max:30',
            'phone' => 'required|unique:users,phone, phone|regex:/^([0-9\s\-\+\(\)]*)$/|min:11',
            'police_clearance_issue' => 'nullable',
        ]);

        $data['email'] = $request->phone . "@trustoverseas.com.bd";
        $data['password'] = "secret";

        $member += $data;
        if (!empty($request->file('image'))) {
            $imageName = time() . '.' . $request->image->getClientOriginalExtension();
            $request->image->move(public_path('uploads/users/'), $imageName);
            $member['image'] = $imageName;
        }

        if ($request->all_attachment) {
            $attachment = uniqid() . '.' . $request->all_attachment->getClientOriginalExtension();
            $request->all_attachment->move(public_path('uploads/users'), $attachment);
            $member['all_attachment'] = $attachment;
        }

        if (!empty($request->file('police_clearance'))) {
            $attachment = uniqid() . '.' . $request->police_clearance->getClientOriginalExtension();
            $request->police_clearance->move(public_path('uploads/users'), $attachment);
            $member['police_clearance'] = $attachment;
        }

        if (!empty($request->file('job_exprince_certificate'))) {
            $passport = uniqid() . '.' . $request->job_exprince_certificate->getClientOriginalExtension();
            $request->job_exprince_certificate->move(public_path('/uploads/users'), $passport);
            $member['job_exprince_certificate'] = $passport;
        }

        if (!empty($request->file('passport_photocopy'))) {
            $passport = uniqid() . '.' . $request->passport_photocopy->getClientOriginalExtension();
            $request->passport_photocopy->move(public_path('/uploads/users'), $passport);
            $member['passport_photocopy'] = $passport;
        }

        $member['degree_name'] = json_encode($request->education) ?? [];

        $oldSession =  session()->get('member', []);
        $oldSession['step1'] = $member;
        session()->put('member', $oldSession);
        $members = session()->get('member', []);

        $data = [];
        foreach ($members as $key => $member) {
            $data = array_merge($data, $member);
        }

        DB::transaction(function () use ($request, $data) {
            $email = $data['email'] ?? null;
            $phone = $data['phone'] ?? null;
            $password = $data['password'];
            $name = $data['name'];
            $age = age_calculate($data['dob']);

            $member = new User();
            $member->name = $name;
            $member->email = $email;
            $member->phone = $phone;

            $member->email_verified_at = date('Y-m-d H:i:s');
            $member->password = Hash::make($password);
            $member->save();
            $member_id = generate_number($member->id, 5, "M");

            unset($data['name'], $data["email"], $data["phone"], $data["password"]);

            $auth_agent = Agent::select('id')->where('user_id', Auth::user()->id)->first();
            $auth_agent_id = null;
            if (!empty($auth_agent)) {
                $auth_agent_id = $auth_agent->id;
            }

            $data['user_id'] = $member->id;
            $data['age'] = $age;
            $data['record_id'] = $member_id;
            $data['agent_id'] = $auth_agent_id;
            $member = Member::create($data);

            $member['degree_name'] = json_decode($member->degree_name, true) ?? [];
            view()->share('member', $member);
            $FileNameTwo = $member_id . '_except_email' . '.pdf';
            $public_dir_two = public_path('uploads/users/' . $FileNameTwo);
            PDF::loadView('backend.content.member.pdf_except_email', $member->toArray())->save($public_dir_two);

            $member->bio_data_without_email = $FileNameTwo;
            $member->save();
            $request->session()->forget('member');
        });
        return redirect()->back()->withFlashSuccess('Member Registration Successful!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $districts = districts();
        $thana_list = Upazila::orderBy('name', 'asc')->get();
        $thana = Upazila::orderBy('name', 'asc')->pluck('name', 'id');
        $years = years_collection();
        $member = Member::findOrFail($id);

        $degree_name = json_decode($member->degree_name) ?? [];
        $positions = Position::orderBy('position_name')
            ->pluck('position_name', 'id')
            ->prepend('All Positions', '');
        return view(
            'backend.content.member.edit',
            compact('member', 'districts', 'thana_list', 'thana', 'years', 'degree_name', 'positions')
        );
    }

    public function show($id)
    {
        $member = Member::findOrFail($id);
        $degree_name = json_decode($member->degree_name) ?? [];
        $allStatus = Status::whereIn('status_for', ['both', 'member'])->get()->pluck('name', 'id');
        return view('backend.content.member.show', compact('member', 'degree_name', 'allStatus'));
    }

    public function update(Request $request, $id)
    {
        $member = Member::findOrFail($id);
        $data = $this->validateMembers();

        if ($request->name) {
            $user = User::where('id', $member->user_id)->first();
            $user->name = $request->name;
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->save();
        }
        unset($data['last_name'], $data['first_name'], $data['name']);
        $data['degree_name'] = json_encode($request->education) ?? [];
        $image = 'uploads/users/' . $member->image;

        if (!empty($request->file('image'))) {
            File::delete($image);
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads/users/'), $imageName);
            $data['image'] = $imageName;
        }

        if (!empty($request->file('police_clearance'))) {
            $attachment = uniqid() . '.' . $request->police_clearance->getClientOriginalExtension();
            $request->police_clearance->move(public_path('uploads/users'), $attachment);
            $member['police_clearance'] = $attachment;
        }

        if (!empty($request->file('job_exprince_certificate'))) {
            $passport = uniqid() . '.' . $request->job_exprince_certificate->getClientOriginalExtension();
            $request->job_exprince_certificate->move(public_path('/uploads/users'), $passport);
            $member['job_exprince_certificate'] = $passport;
        }

        if (!empty($request->file('passport_photocopy'))) {
            $passport = uniqid() . '.' . $request->passport_photocopy->getClientOriginalExtension();
            $request->passport_photocopy->move(public_path('/uploads/users'), $passport);
            $member['passport_photocopy'] = $passport;
        }


        $FileName = $member->record_id . '.pdf';
        $public_dir = public_path('uploads/users/' . $FileName);
        $member->bio_data = $FileName;
        // $pdf = PDF::loadView('backend.content.member.pdf', $member)->save($public_dir);

        $member->update($data);
        return redirect()->back()->withFlashSuccess('Member Update successfully');
    }

    public function statusUpdate(Request $request)
    {
        $member = Member::findOrFail($request->id);
        $member->status = $request->status;
        $member->save();
        return 'success';
    }

    public function destroy($id)
    {
        $member = Member::findOrFail($id);
        return $member->delete();
        return redirect()->back()->withFlashSuccess('Member Delete successfully');
    }

    public function search(Request $request)
    {
        $status = request('status');
        $district = request('district_permanent');
        $gender = request('gender');
        $position_desierd = request('position_desierd');
        $from_date = request('from_date');
        $to_date = request('to_date');
        $districts = districts();
        $members = [];

        if (Auth::user()->hasRole('Agent') == true) {
            $authId = Auth::user()->id;
            $members = Member::where('agent_id', $authId)->with('districtPresent', 'position');
        } else {
            $members = Member::with('districtPresent', 'position');
        }


        if ($position_desierd || $from_date || $to_date || $status || $district || $gender) {
            if ($position_desierd) {
                $members = $members->where('position_desierd', $position_desierd);
              }
            if ($from_date) {
                $from_date = Carbon::parse($from_date)->startOfDay()->toDateTimeString();
                $members = $members->where('created_at', '>=', $from_date);
            }
            if ($to_date) {
                $to_date = Carbon::parse($from_date)->endOfDay()->toDateTimeString();
                $members = $members->where('created_at', '<=', $to_date);
            }
            if ($status) {
                $members = $members->where('status', $status);
            }
            if ($district) {
                $members = $members->where('district_permanent', $district);
            }
            if ($gender) {
                $members = $members->where('gender', $gender);
            }
        } else {
            $members = $members->where('status', $status);
        }

        $members = $members->orderByDesc('id')->paginate(15);
        $allStatus = Status::whereIn('status_for', ['both', 'member'])->get()->pluck('name', 'id');

        // dd($status, $district, $gender, $members);

        $positions = Position::orderBy('position_name')
            ->pluck('position_name', 'id')
            ->prepend('All Positions', '');

        return view('backend.content.member.member_search', compact('districts', 'positions', 'allStatus', 'members'));
    }

    public function searchResult()
    {
        dd("hello");
    }

    public function exportPDF($id)
    {
        $member = Member::findOrFail($id);
        $member['degree_name'] = json_decode($member->degree_name) ?? [];

        view()->share([
            'member' => $member,
        ]);

        $FileName = $member->record_id . '.pdf';
        $public_dir = public_path('uploads/users/' . $FileName);

        PDF::loadView('backend.content.member.pdf', $member)->save($public_dir);

        $all_files = [];

        $all_files['bio_data'] = $FileName;
        if ($member->job_exprince_certificate) {
            $all_files['pasport'] = $member->job_exprince_certificate;
        }

        if ($member->job_exprince_certificate) {
            $all_files['job_exprince_certificate'] = $member->job_exprince_certificate;
        }

        if ($member->police_clearance) {
            $all_files['police_clearance'] = $member->police_clearance;
        }

        if ($member->passport_photocopy) {
            $all_files['passport_photocopy'] = $member->passport_photocopy;
        }
        $zipFileName = $member->record_id . '.zip';
        $public_dir = public_path('uploads/users/' . $zipFileName);
        $zip = new ZipArchive;

        if ($zip->open($public_dir, ZipArchive::CREATE) === TRUE) {
            foreach ($all_files as $key => $value) {
                $filePath = public_path('uploads/users/' . $value);
                $fileName = $key . '-' . $value;
                $zip->addFile($filePath, $fileName);
            }
            $zip->close();
        }

        // Set Header
        $headers = array(
            'Content-Type' => 'application/octet-stream',
        );

        // Create Download Response
        if (file_exists($public_dir)) {
            return response()->download($public_dir, $zipFileName, $headers);
        }
        return back();
    }

    public function validateMembers()
    {
        $data = request()->validate([
            'name' => 'nullable|min:4|max:30',
            'gender' => 'required|string',
            'spouse_name' => 'nullable',
            'father_name' => 'required|string',
            'mother_name' => 'required|string',
            'position_desierd' => 'required|string',
            'dob' => 'required|string',
            'punishment_record' => "nullable",
            'phone_father' => 'nullable|regex:/^([0-9\s\-\+\(\)]*)$/|min:11',
            'phone_others' => 'nullable|regex:/^([0-9\s\-\+\(\)]*)$/|min:11',

            'degree_name.*' => 'nullable|string|min:3|max:30',
            'grade.*' => 'nullable|numeric',
            'elementary_passing_year.*' => 'nullable|string',
            'technical_qualification_institute_name' => 'nullable|string',
            'other_qualification_institute_name' => 'nullable|string',

            'village_present' => 'nullable|string',
            'post_office_present' => 'nullable|string',
            'district_present' => 'nullable|string',
            'police_station_present' => 'nullable|string',

            'district_permanent' => 'nullable|string',
            'village_permanent' => 'nullable|string',
            'post_office_permanent' => 'nullable|string',
            'police_station_permanent' => 'nullable|string',

            'police_clearance_expired' => 'nullable',

            'passport_no' => 'nullable',
            'passport_issue_date' => 'nullable',
            'passport_expiry_date' => 'nullable',

            'job_exprince_certificate.*' => 'nullable|file|max:1000',
            'passport_photocopy'        => 'nullable|file|max:1000',
            'all_attachment'        => 'nullable|file',
        ]);
        return $data;
    }

    public function generateEmail()
    {
        $memberIds = request('members', []);
        $members = Member::whereIn('id', $memberIds)->whereNotNull('bio_data_without_email')->get();

        $status = count($members) ? true : false;
        //     Mail::to($mailTo)
        //         ->cc($mailCc)
        //         ->bcc($mailBcc)
        //         ->attachment(public_path('/uploads/users/61cc7e7f23c7f.pdf'))
        //                ->attachment(public_path('/uploads/users/61cc78fac3c94.pdf'))
        //     ->send(new SendMembersToCompany());
        $companies = Company::orderBy('company_name')->pluck('company_name', 'id')->prepend('Select Company', '');
        $forms = view('backend.content.member.includes.generateEmail', compact('members', 'companies'))->render();

        return response([
            'status' => $status,
            'forms' => $forms
        ]);
    }

    public function senderGenerate(array $senders)
    {
        $allSenders = [];
        foreach ($senders as $key => $email) {
            $name = explode('@', $email);
            $allSenders[$key] = [
                'email' => $email,
                'name' => $name[0] ?? 'unknown',
            ];
        }
        return $allSenders;
    }

    public function submitGeneratedEmail(Request $request)
    {
        $maiTo = explode(';', request('email'));
        $mailCc = request('mailCc') ? explode(';', request('mailCc')) : [];
        $mailBcc = request('mailBcc') ? explode(';', request('mailBcc')) : [];
        $attachments = request('attachments', []);
        $subject = request('subject');
        $body = request('email_body', null);

        if (empty($maiTo) || empty($attachments)) {
            return redirect()->back()->withFlashSuccess('Mailto email address not found');
        }

        $mailTo = $this->senderGenerate($maiTo);

        $email = Mail::to($mailTo);
        if (!empty($mailCc)) {
            $email->cc($mailCc);
        }
        if (!empty($mailBcc)) {
            $email->bcc($mailBcc);
        }
        $email->send(new SendMembersToCompany($subject, $body, $attachments));

        return redirect()->route('admin.member.search')
            ->withFlashSuccess('Email send successfully');
    }
}
