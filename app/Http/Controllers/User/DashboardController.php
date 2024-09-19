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

        //browse untuk movie biasa
        $movies = Movie::get();


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
