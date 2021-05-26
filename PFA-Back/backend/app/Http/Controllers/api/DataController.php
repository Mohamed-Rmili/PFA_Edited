<?php

namespace App\Http\Controllers\API;

use App\Models\data;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'error' => false,
            'data'  => data::all(),
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(),[ 
            "CIN" =>'required',
            "name" =>'required',
            "address" =>'required',
            "email" =>'required',
            "username" =>'required',
            "password" =>'required',
            "permis" =>'required',
            "prenom" =>'required',
            "image" =>'required',
            "modeAuto" =>'required',
            "sex" =>'required',
            "dateNais" =>'required', 
        ]);
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $Data = new data;
            $Data->CIN = $request->input('CIN');
            $Data->altitude = $request->input('altitude');
            $Data->longitude = $request->input('longitude');
            $Data->SPEED = $request->input('SPEED');
            $Data->ENGINE_RPM = $request->input('ENGINE_RPM');
            $Data->ENGINE_LOAD = $request->input('ENGINE_LOAD');
            $Data->AmbientAirTemp = $request->input('AmbientAirTemp');
            $Data->ThrottlePos = $request->input('ThrottlePos');
            $Data->insFuel = $request->input('insFuel');
            $Data->valX = $request->input('valX');
            $Data->valY = $request->input('valY');
            $Data->valZ = $request->input('valZ');
            $Data->zone = $request->input('zone');
            $Data->time = $request->input('time');
            $Data->save();    
            return response()->json([
                'error' => false,
                'Data'  => $Data,
            ], 200);
        }
    }
    public function show($id)
    {
        $Data = data::find($id);

        if(is_null($Data)){
            return response()->json([
                'error' => true,
                'message'  => "data with id # $id not found",
            ], 404);
        }

        return response()->json([
            'error' => false,
            'Data'  => $Data,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validation = Validator::make($request->all(),[ 
            'CIN' =>'required',
            'altitude' =>'required',
            'longitude' =>'required',           
            'SPEED' =>'required',
            'ENGINE_RPM' =>'required',
            'ENGINE_LOAD' =>'required',
            'AmbientAirTemp' =>'required',
            'ThrottlePos' =>'required',
            'insFuel' =>'required',
            'valX' =>'required',
            'valY' =>'required',
            'valZ' =>'required',
            'zone' =>'required',
            'time' =>'required',
        ]);

        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $Data = data::find($id);
            $Data->CIN = $request->input('CIN');
            $Data->altitude = $request->input('altitude');
            $Data->longitude = $request->input('longitude');
            $Data->SPEED = $request->input('SPEED');
            $Data->ENGINE_RPM = $request->input('ENGINE_RPM');
            $Data->ENGINE_LOAD = $request->input('ENGINE_LOAD');
            $Data->AmbientAirTemp = $request->input('AmbientAirTemp');
            $Data->ThrottlePos = $request->input('ThrottlePos');
            $Data->insFuel = $request->input('insFuel');
            $Data->valX = $request->input('valX');
            $Data->valY = $request->input('valY');
            $Data->valZ = $request->input('valZ');
            $Data->zone = $request->input('zone');
            $Data->time = $request->input('time');
            $Data->save();
    
            return response()->json([
                'error' => false,
                'Data'  => $Data,
            ], 200);
        }
    }

    public function destroy($id)
    {
        $Data = data::find($id);

        if(is_null($Data)){
            return response()->json([
                'error' => true,
                'message'  => "data with id # $id not found",
            ], 404);
        }

        $Data->delete();
    
        return response()->json([
            'error' => false,
            'message'  => "data record successfully deleted id # $id",
        ], 200);
    }
}
