<?php

namespace App\Http\Controllers\Backend;

use App\Models\Agent;
use App\Models\Member;
use Facade\FlareClient\Stacktrace\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use ZipArchive;

class ZipController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $agent = request('agent', null);
        $member = request('member', null);
        if ($agent) {
            $files = Agent::findOrFail($agent);
        }
        if ($member) {
            $files = Member::findOrFail($member);
        }

        $all_files = [];

        if ($files->bio_data) {
            $all_files['bio_data'] = $files->bio_data;
        }
        if ($files->passport_photocopy) {
            $all_files['pasport'] = $files->passport_photocopy;
        }
        if ($files->educational_certificate) {
            $all_files['educational_certificate'] = $files->educational_certificate;
        }
        if ($files->nid_copy) {
            $all_files['nid_copy'] = $files->nid_copy;
        }
        if ($files->chairman_certificate) {
            $all_files['chairman_certificate'] = $files->chairman_certificate;
        }
        if ($files->job_exprince_certificate) {
            $all_files['job_exprince_certificate'] = $files->job_exprince_certificate;
        }
        if ($files->own_cv) {
            $all_files['own_cv'] = $files->own_cv;
        }
        if ($files->all_attachment) {
            $all_files['all_attachment'] = $files->all_attachment;
        }

        if ($request->has('download')) {
            $zipFileName =  $files->record_id . '.zip';
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
            $filetopath = public_path('uploads/users/' . $zipFileName);

            if (file_exists($filetopath)) {
                return response()->download($filetopath, $zipFileName, $headers);
            }
        }
        return redirect()->back()->withFlashWarning('Downloadable file not found');
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
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
        //
    }
}
