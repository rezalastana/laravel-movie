import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function SubscriptionPlan() {
    return (
        <Authenticated>
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
                    {/* pada pemanggilan component akan bernilai default false */}
                    {/* BASIC */}
                    <SubscriptionCard
                        isPremium={false}
                        name="Basic"
                        price={100}
                        durationInMonth={1}
                        // bisa dibuat menjadi banyak dengan array
                        features={["Features 1", "Features 2", "Features 3"]}
                    />
                    {/* FOR GREATEST buat component bernilai true */}
                    <SubscriptionCard
                        isPremium={true}
                        name="For Greatest"
                        price={200}
                        durationInMonth={1}
                        features={["Features 1", "Features 2", "Features 3"]}
                    />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
