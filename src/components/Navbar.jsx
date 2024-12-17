import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import SearchIcon from "../assets/Serch.svg";
import { Button } from "@/components/ui/button";
import Group from "../assets/Group.svg";
import { MobileSerch } from "../Common/MobileSerch";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const restaurantData = [
    { title: "The snug", location: "Singapore" },
    { title: "Bottega", location: "Singapore" },
    { title: 'Little Shucker', location: "Singapore" },
    { title: 'Lokma', location: "Singapore" },
    { title: 'Starbelly', location: "Singapore" },
    { title:  'The melt', location: "Singapore" },
    { title:  'Arabia Nights', location: "Singapore" },

];

export const Navbar = () => {
    const [mobileSearch, setMobileSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/restaurants?search=${searchTerm}`);
        }
    };

    const handleSearchBarToggle = () => {
        setMobileSearch(!mobileSearch);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchTerm(query);

        if (query) {
            const filteredSuggestions = restaurantData.filter(restaurant =>
                restaurant.title.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (title) => {
        setSearchTerm(title);
        setSuggestions([]);
    };

    if (mobileSearch) {
        return <MobileSerch SerchItem={searchTerm} setISerchItem={setSearchTerm} />;
    } else {
        return (
            <nav className="border border-[#AFAFAF]">
                <header className="-z-20 lg:container mx-auto flex items-center justify-between py-4 animate-fadeIn">
                    {/* Logo Section */}
                    <Link to="/">
                        <img src={Logo} alt="Navigation Logo" className="h-[40px] md:h-[49px] cursor-pointer " />
                    </Link>

                    {/* Search Section */}
                    <div>
                        <div className="border items-center hidden lg:block border-[#ADADAD] rounded-full h-[51px] overflow-hidden">
                            {/* Form for Search */}
                            <form onSubmit={handleSearchSubmit} className="flex items-center py-1">
                                {/* First Input */}
                                <input
                                    type="text"
                                    placeholder="restaurant, hotel, service..."
                                    className="outline-none pl-4 text-SolidGray"
                                    aria-label="Search for restaurant, hotel, service"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />

                                {/* Second Input */}
                                <input
                                    type="text"
                                    placeholder="Singapore"
                                    className="border-l ml-7 pl-4 h-6 text-SolidGray border-l-black outline-none"
                                    aria-label="Enter location"
                                />

                                {/* Search Button */}
                                <button
                                    type="submit"
                                    className="text-white flex items-center pr-1"
                                    aria-label="Search"
                                >
                                    <img src={SearchIcon} alt="Search Icon" className="ml-5" />
                                </button>
                            </form>

                            {/* Suggestions Dropdown */}
                            {searchTerm && suggestions.length > 0 && (
                                <div className="absolute bg-[#e2e2e2] shadow-lg rounded-md mt-1 w-1/4 z-10">
                                    {suggestions.map((suggestion, index) => (
                                        <div
                                            key={index}
                                            className="cursor-pointer py-2 px-4 hover:bg-gray-200"
                                            onClick={() => handleSuggestionClick(suggestion.title)}
                                        >
                                            {suggestion.title}
                                        </div>
                                    ))}
                                </div>
                            )}
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
                        <Button className="rounded-full text-xs md:text-[15.5px] px-2 md:px-5">
                            MyFeedback for business
                        </Button>
                    </div>
                </header>
            </nav>
        );
    }
};
