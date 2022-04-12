<?php

namespace Database\Seeders;

use App\Models\District;
use Database\Seeders\Traits\DisableForeignKeys;
use Database\Seeders\Traits\TruncateTable;
use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
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
    $this->truncate('districts');

    $csvFile = fopen(base_path("database/data/districts.csv"), "r");

    $firstline = true;
    while (($data = fgetcsv($csvFile, 2000, ",")) !== FALSE) {
      if (!$firstline) {
        District::create([
          "division_id" => $data['1'],
          "name" => $data['2'],
          "bn_name" => $data['3'],
          "lat" => $data['4'],
          "lon" => $data['5'],
          "url" => $data['6'],
          "user_id" => 1,
        ]);
      }
      $firstline = false;
    }

    fclose($csvFile);


    $this->enableForeignKeys();
  }
}
