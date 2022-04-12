<?php

namespace App\Models\Backend;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payer extends Model
{
    protected $table = 'payers';
    public $timestamps = true;
    protected $guarded = [];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
