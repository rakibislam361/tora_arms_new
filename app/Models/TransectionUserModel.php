<?php

namespace App\Models;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TransectionModel;


class TransectionUserModel extends Model
{
    use HasFactory;
    protected $table = 'transection_users';

    protected $guarded = [];

    public function userGet()
    {
        return $this->belongsTo(User::class, 'user', 'id');
    }

    public function transection()
    {
        return $this->belongsTo(TransectionModel::class);
    }
}
