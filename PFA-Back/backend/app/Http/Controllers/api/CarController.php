<?php

namespace App\Http\Controllers\API;

use App\Models\cars;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class CarController extends Controller
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
            'cars'  => cars::all(),
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
        ]);
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $car = new cars;
            $car->VIN = $request->input('VIN');
            $car->CIN = $request->input('CIN');

            $car->save();    
            return response()->json([
                'error' => false,
                'car'  => $car,
            ], 200);
        }
    }
    public function show($id)
    {
        $car = cars::find($id);

        if(is_null($car)){
            return response()->json([
                'error' => true,
                'message'  => "cars with id # $id not found",
            ], 404);
        }

        return response()->json([
            'error' => false,
            'car'  => $car,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validation = Validator::make($request->all(),[ 
            "VIN" =>'required',
            "CIN" =>'required',
            
        ]);

        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $car = cars::find($id);
            $car->VIN = $request->input('VIN');
            $car->CIN = $request->input('CIN');
            $car->save();
    
            return response()->json([
                'error' => false,
                'car'  => $car,
            ], 200);
        }
    }

    public function destroy($id)
    {
        $car = cars::find($id);

        if(is_null($car)){
            return response()->json([
                'error' => true,
                'message'  => "cars with id # $id not found",
            ], 404);
        }

        $car->delete();
    
        return response()->json([
            'error' => false,
            'message'  => "cars record successfully deleted id # $id",
        ], 200);
    }
}
