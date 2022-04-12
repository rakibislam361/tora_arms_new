<?php

namespace App\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Agent;
use App\Models\Member;
use App\Models\Status;
use App\Models\TransectionModel;
use App\Models\TransectionUserModel;
use Illuminate\Support\Facades\Auth;

class TransectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allStatus = Status::whereIn('status_for', ['both', 'transection'])->get()->pluck('name', 'id');
        $member = Member::select('record_id', 'id');
        $transections = TransectionModel::with('user', 'transectionUser')
            ->where('transection_head', "member_payment")
            ->orderByDesc('id')->paginate(15);

        return view("backend.content.transection.member.index", compact('transections', 'allStatus', 'member'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = "";
        $inv_number = "TR00000";
        $last_invoice = TransectionUserModel::select('id')->latest()->first();
        if ($last_invoice) {
            $inv_number = generate_number($last_invoice->id + 1, 5, "TR");
        }
        // $users = Agent::get()->pluck('record_id', 'user_id');

        $auth = Agent::where('user_id', Auth::user()->id)->first();
        if ($auth) {
            $users = Member::where('agent_id', $auth->id)->orderByDesc('id')->get()->pluck('record_id', 'user_id');
        } else {
            $users = Member::orderByDesc('id')->get()->pluck('record_id', 'user_id');
        }

        return view("backend.content.transection.member.create", compact('users', 'inv_number'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->transectionValidation();
        $auth = Auth::user();

        $data['transection_head'] = "member_payment";

        $transection = TransectionModel::updateOrCreate([
            "total_amount" => $data['amount'],
            "user_id" => $data['user_id'],
            "transection_user" => $auth->id,
            "transection_head" => $data['transection_head'],
        ]);

        unset($data['transection_head']);

        $data['transection_id'] = $transection->id;
        if ($transection) {
            TransectionUserModel::create($data);
            return redirect()->back()->withFlashSuccess('Transection Successful!');
        }
    }

    public function statusUpdate(Request $request)
    {
        $transec = TransectionModel::findOrFail($request->id);
        $transec->status = $request->status;
        $transec->save();
        return 'success';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function transect_list($id)
    {
        $transection_details = TransectionModel::where('id', $id)->with('transectionUser', 'user')->first();
        return view("backend.content.transection.member.transection_list", compact('transection_details'));
    }


    public function show($id)
    {
        $transection_details = TransectionUserModel::where('id', $id)->with('transection')->first();
        return view("backend.content.transection.member.show", compact('transection_details'));
    }


    public function agentCommission(Request $request)
    {
        $transection_details = TransectionModel::with('transectionUser')
            ->where('transection_head', 'member_payment')
            ->where('user_id', Auth::user()->id)
            ->first();
        return view("backend.content.transection.member.admin_commission", compact('transection_details'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $inv_number = "TR00000";
        $last_invoice = TransectionUserModel::select('id')->latest()->first();
        if ($last_invoice) {
            $inv_number = generate_number($last_invoice->id + 1, 5, "TR");
        }
        $transection = TransectionModel::with('transectionUser')->where('id', $id)->first();
        $user_id = $transection->user_id;
        return view("backend.content.transection.member.edit", compact('transection', 'inv_number', 'user_id'));
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
        $data = $this->transectionValidation();
        $total = TransectionModel::findOrFail($id);
        $prev_value = $total->total_amount + $request->amount;

        if ($total) {
            $total->total_amount = $prev_value;
            $total->save();
        }

        $data['transection_id'] = $id;
        $transection =  TransectionUserModel::insertGetId($data);
        return redirect()->back()->withFlashSuccess("Added New record");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $transection = TransectionModel::destroy($id);
        $transection_user = TransectionUserModel::destroy($id);
        if ($transection || $transection_user) {
            return redirect()->back()->withFlashSuccess("Transection deleted successfully");
        }
    }

    public function transectionValidation()
    {
        $data = request()->validate([
            "transection_date" => "required|date",
            "invoice_number" => "required|string|max:100",
            "user_id" => "required|string|max:20",
            "amount" => "required|string|max:30",
            "payment_type" => "required|string|max:255",
            "transection_or_ac_number" => "nullable|string|max:255",
            "mobile" => "nullable",
            "description" => "nullable|string|max:255",
        ]);
        return $data;
    }
}
