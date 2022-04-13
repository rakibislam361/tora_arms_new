<?php

namespace App\Models\Backend;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Model;

class ExpenseList extends Model
{
    protected $table = 'expenses_list';

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
