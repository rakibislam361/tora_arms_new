<?php

namespace App\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Model;

class TransectionModel extends Model
{
    protected $table = 'transections';

    protected $fillable = [];

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class, 'transection_user', 'id');
    }

    public function statusGet()
    {
        return $this->belongsTo(Status::class, 'status', 'id');
    }

    public function transectionUser()
    {
        return $this->hasMany(TransectionUserModel::class, 'transection_id', 'id');
    }
}
