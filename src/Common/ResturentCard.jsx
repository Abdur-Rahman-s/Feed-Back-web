import React from 'react';
import Bottega from '../assets/Bottega (1).png';
import cn from 'classnames'
import proptype from 'prop-types'
export const ResturentCard = ({ ImageUrl, Title, Desc, Ratings, bg, reviews }) => {
    return (
        <div className="border w-[285px] rounded-xl pb-4  shadow-md bg-white font-robotoRegular ">
            {/* Image */}
            <img src={ImageUrl || Bottega} alt="Activity" className="w-full h-48 object-cover rounded-md mb-4" />

            {/* Title */}
            <div className='ml-2' >
                <h1 className="text-[19px] font-[600] mb-2 text-[#232323] ">{Title || "Bottega"}</h1>

                {/* Description */}
                <p className=" text-[14px] mb-4 text-[#8F8F8F] ">
                    {Desc || "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."}
                </p>

                {/* Rating Section */}
                <div className='flex gap-1 items-center  ' >
                    {Array.from({ length: 5 }, (_, index) => (
                        <div className={cn(`flex gap-1 bg-SolidGray w-6 text-white rounded-sm  `, bg)}>
                            <span
                                key={index}
                                className={`material-symbols-outlined cursor-pointer 'text-yellow-400' : 'text-gray-300'
                                                    }`}
                            >
                                star
                            </span>
                        </div>
                    ))}
                    <div className='flex items-center ml-2   ' > <p className='font-[600] text-[14px] text-[#232323]' >{Ratings || '5.0'}</p>
                        <span className=' text-[#8F8F8F] ' >{reviews || '(876 reviews)'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


ResturentCard.proptype = {
    Title: proptype.string,
    Desc: proptype.string,
    Ratings: proptype.number,
    reviews: proptype.string
}
