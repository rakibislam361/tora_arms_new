<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agent_infos extends Model
{
    public function user(){
        return $this->belongsTo('App\User');
    }
}
