import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
// import Link dan Head dari inertia-react
// Link berfungsi untuk membuat link a href
// Head berfungsi untuk mengubah title halaman secara dinamis
import { Link, Head } from "@inertiajs/react";

export default function Login() {
    return (
        <>
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
                        <form className="w-[370px]">
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
                                        placeholder="Email Address"
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
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* use Primarybutton */}
                                <Link href={route("prototype.dashboard")}>
                                    <PrimaryButton
                                        // type ,text, onClick dimasukkan dalam ...props karena tidak disebutkan secara eksplisit
                                        type="button"
                                        text="hello,"
                                        // onClick={() => alert("Button Clicked!")}
                                    >
                                        Start Watching
                                    </PrimaryButton>
                                </Link>
                                {/* use Link to register */}
                                <Link href={route("prototype.register")}>
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
        </>
    );
}
