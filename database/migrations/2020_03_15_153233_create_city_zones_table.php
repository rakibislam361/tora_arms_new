<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCityZonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('city_zones', function (Blueprint $table) {
            $table->bigIncrements('id');          
            $table->integer('city_id');
            $table->string('city_name',100);
            $table->integer('zone_id');
            $table->string('zone_name',100);
            $table->integer('aria_id');
            $table->string('aria_name',100);
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
        Schema::dropIfExists('city_zones');
    }
}
