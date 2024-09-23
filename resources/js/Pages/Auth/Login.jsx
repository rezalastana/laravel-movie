import React, { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    // use effect berfungsi untuk melakukan sesuatu ketika komponen di render (diawal), disini akan melakukan reset password
    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <div>
            <Head title="Login" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email Address"
                                    />

                                    {/* gunakan Input dari component */}
                                    <TextInput
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        placeholder="Email Address"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                        isFocused={true}
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-1"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-1"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* use Primarybutton */}
                                <PrimaryButton
                                    type="submit"
                                    processing={processing}
                                >
                                    <span className="text-base font-semibold">
                                        Star Watching
                                    </span>
                                </PrimaryButton>
                                {/* use Link to register */}
                                <Link href={route("register")}>
                                    <PrimaryButton
                                        type="button"
                                        variant="light-outline"
                                    >
                                        Create New Account
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
