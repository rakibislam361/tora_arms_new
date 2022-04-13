<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->nullable();
            $table->string('name_bn', 100)->nullable();
            $table->string('father_name', 60)->nullable();
            $table->string('position_desierd', 255)->nullable();
            $table->string('image', 255)->nullable();
            $table->string('mother_name', 60)->nullable();
            $table->string('city_address', 255)->nullable();
            $table->string('dob')->nullable();
            $table->string('dob_place', 255)->nullable();
            $table->string('spouse_name', 255)->nullable();
            $table->string('medical_fitness', 10)->nullable();
            $table->string('children_name', 100)->nullable();
            $table->string('gender', 10)->nullable();
            $table->string('marital_status', 10)->nullable();
            $table->string('punishment_record', 10)->nullable();
            $table->string('phone_father', 20)->nullable();
            $table->string('phone_others', 20)->nullable();
            $table->string('degree_name', 100)->nullable();
            $table->string('elementary_passing_year')->nullable();
            $table->string('grade', 255)->nullable();
            $table->string('foreign_country', 255)->nullable();
            $table->string('own_country', 255)->nullable();
            $table->string('village_present', 255)->nullable();
            $table->string('post_office_present', 255)->nullable();
            $table->string('district_present', 255)->nullable();
            $table->string('police_station_present', 255)->nullable();
            $table->string('village_permanent', 255)->nullable();
            $table->string('post_office_permanent', 255)->nullable();
            $table->string('district_permanent', 255)->nullable();
            $table->string('police_station_permanent', 255)->nullable();
            $table->string('character_refer_name_1', 255)->nullable();
            $table->string('character_refer_company_name_1', 100)->nullable();
            $table->string('character_refer_position_1', 100)->nullable();
            $table->string('character_refer_phone_1', 20)->nullable();
            $table->string('character_refer_name_2', 100)->nullable();
            $table->string('character_refer_company_name_2', 255)->nullable();
            $table->string('character_refer_position_2', 100)->nullable();
            $table->string('character_refer_phone_2', 20)->nullable();
            $table->string('passport_no')->nullable();
            $table->string('passport_issue_date')->nullable();
            $table->string('passport_expiry_date')->nullable();
            $table->string('nid_no')->nullable();
            $table->string('performance', 255)->nullable();
            $table->string('any_others', 255)->nullable();
            $table->string('passport_photocopy', 255)->nullable();
            $table->string('educational_certificate', 255)->nullable();
            $table->string('nid_copy', 255)->nullable();
            $table->string('chairman_certificate', 255)->nullable();
            $table->string('job_exprince_certificate', 255)->nullable();
            $table->string('own_cv', 255)->nullable();
            $table->string('all_attachment', 255)->nullable();
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
        Schema::dropIfExists('members');
    }
}
