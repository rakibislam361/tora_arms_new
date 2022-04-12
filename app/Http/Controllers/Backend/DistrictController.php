<?php

namespace App\Http\Controllers\Backend;

use Illuminate\Http\Request;
use App\Models\District;
use Illuminate\Support\Facades\Auth;

class DistrictController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $districts = District::all();
        return view('backend.content.district.index', compact('districts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        return view('backend.content.district.create');
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
        $data = $this->DistrictValidation();
        $data['user_id'] = $user;
        District::create($data);
        return redirect()->back()->withFlashSuccess('District created successfully');
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
        $district = District::findOrFail($id);
        return view('backend.content.district.edit', compact('district'));
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
        $data = $this->DistrictValidation();
        $district = District::findOrFail($id);
        $district->update($data);
        return redirect()->route("admin.district.index")->withFlashSuccess('District updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $district = District::findOrFail($id);
        $district->delete();
        return redirect()->back()->withFlashSuccess('District deleted successfully');
    }

    public function DistrictValidation()
    {
        $data = request()->validate([
            'name' => 'required|string',
            'bn_name' => 'required|string',
            'lat' => '',
            'lon' => '',
            'url' => '',
        ]);

        return $data;
    }
}
