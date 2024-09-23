import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
// router silahkan di cek pada https://inertiajs.com/manual-visits
import { router } from "@inertiajs/react";

export default function SubscriptionPlan({ auth, subscriptionPlans }) {
    // params id akan digunakan untuk mengirimkan id ke backend
    const selectSubcription = (id) => {
        console.log(id);

        //akan kita kirimkan ke backend pada subcriptionController method userSubscribe
        //karena pada web route terdapat parameter {subscriptionPlan} maka kita harus mengirimkan id dengan mengambil nilai id, jadi misal memilih id 1 menjadi -> /subcriptionPlan/1/user-subcribe
        router.post(
            route("subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            }),
        );
    };

    return (
        <Authenticated auth={auth}>
            <Head>
                <title>Payments</title>
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* BASIC */}
                    {subscriptionPlans.map((plan) => (
                        <SubscriptionCard
                            key={plan.id}
                            isPremium={plan.name === "Premium"}
                            name={plan.name}
                            price={plan.price}
                            durationInMonth={plan.active_period_in_month}
                            // karena data bernilai JSON, maka di parse terlebih dahulu
                            features={JSON.parse(plan.featured)}
                            // button click
                            onSelectSubscription={() =>
                                // mengarah pada function diatas yaitu selectSubcription dan mengambil id dari subcriptionPlans
                                selectSubcription(plan.id)
                            }
                        />
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
