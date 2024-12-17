import React from 'react'
import PropTypes from "prop-types";
import cn from "classnames";
export const ReviewCard = ({
    ImageUrl,
    Title,
    Desc,
    Ratings,
    Reviews,
    className,
}) => {
    
    const roundedRating = Math.round(Ratings || 0);

    return (
        <div
            className={cn(
                ` flex  items-center border-b border-b-SolidGray  mt-[34px]  bg-white font-sans`,
                className
            )}
        >
            {/* Image */}
            <img
                src={ImageUrl}
                alt={Title || "Restaurant"}
                className=" h-[94px] w-[104px] md:w-[209px] md:h-[189px] object-cover rounded-t-xl mb-4"
            />

            {/* Content */}
            <div className="px-4">
                {/* Title */}
                <h2 className="text-lg font-semibold text-[#232323] mb-2">
                    {Title || "Restaurant Name"}
                </h2>

                {/* Description */}
                <p className="text-sm text-[#8F8F8F]  leading-relaxed">
                    {Desc ||
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut tempor metus."}
                </p>

                <div className="flex items-center gap-2">
                    <div className="flex">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span
                                key={index}
                                className={cn("text-2xl", {
                                    "text-yellow-400": index < roundedRating,
                                    "text-gray-300": index >= roundedRating, 
                                })}
                            >
                                ★
                            </span>
                        ))}
                    </div>

                    {/* Rating Number */}
                    <p className="font-semibold text-sm text-[#232323]">
                        {Ratings?.toFixed(1) || "5.0"}
                    </p>

                    {/* Review Count */}
                    <p className="text-[8px] sm:text-xs  text-gray-500">({Reviews || "100 reviews"})</p>
                </div>
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    ImageUrl: PropTypes.string,
    Title: PropTypes.string,
    Desc: PropTypes.string,
    Ratings: PropTypes.number,
    Reviews: PropTypes.string,
};

ReviewCard.defaultProps = {
    Title: "The snug",
    Desc: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    Ratings: 4.5,
    Reviews: "654 reviews",
};