<?php

namespace App\Http\Controllers\API;

use App\Models\smartphone;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class SmartphoneController extends Controller
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
            'smartphone'  => smartphone::all(),
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
            "marque" =>'required',
            "version" =>'required',
            "ram" =>'required',
        ]);
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $phone = new smartphone;
            $phone->marque = $request->input('marque');
            $phone->version = $request->input('version');
            $phone->ram = $request->input('ram');
            $phone->save();    
            return response()->json([
                'error' => false,
                'phone'  => $phone,
            ], 200);
        }
    }
    public function show($id)
    {
        $phone = smartphone::find($id);

        if(is_null($phone)){
            return response()->json([
                'error' => true,
                'message'  => "smartphone with id # $id not found",
            ], 404);
        }

        return response()->json([
            'error' => false,
            'phone'  => $phone,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validation = Validator::make($request->all(),[ 
            'marque' =>'required',
            'version' =>'required',
            'ram' =>'required',           
            
        ]);

        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $phone = smartphone::find($id);
            $phone->marque = $request->input('marque');
            $phone->version = $request->input('version');
            $phone->ram = $request->input('ram');
            $phone->save();
    
            return response()->json([
                'error' => false,
                'phone'  => $phone,
            ], 200);
        }
    }

    public function destroy($id)
    {
        $phone = smartphone::find($id);

        if(is_null($phone)){
            return response()->json([
                'error' => true,
                'message'  => "smartphone with id # $id not found",
            ], 404);
        }

        $phone->delete();
    
        return response()->json([
            'error' => false,
            'message'  => "smartphone record successfully deleted id # $id",
        ], 200);
    }
}
