<?php

namespace App\Models;

use App\Domains\Auth\Models\User;
use App\Models\Status;
use App\Models\Position;
use App\Models\TransectionModel;
use App\Models\District;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $table = 'members';

    public $timestamps = true;
    protected $guarded = [];


    public function districtPresent()
    {
        return $this->belongsTo(District::class, 'district_present', 'id');
    }

    public function districtPermanent()
    {
        return $this->belongsTo(District::class, 'district_permanent', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function position()
    {
        return $this->belongsTo(Position::class, 'position_desierd', 'id');
    }

    public function upazilaPermanent()
    {
        return $this->belongsTo(Upazila::class, 'police_station_permanent', 'id');
    }

    public function upazilaPresent()
    {
        return $this->belongsTo(Upazila::class, 'police_station_present', 'id');
    }

    public function agentGet()
    {
        return $this->belongsTo(Agent::class, 'agent_id', 'id');
    }

    public function statusGet()
    {
        return $this->belongsTo(Status::class, 'status', 'id');
    }

    public function transectionUser()
    {
        return $this->hasMany(TransectionUserModel::class);
    }
}
