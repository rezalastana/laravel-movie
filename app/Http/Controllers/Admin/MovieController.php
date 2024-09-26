<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Movie/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    // arahkan ke function store yang sesuai dibuat di Store Admin/Movie/Store
    public function store(Store $store)
    {
        // validate the request with store 
        $data = $store->validated();
        // simpan image thumbnail, ini akan disimpan di storage/app/public/movies
        $data['thumbnail'] = Storage::disk('public')->put('movies', $store->file('thumbnail'));
        // buat data slug dari name
        $data['slug'] = Str::slug($data['name']); // name: The Shawshank Redemption, slug: the-shawshank-redemption

        // save data
        Movie::create($data);

        // with bisa digunakan untuk menampilkan pesan kembali ke user (flash message)
        return redirect()->route('admin.dashboard.movie.index')->with(
            [
                'type' => 'success',
                'message' => 'Movie created successfully.'
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        //
    }
}
