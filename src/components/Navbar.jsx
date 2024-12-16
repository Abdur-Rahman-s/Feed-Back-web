import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import SearchIcon from "../assets/Serch.svg";
import { Button } from "@/components/ui/button";
import Group from "../assets/Group.svg";
import { MobileSerch } from "../Common/MobileSerch";

export const Navbar = () => {
    const [mobileSearch, setMobileSearch] = useState(false);

    function handleSearchBarToggle() {
        setMobileSearch(!mobileSearch);
    }

    // Render Mobile Search if `mobileSearch` is true
    if (mobileSearch) {
        return <MobileSerch />;
    }
    else {
        return (
            <nav className=" border border-[#AFAFAF] " >
                <header className="-z-20 lg:container mx-auto flex items-center justify-between py-4 animate-fadeIn ">
                    {/* Logo Section */}
                    <img src={Logo} alt="Navigation Logo" className="h-[40px] md:h-[49px]" />

                    {/* Search Section */}
                    <div className="border items-center hidden lg:block border-[#ADADAD] rounded-full h-[51px] overflow-hidden">
                        <div className="flex items-center py-1">
                            {/* First Input */}
                            <input
                                type="text"
                                placeholder="restaurant, hotel, service..."
                                className="outline-none pl-4 text-SolidGray"
                                aria-label="Search for restaurant, hotel, service"
                            />

                            {/* Second Input */}
                            <input
                                type="text"
                                placeholder="Singapore"
                                className="border-l ml-7 pl-4 h-6 text-SolidGray border-l-black outline-none"
                                aria-label="Enter location"
                            />

                            {/* Search Button */}
                            <button className="text-white flex items-center pr-1" aria-label="Search">
                                <img src={SearchIcon} alt="Search Icon" className="ml-5" />
                            </button>
                        </div>
                    </div>

                    {/* Button for Mobile Device */}
                    <div className="flex gap-4 md:gap-3">
                        <button
                            className="text-white lg:hidden block px-6 items-center pr-1"
                            onClick={handleSearchBarToggle}
                            aria-label="Open mobile search"
                        >
                            <img src={SearchIcon} alt="Search Icon" className="ml-5" />
                        </button>
                        <img src={Group} alt="User group icon" className="md:block hidden" />
                        <Button
                            className="rounded-full text-xs md:text-[15.5px] px-2 md:px-5"
                        >
                            MyFeedback for business
                        </Button>
                    </div>
                </header>
            </nav>
        );
    };
}