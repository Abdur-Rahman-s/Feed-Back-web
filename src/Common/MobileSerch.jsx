import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import SerchIcon from '../assets/Serch.svg';
import Group from '../assets/Group.svg';
import { Navbar } from '../components/Navbar';
import { useNavigate } from "react-router";

export const MobileSerch = () => {
    const [close, setClose] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        if (searchTerm.trim()) { // Check for non-empty search term
            navigate(`/restaurants?search=${searchTerm}`);
        }
    };

    const handleSerch = () => {
        setClose(!close);
    };

    if (close) {
        return <Navbar />;
    }

    return (
        <div className={`items-center lg:hidden py-4 flex justify-evenly animate-fadeIn ${close ? 'hidden' : 'block'} border border-SolidGray`}>
            <button onClick={handleSerch}>
                <FaArrowLeft />
            </button>

            {/* Form now wraps both the input and the search button */}
            <form
                onSubmit={handleSearchSubmit}
                className="border items-center w-[80%] border-[#ADADAD] rounded-full h-[51px] overflow-hidden"
            >
                <div className="flex items-center justify-between py-1">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="restaurant, hotel, service..."
                        className="outline-none pl-4 text-SolidGray w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {/* Search Button */}
                    <button type="submit" className="text-white flex items-center pr-3">
                        <img src={SerchIcon} alt="Search Icon" className="ml-5" />
                    </button>
                </div>
            </form>

            <img src={Group} alt="User Group" />

            <div className='w-full bg-slate-400 absolute top-6 z '  id='ShowItem' >
                {SerchIcon.Title}
            </div>

        </div>
    );
};
