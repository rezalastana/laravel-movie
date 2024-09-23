<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        // kondisi jika $status true namun tidak memiliki subscriptionPlan active, redirect to /subscriptionPlan
        if ($status == 'true' && !Auth::user()->isActive) {
            return redirect()->route('subcriptionPlan.index');
        }
        // jika $status false, namun sudah memiliki subscriptionPlan active, redirect to /dashboard
        if ($status == 'false' && Auth::user()->isActive) {
            return redirect()->route('dashboard');
        }

        // jangan lupa daftarkan ke kernel
        return $next($request);
    }
}
