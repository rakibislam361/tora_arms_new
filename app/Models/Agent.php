<?php

namespace App\Models;

use App\Domains\Auth\Models\User;
use App\Models\Status;
use App\Models\Position;
use App\Models\TransectionModel;
use App\Models\District;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agent extends Model
{
  use HasFactory;
  protected $table = 'agent_infos';
  public $timestamps = true;
  protected $guarded = [];

  public function district()
  {
    return $this->belongsTo(District::class, 'district_permanent', 'id');
  }

  public function districtPresent()
  {
    return $this->belongsTo(District::class, 'district_present', 'id');
  }

  public function upazila()
  {
    return $this->belongsTo(Upazila::class, 'police_station_permanent', 'id');
  }

  public function upazilaPresent()
  {
    return $this->belongsTo(Upazila::class, 'police_station_present', 'id');
  }

  public function user()
  {
    return $this->belongsTo(User::class, 'user_id', 'id');
  }

  public function position()
  {
    return $this->belongsTo(Position::class, 'position_desierd', 'id');
  }

  public function statusGet()
  {
    return $this->belongsTo(Status::class, 'status', 'id');
  }

  public function transection()
  {
    return $this->hasMany(TransectionModel::class, 'status', 'id');
  }
}
