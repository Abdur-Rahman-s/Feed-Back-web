import React, { useState } from 'react';
import Bella from '../assets/Bella.png';
import ellips from '../assets/Ellipse.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Bottega from '../assets/Bottega (1).png';


import img1 from '../assets/Poup (1).png'
import img2 from '../assets/Poup (2).png'
import img3 from '../assets/Poup (3).png'
import img4 from '../assets/Poup (4).png'
import img5 from '../assets/Poup (5).png'
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/iconc5.svg'
import map from '../assets/map2.png'
import facebook from '../assets/bi_facebook.svg'
import instagram from '../assets/instagram.svg'
import tiktok from '../assets/Tiktok.svg'
import whatsapp from '../assets/Whatsapp.svg'
import starLogo from '../assets/StarLogo.svg'
import FeedbackCard from '../Common/FeedbackCard';
import DetailCard from '../Common/DetailCard';
import profile1 from '../assets/Prof.svg'
import sortIcon from '../assets/SortIcon.svg'
import { ResturentCard } from '../Common/ResturentCard';
import { Footer } from '../Common/Footer';

const images = [img1, img2, img3, img4, img5]
export const RestaurantDetails = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSortOpen, setSortOpen] = useState(false);
    const [sortOption, setSortOption] = useState('All feedbacks');
    const toggleSortMenu = () => setSortOpen(!isSortOpen);


    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const feedbackData = [
        {
            name: 'Wei Jie',
            location: 'Singapore, Little India',
            date: '30/11/2023',
            rating: 5,
            feedback:
                'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
            profileImage: profile1,
        },
        {
            name: 'Mei Ling',
            location: 'Singapore, Orchard Boulevard',
            date: '04/10/2023',
            rating: 4,
            feedback:
                'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
            profileImage: profile1,
        },
        {
            name: 'Wei Xiong',
            location: 'Singapore, Tashashinga',
            date: '01/06/2023',
            rating: 5,
            feedback:
                'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
            profileImage: profile1,
        },
        {
            name: 'Ming Wei',
            location: 'Singapore, Little India',
            date: '21/04/2023',
            rating: 4,
            feedback:
                'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
            profileImage: profile1,
        },
        {
            name: 'Xin Yi',
            location: 'Singapore, 2nd Rooms',
            date: '30/03/2023',
            rating: 5,
            feedback:
                'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.',
            profileImage: profile1,
        },
    ];

    const sortedFeedback = [...feedbackData];
    if (sortOption === 'Highest rated') {
        sortedFeedback.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'Oldest rated') {
        sortedFeedback.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return (
        <section className="relative bg-gray-100 text-white">
            {/* Breadcrumb */}
            <div className="py-4 px-6 container mx-auto ">
                <h1 className="text-gray-500 text-start">
                    <span className="text-gray-700">Home</span> / BellaItalia
                </h1>
            </div>

            {/* Background Image */}
            <div
                className="w-full h-[500px] bg-cover bg-center relative flex flex-col justify-center items-center px-8"
                style={{ backgroundImage: `url(${Bella})` }}
            >
                {/* Content Section */}
                <div className="max-w-3xl text-center mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Bella italia</h2>

                    {/* Star Ratings */}
                    <div className="flex gap-2 justify-center items-center mb-4">
                        {Array(5)
                            .fill()
                            .map((_, index) => (
                                <span key={index} className="bg-white  text-yellow-400 text-2xl">&#9733;</span>
                            ))}
                        <span className="ml-2 text-lg font-bold">5.0 (834 reviews)</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-4">
                        The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                        The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                    </p>

                    {/* Location & Time */}
                    <div className="flex justify-center items-center space-x-4 mb-4">
                        {/* Location */}
                        <span className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1 font-bold text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 2.25c-4.97 0-9 3.773-9 8.375 0 4.355 6.24 10.93 8.385 12.856a1.5 1.5 0 001.23.519c.456-.005.903-.16 1.23-.519C14.76 21.555 21 15.98 21 10.625c0-4.602-4.03-8.375-9-8.375z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 13.125a2.625 2.625 0 110-5.25 2.625 2.625 0 010 5.25z"
                                />
                            </svg>
                            <span>Singapore, Bishan-Ang Mo Kio Park</span>
                        </span>

                        {/* Time */}
                        <span className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1 font-bold text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2"
                                />
                                <circle cx="12" cy="12" r="9" />
                            </svg>
                            <span>7/7, 08:00 - 22:00</span>
                        </span>
                    </div>
                </div>

                {/* Logo - Centered */}
                <div className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2">
                    <img
                        src={ellips}
                        alt="Restaurant Logo"
                        className="w-24 h-24 rounded-full border-4 border-white"
                    />
                </div>
            </div>

            <div className="py-12 bg-gray-100 container justify-center mt-[148px] mx-auto">
                <div className="text-start mb-8">
                    <h2 className="text-3xl font-bold font-Lexend text-[#1E1E1E]">
                        Discover our magnificent place in photos
                    </h2>
                    <p className="text-[#5E5E5E] font-robotoRegular text-start mt-2 max-w-lg">
                        The lorem ipsum is, in printing, a series of meaningless words used temporarily
                        to calibrate a layout. The lorem ipsum is, in printing...
                    </p>
                </div>

                {/* Image Grid */}
                <div className="flex flex-col md:flex-row gap-4">
                    <img
                        src={img1}
                        alt="Main Image"
                        className="object-cover w-full md:w-1/2 h-[400px] rounded-lg cursor-pointer"
                        onClick={() => openModal(0)}
                    />
                    <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
                        <img
                            src={img2}
                            alt="Gallery Image 1"
                            className="object-cover w-full h-[195px] rounded-lg cursor-pointer"
                            onClick={() => openModal(1)}
                        />
                        <img
                            src={img3}
                            alt="Gallery Image 2"
                            className="object-cover w-full h-[195px] rounded-lg cursor-pointer"
                            onClick={() => openModal(2)}
                        />
                        <img
                            src={img4}
                            alt="Gallery Image 3"
                            className="object-cover w-full h-[195px] rounded-lg cursor-pointer"
                            onClick={() => openModal(3)}
                        />
                        <img
                            src={img5}
                            alt="Gallery Image 4"
                            className="object-cover w-full h-[195px] rounded-lg cursor-pointer"
                            onClick={() => openModal(4)}
                        />
                    </div>
                </div>

                {/* Modal with Swiper */}
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        {/* Modal Content */}
                        <div className="relative w-full max-w-4xl px-4">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 z-40 text-white text-3xl bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition"
                                aria-label="Close modal"
                                onClick={closeModal}
                            >
                                &times;
                            </button>

                            {/* Swiper Carousel */}
                            <Swiper
                                navigation
                                pagination={{ clickable: true }}
                                modules={[Navigation, Pagination]}
                                initialSlide={currentIndex}
                                className="rounded-lg"
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={image}
                                            alt={`Slide ${index}`}
                                            className="object-contain w-full h-[80vh] rounded-md"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Thumbnail Navigation */}
                            <div className="flex justify-center space-x-2 mt-4">
                                {images.map((thumb, index) => (
                                    <button
                                        key={index}
                                        onClick={() => document.querySelector('.swiper').swiper.slideTo(index)}
                                        className="w-20 h-12 rounded overflow-hidden border-2 border-transparent hover:border-blue-500 focus:border-blue-500"
                                    >
                                        <img src={thumb} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <div className="container mx-auto px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side - Information */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <h2 className="text-2xl font-bold pb-[30px] text-gray-800">More Information</h2>
                    <ul className=" flex flex-col gap-[33px] text-gray-600">
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <img src={icon1} alt="Menu Icon" className="w-5 h-5" />
                            <a href="#" className="hover:underline">
                                See the menu
                            </a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <img src={icon2} alt="Phone Icon" className="w-5 h-5" />
                            <span>+847 87 37 29 01</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <img src={icon3} alt="Location Icon" className="w-5 h-5" />
                            <span>Singapore, Bishan</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <img src={icon4} alt="Clock Icon" className="w-5 h-5" />
                            <span>7/7, 08:00 - 22:00</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <img src={icon5} alt="Website Icon" className="w-5 h-5" />
                            <a
                                href="http://www.bellaitalia.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" hover:underline"
                            >
                                www.bellaitalia.com
                            </a>
                        </li>
                    </ul>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:opacity-75 transition duration-300">
                            <img src={facebook} alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-75 transition duration-300">
                            <img src={instagram} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-75 transition duration-300">
                            <img src={tiktok} alt="Tiktok" className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:opacity-75 transition duration-300">
                            <img src={whatsapp} alt="Whatsapp" className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Right Side - Map */}
                <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
                    <img
                        src={map}
                        alt="Map"
                        className="rounded-md h-[432px] w-full md:w-[80%] shadow-md"
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 py-6 border-t border-b mt-[52px] border-[#DCDCDC] ">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 p-4">
                    {/* Logo & Overall Rating */}
                    <div className="flex items-center space-x-4">
                        <img src={starLogo} alt="Star Logo" className="w-12 h-12" />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Overall rating</h3>
                            <p className="text-gray-600">834 Reviews</p>
                            <div className="flex space-x-1 mt-2">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span key={index} className="text-yellow-500 text-2xl">&#9733;</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Rating Bars */}
                    <div className="w-full max-w-md container mx-auto ">
                        {/* 5 Stars */}
                        <div className="flex items-center mb-2">
                            <span className="text-sm text-gray-600 w-12">5 stars</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>

                        {/* 4 Stars */}
                        <div className="flex items-center mb-2">
                            <span className="text-sm text-gray-600 w-12">4 stars</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                        </div>

                        {/* 3 Stars */}
                        <div className="flex items-center mb-2">
                            <span className="text-sm text-gray-600 w-12">3 stars</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                        </div>

                        {/* 2 Stars */}
                        <div className="flex items-center mb-2">
                            <span className="text-sm text-gray-600 w-12">2 stars</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                            </div>
                        </div>

                        {/* 1 Star */}
                        <div className="flex items-center mb-2">
                            <span className="text-sm text-gray-600 w-12">1 star</span>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                        <button
                            onClick={toggleSortMenu}
                            className="flex gap-2 py-2 px-4 border-2 border-gray-300 items-center rounded-full hover:bg-gray-100"
                        >
                            <img src={sortIcon} alt="Sort Icon" className="w-5 h-5" />
                            <span className="text-gray-600">Sort</span>
                        </button>

                        {/* Dropdown Menu */}
                        {isSortOpen && (
                            <div className="absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48">
                                <ul className="py-1">
                                    {['All feedbacks', 'Highest rated', 'Oldest rated'].map((option) => (
                                        <li
                                            key={option}
                                            onClick={() => {
                                                setSortOption(option);
                                                setSortOpen(false);
                                            }}
                                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition duration-200"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        )}
                    </div>
                </div>

                {/* Feedback Cards */}
                <div>
                    {sortedFeedback.map((item, index) => (
                        <DetailCard key={index} {...item} />
                    ))}
                </div>


                <div className='flex justify-center mt-[99px] ' >
                    <button className=' bg-[#1677BD] py-3 px-10 rounded-full text-white ' >Show more reviews</button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
    Also discover...
    </h2>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((_, index) => (
            <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform "
            >
                <img
                src={Bottega}
                    alt="Restaurant"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800">Bottega</h3>
                    <p className="text-gray-600 text-sm mt-1">
                        The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                    </p>
                    <div className="flex items-center mt-3 text-yellow-500">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <span key={i} className="text-lg">★</span>
                            ))}
                        <span className="ml-2 text-black font-bold">5.0</span>
                        <span className="ml-1 text-gray-500 text-sm">(876 reviews)</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

        <Footer className=" bg-[#f3f4f6] " />

        </section>
    );
};
