import React from 'react';

const DetailCard = ({ name, location, date, rating, feedback, profileImage }) => {
    return (
        <div className="  p-6 mb-6 border  bg-[#F8F8f8]  shadow-sm rounded-xl flex gap-4 items-start">

            <div className=' h-[59px] w-[59px]  bg-[#FFF] rounded-full flex items-center justify-center ' >
                <img
                    src={profileImage}
                    alt={`${name} profile`}
                    className="w-[27px] h-[26px] rounded-full  "
                />
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                    <h2 className="font-semibold text-gray-800 text-lg">{name}</h2>
                    <span className="text-gray-500 text-sm whitespace-nowrap">{date}</span>
                </div>
                <p className="text-gray-500 text-sm mb-3">{location}</p>

                {/* Star Ratings */}
                <div className="flex mb-3">
                    {Array(rating)
                        .fill(0)
                        .map((_, index) => (
                            <span key={index} className="text-yellow-500 text-base">
                                ★
                            </span>
                        ))}
                    {Array(5 - rating)
                        .fill(0)
                        .map((_, index) => (
                            <span key={index} className="text-gray-300 text-base">
                                ★
                            </span>
                        ))}
                </div>

                {/* Feedback Content */}
                <p className="text-gray-600 text-sm leading-relaxed max-w-full sm:max-w-md md:max-w-2xl">
                    {feedback}
                </p>
            </div>
        </div>
    );
};

export default DetailCard;
