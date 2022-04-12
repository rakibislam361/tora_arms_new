<?php

namespace App\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Models\Agent;
use App\Models\Member;
use App\Models\TransectionModel;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;

/**
 * Class DashboardController.
 */
class DashboardController
{
    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $members  = "";
        $authId = Auth::user()->id;
        $agents = Agent::get();
        $auth_agent = Agent::select('id')->where('user_id', $authId)->first();

        if (!empty($auth_agent)) {
            $members = Member::where('agent_id', $authId)->get();
            $member_payment = TransectionModel::with('transectionUser')
                ->where('transection_user', $authId)
                ->where('transection_head', 'member_payment')
                ->get();

            $agent_payment = TransectionModel::with('transectionUser')
                ->where('user_id', $authId)
                ->where('transection_head', 'agent_payment')
                ->get();
        } else {
            $members = Member::get();
            $member_payment = TransectionModel::with('transectionUser')
                ->where('transection_head', 'member_payment')
                ->get();
            $agent_payment = TransectionModel::where('transection_head', 'agent_payment')
                ->get();
        }

        return view('backend.dashboard', compact('members', 'agents', 'member_payment', 'agent_payment'));
    }
}
