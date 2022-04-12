<?php

namespace App\Http\Controllers;

use App\Agent_infos;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\User;

class AgentController extends Controller
{

    private $users = "users";
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $agents = Agent_infos::get();
        return view('auth.agents.index', compact('agents'));
    }


    public function search(Request $request)
    {
        $search = $request->get('search');
        return view('auth.agents.index', compact('search', 'agents', 'allStatus'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $districts = DB::table('districts')->get();
        $thanas = DB::table('upazilas')->get();
        return view('auth.agents.create', compact('districts', 'thanas'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $agent = new User;
        $agent->name = $request->agent_name;
        $agent->email = $request->email;
        $agent->password = Hash::make($request->password);
        $agent->gender = $request->gender;
        $agent->block_status = 1;
        $agent->phone = $request->phone;
        $agent->role_id = 5;

        // Insert Image
        $image = $request->file('image');
        $img = time() . '.' . $image->getClientOriginalExtension();
        //$location = public_path('uploads/categories/'.$img);
        $image->move('uploads/users/', $img);
        // Image::make($image)->save($location);
        $agent->picture = $img;
        // dd($agent);
        $agent->save();

        $agent_info = new Agent_infos;
        $agent_info->user_id = $agent->id;

        $agent_info->telephone = $request->telephone;
        $agent_info->fathers_name = $request->fathers_name;

        $agent_info->village_permanent = $request->village_permanent;
        $agent_info->post_office_permanent = $request->post_office_permanent;
        $agent_info->police_station_permanent = $request->police_station_permanent;
        $agent_info->district_permanent = $request->district_permanent;

        $agent_info->village_present = $request->village_present;
        $agent_info->post_office_present = $request->post_office_present;
        $agent_info->police_station_present = $request->police_station_present;
        $agent_info->district_present = $request->district_present;

        $agent_info->passport_no = $request->passport_no;
        $agent_info->passport_issue_date = $request->passport_issue_date;
        $agent_info->passport_expiry_date = $request->passport_expiry_date;
        $agent_info->nid_no = $request->nid_no;
        $agent_info->save();
        return redirect()->back()->with('success', 'Register Success! Login now');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $agent = Agent_infos::with('user')->where('id', $id)->first();
        $districts = DB::table('districts')->get();
        $thanas = DB::table('upazilas')->get();
        return view('auth.agents.edit', compact('agent', 'districts', 'thanas'));
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);
        if (file_exists('uploads/users/' . $user->picture)) {
            unlink('uploads/users/' . $user->picture);
        }
        $user->delete();
        Agent_infos::where('user_id', $id)->delete();
        return redirect()->back();
    }
}
