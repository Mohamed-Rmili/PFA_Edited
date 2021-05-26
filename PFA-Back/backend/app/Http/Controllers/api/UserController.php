<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserController extends Controller
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
            'users'  => User::all(),
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
            "role" => 'required'
        ]);
        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $user = new User;
            $user->CIN = $request->input('CIN');
            $user->name = $request->input('name');
            $user->address = $request->input('address');
            $user->email = $request->input('email');
            $user->username = $request->input('username');
            $user->password = $request->input('password');
            $user->permis = $request->input('permis');
            $user->prenom = $request->input('prenom');
            $user->image = $request->input('image');
            $user->modeAuto = $request->input('modeAuto');
            $user->sex = $request->input('sex');
            $user->dateNais = $request->input('dateNais');
            $user->role = $request->input('role');

            $user->save();    
            return response()->json([
                'error' => false,
                'user'  => $user,
            ], 200);
        }
    }
    public function show($id)
    {
        $user = User::find($id);

        if(is_null($user)){
            return response()->json([
                'error' => true,
                'message'  => "User with id # $id not found",
            ], 404);
        }

        return response()->json([
            'error' => false,
            'user'  => $user,
        ], 200);
    }

    public function update(Request $request, $id)
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
            "role" =>'required'
            
        ]);

        if($validation->fails()){
            return response()->json([
                'error' => true,
                'messages'  => $validation->errors(),
            ], 200);
        }
        else
        {
            $user = User::find($id);
            $user->CIN = $request->input('CIN');
            $user->name = $request->input('name');
            $user->address = $request->input('address');
            $user->email = $request->input('email');
            $user->username = $request->input('username');
            $user->password = $request->input('password');
            $user->permis = $request->input('permis');
            $user->prenom = $request->input('prenom');
            $user->image = $request->input('image');
            $user->modeAuto = $request->input('modeAuto');
            $user->sex = $request->input('sex');
            $user->dateNais = $request->input('dateNais');
            $user->role = $request->input('role');
            $user->save();
    
            return response()->json([
                'error' => false,
                'user'  => $user,
            ], 200);
        }
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if(is_null($user)){
            return response()->json([
                'error' => true,
                'message'  => "User with id # $id not found",
            ], 404);
        }

        $user->delete();
    
        return response()->json([
            'error' => false,
            'message'  => "User record successfully deleted id # $id",
        ], 200);
    }
}
