<?php

namespace App\Http\Controllers\API;

use App\Models\livetrip;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class LivetripController extends Controller
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
            'livetrip'  => livetrip::all(),
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
            "VIN" =>'required',
            "CIN" =>'required',
            "DateDebut" =>'required',
        ]);
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $live = new livetrip;
            $live->VIN = $request->input('VIN');
            $live->CIN = $request->input('CIN');
            $live->DateDebut = $request->input('DateDebut');
            $live->save();    
            return response()->json([
                'error' => false,
                'live'  => $live,
            ], 200);
        }
    }
    public function show($id)
    {
        $live = livetrip::find($id);

        if(is_null($live)){
            return response()->json([
                'error' => true,
                'message'  => "livetrip with id # $id not found",
            ], 404);
        }

        return response()->json([
            'error' => false,
            'live'  => $live,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validation = Validator::make($request->all(),[ 
            'VIN' =>'required',
            'CIN' =>'required',
            'DateDebut' =>'required',                       
        ]);

        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $live = livetrip::find($id);
            $live->VIN = $request->input('VIN');
            $live->CIN = $request->input('CIN');
            $live->DateDebut = $request->input('DateDebut');
            $live->save();
    
            return response()->json([
                'error' => false,
                'live'  => $live,
            ], 200);
        }
    }

    public function destroy($id)
    {
        $live = livetrip::find($id);

        if(is_null($live)){
            return response()->json([
                'error' => true,
                'message'  => "livetrip with id # $id not found",
            ], 404);
        }

        $live->delete();
    
        return response()->json([
            'error' => false,
            'message'  => "livetrip record successfully deleted id # $id",
        ], 200);
    }
}
