<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use App\Http\Controllers\User\SubscriptionPlanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
|
*/

// redirect login from /
Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->group(function () {
    // dashboard
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    // detail movie from slug
    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');
    // payment view
    Route::get('/subscription-plan', [SubscriptionPlanController::class, 'index'])->name('subcriptionPlan.index');
    //payment process send data with id subscription plan
    Route::post('/subscription-plan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscriptionPlan.userSubscribe');
});


// protory slicing /login
Route::prefix('prototype')->name('prototype.')->group(function () {
    // login
    Route::get('/login', function () {
        // menuju file pada Folder resources/js/Pages/Prototype/Login.jsx
        return Inertia::render('Prototype/Login');
    })->name('login');
    // regiter
    Route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');
    // subscription
    Route::get('/subscriptionPlan', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');
    // show details movie
    Route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
