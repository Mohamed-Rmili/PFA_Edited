<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class data extends Model
{
    use HasFactory;
    public $timestamps = false;

        /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "CIN",
        "altitude",
        "longitude",
        "SPEED",
        "ENGINE_RPM",
        "ENGINE_LOAD",
        "AmbientAirTemp",
        "ThrottlePos",
        "insFuel",
        "valX",
        "valY",
        "valZ",
        "zone",
        "time",
    ];
}
