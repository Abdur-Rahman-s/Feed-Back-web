import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Profile from '../assets/Profile.svg'
const FeedbackCard = ({
    userName,
    location,
    date,
    rating,
    description,
    images,
    onDiscoverClick,
    className,
}) => {
    const roundedRating = Math.round(rating || 0); // Round rating to integer

    return (
        <div
            className={cn(
                'border rounded-lg shadow-md p-4 bg-[#F8F8F8] font-robotoRegular max-w-sm',
                className
            )}
        >
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">

                <div className="w-12 h-12  bg-w flex items-center justify-center rounded-full">
                    <img src={Profile} alt="" />
                </div>

                <div>
                    <h2 className="text-lg font-bold text-[#232323]">{userName}</h2>
                    <p className="text-sm text-[#8F8F8F]">{location}</p>
                </div>
            </div>

            {/* Ratings */}
            <div className="flex items-center mb-2">
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
                <p className="text-sm text-[#8F8F8F] ml-2">{date}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-[#8F8F8F] leading-relaxed mb-4">
                {description ||
                    'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.'}
            </p>

            {/* Images */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                {images?.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`preview-${index}`}
                        className="w-full h-[70px] object-cover rounded"
                    />
                ))}
            </div>

            {/* Discover Link */}
            <button
                onClick={onDiscoverClick}
                className=" font-semibold hover:underline"
            >
                Discover
            </button>
        </div>
    );
};

// Prop Types
FeedbackCard.propTypes = {
    userName: PropTypes.string.isRequired,
    location: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    onDiscoverClick: PropTypes.func,
    className: PropTypes.string,
};

// Default Props
FeedbackCard.defaultProps = {
    location: 'Unknown Location',
    date: '01/01/2024',
    rating: 5,
    description: 'This is a default description text.',
    images: [],
};

export default FeedbackCard;
