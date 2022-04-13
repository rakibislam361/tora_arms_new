<?php

namespace App\Http\Controllers\Backend;

use App\Models\Upazila;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpazillaController

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $upazilla = Upazila::all();
        return view('backend.content.upazilla.index', compact('upazilla'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $districts = districts();
        return view('backend.content.upazilla.create', compact('districts'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user()->id;
        $data = $this->UpazillaValidation();
        $data['user_id'] = $user;
        Upazila::create($data);
        return redirect()->back()->withFlashSuccess('Upazila created successfully');
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
        $upazilla = Upazila::findOrFail($id);
        $districts = districts();

        return view('backend.content.upazilla.edit', compact('upazilla', 'districts'));
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
        $data = $this->UpazillaValidation();
        $upazilla = Upazila::findOrFail($id);
        $upazilla->update($data);
        return redirect()->route("admin.upazilla.index")->withFlashSuccess('Upazila updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $upazilla = Upazila::findOrFail($id);
        $upazilla->delete();
        return redirect()->back()->withFlashSuccess('Upazila deleted successfully');
    }

    public function UpazillaValidation()
    {
        $data = request()->validate([
            'name' => 'required|string',
            'bn_name' => 'required|string',
            'district_id' => 'required',
            'url' => '',
        ]);
        return $data;
    }
}
