// sidebar
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// auth adalah global variable, bisa di cek di middleware laravel HandleInertiaRequests auth memiliki user, activePlan, dan menyesuaikan kebutuhan
export default function Authenticated({ auth, children }) {
    return (
        <div>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* START sidebar */}
                {/* bawa auth ke sidebar untuk mendapatkan data user active subscription */}
                <Sidebar auth={auth} />
                {/* END sidebar */}

                {/* START content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* START topbar */}
                        <Topbar name={auth.user.name} />
                        {/* END topbar */}

                        {/* main */}
                        <main>{children}</main>
                    </div>
                </div>

                {/* END content */}
            </div>

            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </div>
    );
}
