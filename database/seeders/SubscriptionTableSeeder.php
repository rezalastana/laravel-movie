<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                "name" => 'Basic',
                "price" => 200000,
                "active_period_in_months" => 3,
                "featured" => json_encode([
                    "featured 1",
                    "featured 2",
                    "featured 3"
                ])
            ],
            [
                "name" => 'Premium',
                "price" => 400000,
                "active_period_in_months" => 3,
                "featured" => json_encode([
                    "featured 1",
                    "featured 2",
                    "featured 3"
                ])
            ]
        ];
        SubscriptionPlan::insert($subscriptionPlans);
    }
}
