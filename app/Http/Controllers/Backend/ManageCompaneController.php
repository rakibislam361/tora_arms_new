<?php

namespace App\Http\Controllers\Backend;

use App\Models\Backend\Company;
use Illuminate\Http\Request;

class ManageCompaneController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return view('backend.content.company.index');
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return view('backend.content.company.create');
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $company = $this->validateCompany();
    Company::create($company);
    return redirect()->route('admin.company.index')->withFlashSuccess("Company added successfully");
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
    $company =  Company::findOrFail($id);
    return view('backend.content.company.edit', compact('company'));
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
    $company = $this->validateCompany();
    Company::find($id)->update($company);
    return redirect()->route('admin.company.index')->withFlashSuccess("Company updated successfully");
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    Company::destroy($id);
    return redirect()->route('admin.company.index')->withFlashSuccess("Company deleted successfully");
  }

  public function selectCompany(Request $request)
  {
    $company = Company::select('company_email')->where('id', $request->data)->first();
    if ($company) {
      return response(['email' => $company->company_email]);
    }
    return response(['error' => "Email in not found"]);
  }



  public function validateCompany()
  {
    $company = request()->validate([
      'company_name' => 'required|min:5, max:100',
      'country' => 'nullable|string',
      'company_email' => 'nullable|string',
      'company_url' => 'nullable|string',
      'contact_number' => 'nullable|string',
      'address' => 'nullable|string',
      'company_details' => 'nullable|string',
      'company_logo' => 'nullable',
    ]);

    unset($company['company_logo']);

    if (request()->hasFile('company_logo')) {
      $company_logo = uniqid() . '.' . request()->company_logo->getClientOriginalExtension();
      request()->company_logo->move(public_path('/uploads'), $company_logo);
      $company['company_logo'] = $company_logo;
    }
    return $company;
  }
}
