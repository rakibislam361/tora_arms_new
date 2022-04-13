<?php

namespace App\Models\Backend;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $table = 'payment_method';

    public $timestamps = true;
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
