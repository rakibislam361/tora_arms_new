<?php

namespace App\Http\Controllers\Frontend;

use App\Domains\Auth\Models\User;
use App\Models\Agent;
use App\Models\Status;
use App\Models\Position;
use App\Models\Upazila;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use PDF;
use URL;
use ZipArchive;

class AgentController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(Request $request)
  {
    $request->session()->forget('agent_step');
    return view('backend.content.agent.index');
  }

  public function create(Request $request)
  {
    $step = (!empty($request->step)) ? $request->step : 1;
    $districts = districts();
    $years = years_collection();
    $thana_list = Upazila::orderBy('name', 'asc')->get();

    return view('frontend.pages.agentRegister', compact('districts', 'thana_list', 'years', 'step'));
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */

  public function store(Request $request)
  {
    $agent = $this->validateAgents();

    if ($request->file('image')) {
      $imageName = time() . '.' . $request->image->extension();
      $request->image->move(public_path('uploads/users/'), $imageName);
      $agent['image'] = $imageName;
    }

    $oldSession =  session()->get('agent_step', []);
    $oldSession['step1'] = $agent;
    session()->put('agent_step', $oldSession);

    $agents = session()->get('agent_step');
    $data = [];
    foreach ($agents as $key => $agent) {
      $data = array_merge($data, $agent);
    }

    DB::transaction(function () use ($request, $data) {
      $email = $data['email'];
      $phone = $data['phone'];
      $password = $data['password'];
      $name = $data['agent_name'];
      $age = age_calculate($data['dob']);

      $agent = new User;
      $agent->name = $name;
      $agent->email = $email;
      $agent->password = Hash::make($password);
      $agent->phone = $phone;
      $agent->email_verified_at = now();
      $agent->save();

      unset($data['email'], $data['agent_name'], $data['password'], $data['phone']);
      $agent_id = generate_number($agent->id, 5, "A");

      $data['user_id'] = $agent->id;
      $data['age'] = $age;
      $data['record_id'] = $agent_id;
      $inserted_id = Agent::insertGetId($data);

      $agent = Agent::find($inserted_id);

      view()->share('agent', $agent);
      $FileNameTwo =  $agent->record_id . 'except_email' . '.pdf';
      $public_dir = public_path('uploads/users/' . $FileNameTwo);
      PDF::loadView('backend.content.agent.pdf_except_email', $agent)->save($public_dir);

      $agent->bio_data_without_email = $FileNameTwo;
      $agent->save();
    });

    $request->session()->forget('agent_step');
    return redirect()->route('frontend.auth.login')->withFlashSuccess('Register Success! Login now');
  }

  public function statusUpdate(Request $request)
  {
    $agent = Agent::findOrFail($request->id);
    $user = User::where('id', $agent->user_id)->first();
    $agent->status = $request->status;

    if ($request->status == 2) {
      $user->syncRoles('Agent');
      $user->type = 'admin';
    }
    if ($request->status == 3) {
      $user->removeRole('Agent');
      $user->type = 'user';
    }

    $user->save();
    $agent->save();
    return 'success';
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $agent = Agent::findOrFail($id);
    $allStatus = Status::whereIn('status_for', ['both', 'agent'])->get()->pluck('name', 'id');

    return view('backend.content.agent.show', compact('agent', 'allStatus'));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    $districts = districts();
    $thanas = thanas();
    $years = years_collection();
    $agent = Agent::findOrFail($id);
    return view('backend.content.agent.edit', compact('agent', 'districts', 'thanas', 'years'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    $agent = Agent::findOrFail($id);
    $user = $agent->user;

    $data = $request->validate([
      'agent_name' => 'required|string|min:0|max:30',
      'fathers_name' => 'required|string|max:100',
      'dob' => 'nullable|date',
      'phone'     => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:11',
      'gender' => 'nullable|max:10',
      'image'  => 'nullable|file|max:500',
      'passport_no'                     => 'nullable|string',
      'passport_issue_date'             => 'nullable|string',
      'passport_expiry_date'            => 'nullable|string',
      'nid_no'                          => 'required|min:10|max:17',
      'village_permanent'                        => 'required|string',
      'post_office_permanent'                    => 'required|string',
      'police_station_permanent'                 => 'required|string',
      'post_office_present'                      => 'required|string',
      'district_present'                         => 'required|string',
      'police_station_present'                   => 'required|string',
      'district_permanent'                       => 'required|string',
    ]);

    if ($request->file('image')) {
      $imageName = time() . '.' . $request->image->getClientOriginalExtension();
      $request->image->move(public_path('uploads/users/'), $imageName);
      $data['image'] = $imageName;
    }

    if (!empty($request->agent_name)) {
      $user->name = $request->agent_name;
    }
    if (!empty($request->phone)) {
      $user->phone = $request->phone;
    }
    $user->save();

    unset($data['agent_name'], $data['phone']);
    $agent->update($data);
    return redirect()->back()->withFlashSuccess('Agent Update successfully');
  }

  public function exportPDF($id)
  {
    $agent = Agent::findOrFail($id);
    $degree_name = explode(',', $agent->degree_name);
    $elementary_passing_year = explode(',', $agent->elementary_passing_year);
    $grade = explode(',', $agent->grade);
    $agent['degree_name'] = $degree_name;
    $agent['elementary_passing_year'] = $elementary_passing_year;
    $agent['grade'] = $grade;

    view()->share([
      'agent' => $agent,
    ]);

    $FileName = $agent->record_id . '.pdf';
    $public_dir = public_path('uploads/users/' . $FileName);

    PDF::loadView('backend.content.agent.pdf', $agent)->save($public_dir);

    $all_files = [];

    $all_files['bio_data'] = $FileName;

    if ($agent->passport_photocopy) {
      $all_files['pasport'] = $agent->passport_photocopy;
    }
    if ($agent->educational_certificate) {
      $all_files['educational_certificate'] = $agent->educational_certificate;
    }
    if ($agent->nid_copy) {
      $all_files['nid_copy'] = $agent->nid_copy;
    }
    if ($agent->chairman_certificate) {
      $all_files['chairman_certificate'] = $agent->chairman_certificate;
    }
    if ($agent->job_exprince_certificate) {
      $all_files['job_exprince_certificate'] = $agent->job_exprince_certificate;
    }
    if ($agent->own_cv) {
      $all_files['own_cv'] = $agent->own_cv;
    }
    if ($agent->all_attachment) {
      $all_files['all_attachment'] = $agent->all_attachment;
    }

    $zipFileName = $agent->record_id . '.zip';
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

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $agent = Agent::findOrFail($id);
    $agent->delete();
    return redirect()->back()->withFlashSuccess('Agent Update successfully');
  }

  public function search()
  {
    $districts = districts();
    $district = request('district_permanent');
    $status = request('status');
    $agents = Agent::with('districtPresent', 'position');
    $gender = request('gender');

    if ($district || $status || $gender) {
      if ($gender) {
        $agents = $agents->where('gender', $gender);
      }
      if ($district) {
        $agents = $agents->where('district_permanent', $district);
      }
      if ($status) {
        $agents = $agents->where('status', $status);
      }
    } else {
      $agents = $agents->where('status', 50);
    }

    $agents = $agents->orderByDesc('id')->paginate(15);
    $allStatus = Status::whereIn('status_for', ['both', 'agent'])->get()->pluck('name', 'id');

    return view('backend.content.agent.agent_search', compact('districts', 'agents', 'allStatus'));
  }

  public function searchResult(Request $request)
  {
    $district = request()->district_permanent;
    $position_desierd = request()->position_desierd ?? null;
    $gender = request()->gender;
    if ($position_desierd) {
      $result = Agent::where('district_permanent', 'LIKE', '%' . $district . '%')
        ->Where('gender', 'LIKE', '%' . $gender . '%')
        ->get();
    } else {
      $result = Agent::get();
    }

    $districts = districts()->toArray();
    $positions = Position::get()->pluck('position_name', 'id')->toArray();
    $allStatus = Status::whereIn('status_for', ['both', 'agent'])->get()->pluck('name', 'id');
    return view('backend.content.agent.agent_search', compact('districts', 'positions', 'result', 'allStatus'));
  }

  public function validateAgents()
  {
    $data = request()->validate([
      'agent_name' => 'required|string|min:0|max:30',
      'fathers_name' => 'required|string|max:100',
      'dob' => 'nullable|date',
      'phone'     => 'required|unique:users,phone, phone|regex:/^([0-9\s\-\+\(\)]*)$/|min:11',
      'gender' => 'nullable|max:10',
      'image'  => 'nullable|file|max:500',
      'passport_no'                     => 'nullable|string',
      'passport_issue_date'             => 'nullable|string',
      'passport_expiry_date'            => 'nullable|string',
      'nid_no'                          => 'required|max:17',
      'village_permanent'                        => 'required|string',
      'post_office_permanent'                    => 'required|string',
      'police_station_permanent'                 => 'required|string',
      'district_permanent'                       => 'required|string',
      'post_office_present'                      => 'required|string',
      'district_present'                         => 'required|string',
      'police_station_present'                   => 'required|string',
      'village_present'                        => 'required|string',
      'email' => 'required|unique:users,email, email',
      'password'  => 'required|string|min:8|confirmed',
    ]);

    return $data;
  }
}
