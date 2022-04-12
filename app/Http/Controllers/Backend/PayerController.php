<?php

namespace App\Http\Controllers\Backend;

use App\Domains\Auth\Models\User;
use App\Http\Controllers\Controller;
use App\Models\Backend\Payer;
use App\Models\Backend\Payment;
use App\Models\TransectionModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PayerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('backend.content.payer.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|max:100',
            'phone'     => 'required|unique:users,phone, phone|regex:/^([0-9\s\-\+\(\)]*)$/|min:11',
        ]);

        $email = explode('@', get_setting('app_email'));
        $password = $request->phone;
        $data['email'] = $request->phone . '@' . $email[1];
        $data['password'] = Hash::make($password);
        $user = User::insertGetId($data);
        if ($user) {
            unset($data['email'], $data['password']);
            $data['user_id'] = $user;
            Payer::create($data);
            return response(["value" => $request->phone]);
        }
        return redirect()->back()->withFlashDanger('Something went wrong');
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
        //
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
        if (Payer::destroy($id)) {
            return redirect()->back()->withFlashSuccess("Record deleted successfully");
        }
    }
}
