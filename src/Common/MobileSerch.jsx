import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import SerchIcon from '../assets/Serch.svg';
import Group from '../assets/Group.svg';
import { Navbar } from '../components/Navbar';


export const MobileSerch = () => {
    const [close , setClose] = useState(false);
    function handleSerch() {
        setClose(!close)
    }
    if(close) {
        return <Navbar/>
    }
    return (
        <div className={`items-center lg:hidden py-4 flex justify-evenly animate-fadeIn ${close ? 'hidden' : 'block' } border border-SolidGray `}>
            <button onClick={handleSerch} >
                <FaArrowLeft />
            </button>
            <div className="border items-center w-[80%] border-[#ADADAD] rounded-full h-[51px] overflow-hidden">
                <div className="flex items-center py-1 justify-between">
                    {/* First Input */}
                    <input
                        type="text"
                        placeholder="restaurant, hotel, service..."
                        className="outline-none pl-4 text-SolidGray"
                    />
                    {/* Search Button */}
                    <button className="text-white flex items-center pr-1">
                        <img src={SerchIcon} alt="Search Icon" className="ml-5" />
                    </button>
                </div>
            </div>
            <img src={Group} alt="User Group" />
        </div>
    );
};
