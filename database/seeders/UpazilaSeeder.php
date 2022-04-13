<?php

namespace Database\Seeders;

use App\Models\Upazila;
use Database\Seeders\Traits\DisableForeignKeys;
use Database\Seeders\Traits\TruncateTable;
use Illuminate\Database\Seeder;

class UpazilaSeeder extends Seeder
{

  use DisableForeignKeys, TruncateTable;

  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $this->disableForeignKeys();
    $this->truncate('upazilas');
    $csvFile = fopen(base_path("database/data/upazilas.csv"), "r");

    $firstline = true;
    while (($data = fgetcsv($csvFile, 2000, ",")) !== FALSE) {
      if (!$firstline) {
        Upazila::create([
          "district_id" => $data['1'],
          "name" => $data['2'],
          "bn_name" => $data['3'],
          "url" => $data['4'],
          "user_id" => 1,
        ]);
      }
      $firstline = false;
    }

    fclose($csvFile);


    $this->enableForeignKeys();
  }
}
