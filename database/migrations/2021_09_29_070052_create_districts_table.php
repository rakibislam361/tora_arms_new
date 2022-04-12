<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDistrictsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('districts', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->integer("division_id")->nullable();
      $table->string("name")->nullable();
      $table->string("bn_name", 255)->nullable();
      $table->string("lat")->nullable();
      $table->string("lon")->nullable();
      $table->text('url')->nullable();
      $table->unsignedBigInteger("user_id")->nullable();
      $table->timestamps();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('districts');
  }
}
