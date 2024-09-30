<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        // hanya admin yang bisa melakukan request ini
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        // rules request
        return [
            // tambahkan movie id pada name, agar tidak terduplikasi
            'name' => 'nullable|unique:movies,name|string|max:255' . $this->movie->id,
            'category' => 'nullable|string|max:255',
            'video_url' => 'nullable|url|string|max:255',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,svg',
            'rating' => 'nullable|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean',
        ];
    }
}
