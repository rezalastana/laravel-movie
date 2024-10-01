<?php

namespace App\Http\Requests\Admin\Movie;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class Store extends FormRequest
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
            'name' => 'required|unique:movies,name|string|max:255',
            'category' => 'required|string|max:255',
            'video_url' => 'required|url|string|max:255',
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,svg',
            'rating' => 'required|numeric|min:0|max:5',
            'is_featured' => 'nullable|boolean',
        ];
    }
}
