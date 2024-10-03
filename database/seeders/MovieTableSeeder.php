<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use GuzzleHttp\Client;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $client = new Client();
        $accessKey = env('UNSPLASH_ACCESS_KEY');

        // Mengambil gambar dari Unsplash
        $response = $client->get("https://api.unsplash.com/photos/random?client_id={$accessKey}");
        $data = json_decode($response->getBody(), true);

        // Ambil URL thumbnail dari Unsplash
        $thumbnailUrl = $data['urls']['small']; // Anda bisa memilih 'small', 'medium', atau 'large' sesuai kebutuhan


        $movie = [
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' => $thumbnailUrl,
                'rating' => 4.2,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
                'thumbnail' => $thumbnailUrl,
                'rating' => 4.0,
                'is_featured' => false,
            ],
            [
                'name' => '12 Angry',
                'slug' => '12-angry',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=A7CBKT0PWFA',
                'thumbnail' => $thumbnailUrl,
                'rating' => 4.9,
                'is_featured' => false,
            ]
        ];

        Movie::insert($movie);
    }
}
