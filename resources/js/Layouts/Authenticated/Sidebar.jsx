import { Link } from "@inertiajs/react";
import SidebarSubscriptionDetail from "./SidebarSubscriptionDetail";
// import MenuList and MenuItem
import MenuItem from "./MenuItem";
import { UserMenu, OthersMenu } from "./MenuList";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <a href="/">
                    <img src="/images/moonton.svg" alt="" />
                </a>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {/* looping UserMenu */}
                        {UserMenu.map((menu, index) => (
                            <MenuItem
                                key={`${menu.text}-${index}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                // jika link ada (tidak null) dan route mengarai ke link tersebut maka isActive akan true
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {OthersMenu.map((menu, index) => (
                            <MenuItem
                                key={`${menu.text}-${index}`}
                                link={menu.link}
                                icon={menu.icon}
                                text={menu.text}
                                // jika link ada (tidak null) dan route mengarai ke link tersebut maka isActive akan true
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                                method={menu.method}
                            />
                        ))}
                    </div>

                    {/* auth subscription detail jika activePlan */}
                    {/* cek pada model User dan Middleware HandleInertiaRequests */}
                    {auth.activePlan && (
                        <SidebarSubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.name == "Premium"}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
