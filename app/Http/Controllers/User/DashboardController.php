<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;

class DashboardController extends Controller
{
    public function index()
    {
        // ambil data fetured movie
        //whereisFeatured didapatkan dari database movie -> kolom is_featured
        $featuredMovies = Movie::whereIsFeatured(true)->get();

        // get all browse untuk seluruh movie
        $movies = Movie::all();

        // dd($movies);


        // lihat data, berupa json
        // return [
        //     'featuredMovies' => $featuredMovies,
        //     'movies' => $movies,
        // ];

        // return 
        return inertia('User/Dashboard/Index', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movies,
        ]);
    }
}
