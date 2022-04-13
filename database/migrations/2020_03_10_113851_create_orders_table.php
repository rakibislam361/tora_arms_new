<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');           
            $table->string('store_id',100);
            $table->string('merchant_order_id',100)->nullable();
            $table->string('recipient_name',100);
            $table->string('recipient_phone')->nullable();
            $table->text('recipient_address');
            $table->integer('recipient_city');
            $table->integer('recipient_zone');
            $table->integer('recipient_area');
            $table->string('delivery_type',100);
            $table->string('item_type',50);
            $table->string('special_instruction',200)->nullable();
            $table->integer('item_quantity')->default(1);
            $table->float('item_weight');
            $table->string('item_description',255)->nullable();
            $table->integer('price')->default(0);
            $table->integer('amount_to_collect')->default(0);
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
        Schema::dropIfExists('orders');
    }
}
