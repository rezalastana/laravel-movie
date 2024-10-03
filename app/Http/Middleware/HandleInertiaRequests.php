<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Carbon\Carbon;


class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    // function untuk mengambil data user subscription active
    private function activePlan()
    {
        $activePlan = Auth::user() ? Auth::user()->lastActiveUserSubscription : null;

        if (!$activePlan) {
            return null;
        }

        // logika untuk mengetahui hari expired date
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subscriptionPlan->active_period_in_months);
        // active days misal 1 bulan = 30 hari dll
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);

        // remaining days, berapa hari bedanya dengan tanggal sekarang
        $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());

        return [
            // tampilan pada sidebar subcriptionDetail
            'name' => $activePlan->subscriptionPlan->name, //misal Basic, Premium, dll
            'remainingActiveDays' => $remainingActiveDays, // misal 10,20,30 
            'activeDays' => $activeDays, // misal of 30,60,120 days 
        ];
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            // ini akan menjadi global variable yang dapat digunakan di semua file
            'auth' => [
                'user' => $request->user(),
                // tambahkan activePlan
                'activePlan' => $this->activePlan(),
            ],
            // menampilkan flash message dari controller
            'flashMessage' => [
                'type' => $request->session()->get('type'),
                'message' => $request->session()->get('message'),
            ],
            'env' => [
                'MIDTRANS_SERVERKEY' => env('MIDTRANS_SERVERKEY'),
                'MIDTRANS_CLIENTKEY' => env('MIDTRANS_CLIENTKEY'),
            ]
        ];
    }
}
