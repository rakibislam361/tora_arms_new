<?php

namespace App\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Upazila extends Model
{
  use HasFactory;

  protected $table = 'upazilas';
  public $timestamps = true;
  protected $guarded = [];

  public function user()
  {
    return $this->belongsTo(User::class, 'user_id', 'id');
  }

  public function member()
  {
    return $this->belongsTo(Member::class, 'police_station_permanent', 'id');
  }

  public function agent()
  {
    return $this->belongsTo(Agent::class, 'police_station_permanent', 'id');
  }
}
