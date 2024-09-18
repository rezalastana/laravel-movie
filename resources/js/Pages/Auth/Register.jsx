import React, { useEffect } from "react";

import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";

import { Link, Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Register() {
    // use form
    // data berisi data yang diinputkan oleh user
    // setData berfungsi untuk mengubah data
    // post berfungsi untuk mengirimkan data ke server (method api, seperti post, get, put, delete)
    // processing berfungsi untuk mengecek apakah form sedang diproses atau tidak
    // errors berfungsi untuk menampung error yang dihasilkan dari server
    const { data, setData, post, processing, errors, reset } = useForm({
        // inisialisasi data dari setData
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // use effect
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    // handle change
    // const onHandleChange = (e) => {
    //     setData(e.target.name, e.target.value);
    // };

    // submit form
    const submit = (e) => {
        e.preventDefault();

        // console.log(data);
        // mengarah ke route auth
        post(route("register"));
    };

    return (
        <>
            <Head title="Sign Up" />
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
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />
                                    {/* <input
                                    type="text"
                                    name="name"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Your name..."
                                    value="Angga React"
                                /> */}
                                    <TextInput
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        placeholder="Your fullname..."
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="email"
                                        value="Email Address"
                                    />
                                    <TextInput
                                        type="text"
                                        name="email"
                                        value={data.email}
                                        placeholder="Your Email..."
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
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
                                        placeholder="Your Password..."
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Password Confirmation"
                                    />
                                    <TextInput
                                        type="password"
                                        name="password_confimation"
                                        value={data.password_confirmation}
                                        placeholder="Your Password..."
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value,
                                            )
                                        }
                                        required
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* submit form button */}
                                <PrimaryButton
                                    type="submit"
                                    processing={processing}
                                    // variant="light-alerange"
                                >
                                    Sign Up
                                </PrimaryButton>

                                <Link href={route("login")}>
                                    <PrimaryButton
                                        type="button"
                                        variant="light-outline"
                                    >
                                        Sign In to My Account
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
