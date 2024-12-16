import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Bottega from '../assets/Bottega (1).png';

export const ResturentCard = ({ ImageUrl, Title, Desc, Ratings, reviews , className}) => {
    const roundedRating = Math.round(Ratings || 0); // Round the rating value

    return (
        <div className={cn(`border w-[285px] rounded-xl pb-4 shadow-md bg-white font-robotoRegular` , className )}>
            {/* Image */}
            <img
                src={ImageUrl || Bottega}
                alt="Activity"
                className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Title */}
            <div className="ml-2">
                <h1 className="text-[19px] font-[600] mb-2 text-[#232323]">
                    {Title || 'Bottega'}
                </h1>

                {/* Description */}
                <p className="text-[14px] mb-4 text-[#8F8F8F]">
                    {Desc ||
                        'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'}
                </p>

                {/* Rating Section */}
                <div className="flex gap-1 items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                        <span
                            key={index}
                            className={cn(
                                'material-symbols-outlined text-[24px] cursor-pointer transition-all duration-200',
                                {
                                    'text-yellow-400': index < roundedRating, // Color for filled stars
                                    'text-gray-300': index >= roundedRating, // Color for unfilled stars
                                }
                            )}
                        >
                            star
                        </span>
                    ))}
                    <div className="flex items-center ml-2">
                        <p className="font-[600] text-[14px] text-[#232323]">
                            {Ratings?.toFixed(1) || '5.0'}
                        </p>
                        <span className="text-[#8F8F8F]">{reviews || '(876 reviews)'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

ResturentCard.propTypes = {
    ImageUrl: PropTypes.string,
    Title: PropTypes.string,
    Desc: PropTypes.string,
    Ratings: PropTypes.number,
    reviews: PropTypes.string,
};

ResturentCard.defaultProps = {
    Title: 'Bottega',
    Desc: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
    Ratings: 5.0,
    reviews: '(876 reviews)',
};
