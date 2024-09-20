<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubcription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        $subscriptionPlans = SubscriptionPlan::all();

        // return $subscriptionPlans;

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => $subscriptionPlans
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        // Cek apakah subscriptionPlan diisi
        if (!$subscriptionPlan) {
            return response()->json(['message' => 'Subscription plan not found'], 404);
        }

        //jika ada
        // return response()->json($subscriptionPlan);

        // input data to userSubcriptionPlan
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'success',
        ];
        // return response()->json($data);

        //masukkan data kedalam db userSubscription
        $userSubscription = UserSubcription::create($data);

        return redirect()->route('dashboard')->with('success', 'Subscription success');
    }
}
