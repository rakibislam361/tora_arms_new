<?php

namespace App\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
  use HasFactory;

  public $timestamps = true;
  protected $guarded = [];
  protected $table = 'districts';

  public function user()
  {
    return $this->belongsTo(User::class, 'user_id', 'id');
  }

  public function upazila()
  {
    return $this->belongsTo(Upazila::class, 'district_id', 'id');
  }
}
