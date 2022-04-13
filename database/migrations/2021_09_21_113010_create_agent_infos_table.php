<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgentInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agent_infos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->nullable();
            $table->string('name_bn', 100)->nullable();
            $table->string('position_desierd', 191)->nullable();
            $table->string('gender', 20)->nullable();
            $table->string('image', 255)->nullable();
            $table->text('city_address', 191)->nullable();
            $table->text('provisional_address', 191)->nullable();
            $table->string('telephone', 191)->nullable();
            $table->string('dob', 191)->nullable();
            $table->string('dob_place', 191)->nullable();
            $table->string('civil_status', 191)->nullable();
            $table->string('citizenship', 191)->nullable();
            $table->string('height', 191)->nullable();
            $table->string('weight', 191)->nullable();
            $table->string('religion', 191)->nullable();
            $table->string('spouse_name', 191)->nullable();
            $table->string('spouse_occupation', 191)->nullable();
            $table->string('children_name', 191)->nullable();
            $table->string('children_date_of_birth', 191)->nullable();
            $table->string('fathers_name', 191)->nullable();
            $table->string('father_occupation', 191)->nullable();
            $table->string('mothers_name', 191)->nullable();
            $table->string('mother_occupation', 191)->nullable();
            $table->string('language', 191)->nullable();
            $table->string('emergency_contact_person', 191)->nullable();
            $table->string('emergency_person_address_tel', 191)->nullable();
            $table->string('elementary', 191)->nullable();
            $table->string('elementary_passing_year', 191)->nullable();
            $table->string('high_school', 191)->nullable();
            $table->string('high_school_passing_year', 191)->nullable();
            $table->string('college', 191)->nullable();
            $table->string('college_passing_year', 191)->nullable();
            $table->string('degree_name', 191)->nullable();
            $table->string('special_skills', 191)->nullable();
            $table->string('company_name_1', 191)->nullable();
            $table->string('position_1', 191)->nullable();
            $table->string('from_1', 191)->nullable();
            $table->string('to_1', 191)->nullable();
            $table->string('company_name_2', 191)->nullable();
            $table->string('position_2', 191)->nullable();
            $table->string('from_2', 191)->nullable();
            $table->string('to_2', 191)->nullable();
            $table->string('character_refer_name_1', 191)->nullable();
            $table->string('character_refer_company_name_1', 191)->nullable();
            $table->string('character_refer_position_1', 191)->nullable();
            $table->string('character_refer_phone_1', 191)->nullable();
            $table->string('character_refer_name_2', 191)->nullable();
            $table->string('character_refer_company_name_2', 191)->nullable();
            $table->string('character_refer_position_2', 191)->nullable();
            $table->string('character_refer_phone_2', 191)->nullable();
            $table->string('village_permanent', 191)->nullable();
            $table->string('post_office_permanent', 191)->nullable();
            $table->string('police_station_permanent', 191)->nullable();
            $table->string('district_permanent', 191)->nullable();
            $table->string('village_present', 191)->nullable();
            $table->string('post_office_present', 191)->nullable();
            $table->string('police_station_present', 191)->nullable();
            $table->string('district_present', 191)->nullable();
            $table->text('dhaka_address', 191)->nullable();
            $table->string('passport_no', 191)->nullable();
            $table->string('passport_issue_date', 191)->nullable();
            $table->string('passport_expiry_date', 191)->nullable();
            $table->string('nid_no', 191)->nullable();
            $table->string('experience', 191)->nullable();
            $table->string('present_appointment', 191)->nullable();
            $table->string('case_civil_court', 191)->nullable();
            $table->string('technical_qualification_institute_name', 191)->nullable();
            $table->string('other_qualification_institute_name', 191)->nullable();
            $table->string('job_preference_country', 191)->nullable();
            $table->string('medical_fitness', 191)->nullable();
            $table->string('passport_photocopy', 255)->nullable();
            $table->string('educational_certificate', 255)->nullable();
            $table->string('nid_copy', 255)->nullable();
            $table->string('chairman_certificate', 255)->nullable();
            $table->string('job_exprince_certificate', 255)->nullable();
            $table->string('own_cv', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agent_infos');
    }
}
