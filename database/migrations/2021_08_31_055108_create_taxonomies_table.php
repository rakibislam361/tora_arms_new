<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxonomiesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('taxonomies', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->timestamp('is_active')->nullable();
      $table->string('name', 255);
      $table->string('slug');
      $table->text('description')->nullable();
      $table->unsignedBigInteger('parent_id')->nullable();
      $table->string('icon', 255)->nullable();
      $table->string('picture', 255)->nullable();
      $table->unsignedBigInteger('magento_id')->uniqid()->nullable();
      $table->integer('position')->nullable();
      $table->integer('level')->nullable();
      $table->integer('product_count')->nullable();
      $table->unsignedBigInteger('user_id');
      $table->timestamps();
      $table->softDeletes();
    });

    Schema::create('post_taxonomy', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('taxonomy_id');
      $table->unsignedBigInteger('post_id');
      $table->timestamps();

      $table->unique(['taxonomy_id', 'post_id']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('taxonomies');
    Schema::dropIfExists('post_taxonomy');
  }
}
