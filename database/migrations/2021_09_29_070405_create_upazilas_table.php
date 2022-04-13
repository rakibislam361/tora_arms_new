<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUpazilasTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    // id, district_id, name, bn_name, url, user_id, created_at, updated_at
    Schema::create('upazilas', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->integer('district_id')->nullable();
      $table->string('name')->nullable();
      $table->string('bn_name', 255)->nullable();
      $table->text('url')->nullable();
      $table->unsignedBigInteger('user_id')->nullable();
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
    Schema::dropIfExists('upazilas');
  }
}
