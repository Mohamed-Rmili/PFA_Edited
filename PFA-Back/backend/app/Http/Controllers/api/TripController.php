<?php

namespace App\Http\Controllers\API;

use App\Models\trip;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TripController extends Controller
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
            'trip'  => trip::all(),
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
            "DateDebut" =>'required',
            "DateFin" =>'required',
            "VIN" =>'required',
            "timide" =>'required',
            "normal" =>'required',
            "agressif" =>'required',
            "dangereux" =>'required',
        ]);
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $Trip = new trip;
            $Trip->CIN = $request->input('CIN');
            $Trip->DateDebut = $request->input('DateDebut');
            $Trip->DateDebut = $request->input('DateFin');
            $Trip->VIN = $request->input('VIN');
            $Trip->timide = $request->input('timide');
            $Trip->normal = $request->input('normal');
            $Trip->agressif = $request->input('agressif');
            $Trip->dangereux = $request->input('dangereux');
            $Trip->save();    
            return response()->json([
                'error' => false,
                'Trip'  => $Trip,
            ], 200);
        }
    }
    public function show($id)
    {
        $Trip = trip::find($id);

        if(is_null($Trip)){
            return response()->json([
                'error' => true,
                'message'  => "trip with id # $id not found",
            ], 404);
        }

        return response()->json([
            'error' => false,
            'Trip'  => $Trip,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validation = Validator::make($request->all(),[ 
            "CIN" =>'required',
            "DateDebut" =>'required',
            "DateFin" =>'required',
            "VIN" =>'required',
            "timide" =>'required',
            "normal" =>'required',
            "agressif" =>'required',
            "dangereux" =>'required',
            
        ]);

        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $Trip = trip::find($id);
            $Trip->CIN = $request->input('CIN');
            $Trip->DateDebut = $request->input('DateDebut');
            $Trip->DateDebut = $request->input('DateFin');
            $Trip->VIN = $request->input('VIN');
            $Trip->timide = $request->input('timide');
            $Trip->normal = $request->input('normal');
            $Trip->agressif = $request->input('agressif');
            $Trip->dangereux = $request->input('dangereux');
            $Trip->save();
    
            return response()->json([
                'error' => false,
                'Trip'  => $Trip,
            ], 200);
        }
    }

    public function destroy($id)
    {
        $Trip = trip::find($id);

        if(is_null($Trip)){
            return response()->json([
                'error' => true,
                'message'  => "trip with id # $id not found",
            ], 404);
        }

        $Trip->delete();
    
        return response()->json([
            'error' => false,
            'message'  => "trip record successfully deleted id # $id",
        ], 200);
    }
}
