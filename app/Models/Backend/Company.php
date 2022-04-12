<?php

namespace App\Models\Backend;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
  use HasFactory;

  protected $table = 'companys';

  protected $guarded = [];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
