import React, { useEffect, useState } from 'react';
import sortIcon from '../assets/SortIcon.svg';
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { ReviewCard } from '../Common/ReviewCard';
import Image1 from '../assets/Review (1).png';
import Image2 from '../assets/Review (2).png';
import Image3 from '../assets/Review (3).png';
import Image4 from '../assets/Review (4).png';
import Image5 from '../assets/Review (5).png';
import Image6 from '../assets/Review (6).png';
import Image7 from '../assets/Review (7).png';
import { Blank } from '../Common/Blank';
import Map from '../assets/Map.png'


export const Resturent = () => {
    const [isSortOpen, setSortOpen] = useState(false);
    const [sortOption, setSortOption] = useState('All feedbacks');
    const [serchItem, setSerchItem] = useState('');
    const { search } = useLocation();
    const toggleSortMenu = () => setSortOpen(!isSortOpen);

    useEffect(() => {
        const params = new URLSearchParams(search);
        const query = params.get('search');
        setSerchItem(query || '');
    }, [search]);

    const Singapore = [
        { image: Image1, Title: 'The snug', Desc: 'The lorem ipsum...', Ratings: 4.5, Reviews: '(654 reviews)', location: { lat: 1.290270, lng: 103.851959 } },
        { image: Image2, Title: 'Bottega', Desc: 'The lorem ipsum...', Ratings: 5.0, Reviews: '(1654 reviews)', location: { lat: 1.290470, lng: 103.851460 } },
        { image: Image3, Title: 'Little Shucker', Desc: 'The lorem ipsum...', Ratings: 3.0, Reviews: '(553 reviews)', location: { lat: 1.292270, lng: 103.855959 } },
        { image: Image4, Title: 'Lokma', Desc: 'The lorem ipsum...', Ratings: 3.5, Reviews: '(654 reviews)', location: { lat: 1.294270, lng: 103.852059 } },
        { image: Image5, Title: 'Starbelly', Desc: 'The lorem ipsum...', Ratings: 2.5, Reviews: '(654 reviews)', location: { lat: 1.296270, lng: 103.853059 } },
        { image: Image6, Title: 'The melt', Desc: 'The lorem ipsum...', Ratings: 1.5, Reviews: '(654 reviews)', location: { lat: 1.298270, lng: 103.854059 } },
        { image: Image7, Title: 'Arabia Nights', Desc: 'The lorem ipsum...', Ratings: 4.5, Reviews: '(654 reviews)', location: { lat: 1.300270, lng: 103.855059 } },
    ];

    const Paris = [
        { image: Image1, Title: 'The snug', Desc: 'The lorem ipsum...', Ratings: 4.5, Reviews: '(654 reviews)', location: { lat: 48.8566, lng: 2.3522 } },
        { image: Image2, Title: 'Bottega', Desc: 'The lorem ipsum...', Ratings: 5.0, Reviews: '(1654 reviews)', location: { lat: 48.8576, lng: 2.3527 } },
        { image: Image3, Title: 'Little Shucker', Desc: 'The lorem ipsum...', Ratings: 3.0, Reviews: '(553 reviews)', location: { lat: 48.8586, lng: 2.3532 } },
        { image: Image4, Title: 'Lokma', Desc: 'The lorem ipsum...', Ratings: 3.5, Reviews: '(654 reviews)', location: { lat: 48.8596, lng: 2.3542 } },
        { image: Image5, Title: 'Starbelly', Desc: 'The lorem ipsum...', Ratings: 2.5, Reviews: '(654 reviews)', location: { lat: 48.8606, lng: 2.3552 } },
        { image: Image6, Title: 'The melt', Desc: 'The lorem ipsum...', Ratings: 1.5, Reviews: '(654 reviews)', location: { lat: 48.8616, lng: 2.3562 } },
        { image: Image7, Title: 'Arabia Nights', Desc: 'The lorem ipsum...', Ratings: 4.5, Reviews: '(654 reviews)', location: { lat: 48.8626, lng: 2.3572 } },
    ];

    const selectedData = (serchItem || '').toLocaleLowerCase().includes('singapore') ? Singapore : Paris;

    const filteredRestaurants = selectedData.filter((item) => {
        const searchQuery = serchItem ? serchItem.toLocaleLowerCase() : '';
        return (
            (item.Title && item.Title.toLowerCase().includes(searchQuery)) ||
            (item.Desc && item.Desc.toLowerCase().includes(searchQuery))
        );
    });

    const sortedRestaurants = filteredRestaurants.slice(); 
    if (sortOption === 'Highest rated') {
        sortedRestaurants.sort((a, b) => Number(b.Ratings) - Number(a.Ratings)); 
    } else if (sortOption === 'Oldest rated') {
        sortedRestaurants.sort((a, b) => Number(a.Ratings) - Number(b.Ratings)); 
    }

    return (
        <section className="container flex flex-col lg:flex-row font-robotoRegular mx-auto p-4 relative justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
                <p className="mb-4 font-bold">
                    <Link to="/">Home</Link> / All restaurants
                </p>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold capitalize">
                        Best restaurants in Singapore
                    </h1>
                    <button
                        onClick={toggleSortMenu}
                        className="flex gap-2 py-2 px-4 border-2 border-gray-300 items-center rounded-full hover:bg-gray-100"
                    >
                        <img src={sortIcon} alt="Sort Icon" className="w-5 h-5" />
                        <span className="text-gray-600">Sort</span>
                    </button>
                </div>
                {isSortOpen && (
                    <div className="absolute right-5 top-24 bg-white shadow-lg border rounded-md w-full sm:w-auto">
                        <div className='right-8 top-4 p-3 border absolute cursor-pointer rounded-full'>
                            <AiOutlineClose onClick={toggleSortMenu} />
                        </div>
                        <div className="flex flex-col py-4 pr-24 pl-4">
                            <button
                                onClick={() => { setSortOption('All feedbacks'); toggleSortMenu(); }}
                                className={`hover:bg-[#f5f7ff] hover:text-[#2146C7] cursor-pointer px-6 py-2 ${sortOption === 'All feedbacks' && 'text-[#2146C7]'}`}
                            >
                                All feedbacks
                            </button>
                            <button
                                onClick={() => { setSortOption('Highest rated'); toggleSortMenu(); }}
                                className={`hover:bg-[#f5f7ff] hover:text-[#2146C7] cursor-pointer px-6 py-2 ${sortOption === 'Highest rated' && 'text-[#2146C7]'}`}
                            >
                                Highest rated
                            </button>
                            <button
                                onClick={() => { setSortOption('Oldest rated'); toggleSortMenu(); }}
                                className={`hover:bg-[#f5f7ff] hover:text-[#2146C7] cursor-pointer px-6 py-2 ${sortOption === 'Oldest rated' && 'text-[#2146C7]'}`}
                            >
                                Oldest rated
                            </button>
                        </div>
                    </div>
                )}
                        <div>
            {sortedRestaurants.length === 0 ? (
                <Blank />
            ) : (
                <div>
                    {sortedRestaurants.map((item, index) => (
                        <Link
                            key={index}
                            to="/RestaurantDetails"
                            state={{ restaurant: item }} // Pass dynamic data
                        >
                            <ReviewCard
                                ImageUrl={item.image}
                                Title={item.Title}
                                Desc={item.Desc}
                                Ratings={item.Ratings}
                                Reviews={item.Reviews}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 lg:mt-0 lg:w-1/3 w-full">
                <img src={Map} alt="Map" className="w-full h-auto rounded-lg" />
            </div>
        </section>
    );
};
