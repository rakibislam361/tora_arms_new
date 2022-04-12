<?php

namespace Database\Seeders;

use App\Models\Position;
use Database\Seeders\Traits\DisableForeignKeys;
use Database\Seeders\Traits\TruncateTable;
use Illuminate\Database\Seeder;

class PositionsSeeder extends Seeder
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
        $this->truncate('positions');

        $csvFile = fopen(base_path("database/data/positions.csv"), "r");

        $firstline = true;
        while (($data = fgetcsv($csvFile, 2000, ",")) !== FALSE) {
            if (!$firstline) {
                Position::create([
                    "user_id" => $data['1'],
                    "position_name" => $data['2'],
                ]);
            }
            $firstline = false;
        }

        fclose($csvFile);

        $this->enableForeignKeys();
    }
}
