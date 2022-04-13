<?php

namespace App\Models\Backend;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Taxonomy extends Model
{
  use HasFactory, SoftDeletes;

  protected $table = 'taxonomies';

  public $primaryKey = 'id';

  public $timestamps = true;

  protected $guarded = [];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function parent()
  {
    return $this->hasOne(self::class, 'magento_id', 'parent_id');
  }

  public function children()
  {
    return $this->hasMany(self::class, 'parent_id', 'magento_id');
  }
}
