import React, { useEffect, useState } from "react";
import { ResturentCard } from "../Common/ResturentCard";
import FeedbackCard from "../Common/FeedbackCard";


// Importing all category images
import All from "/All.svg";
import Restaurants from "/Resturent.svg";
import Hotels from "/Hotels.svg";
import Homeservices from "/services.svg";
import Shopping from "/Shopping.svg";
import Carlocation from "/location.svg";
import Beauty from "/Beauty.svg";
import Park from "/Park.svg";
import Museum from "/museum.svg";
import Wash from "/wash.svg";
import Bars from "/Bars.svg";
import Gyms from "/Gyms.svg";
import rightSlide from '../assets/Left.svg';
import leftSlide from '../assets/Right.svg';
import slideImage2 from '../assets/Bottega (2).png'
import slideImage3 from '../assets/Bottega (3).png'
import slideImage4 from '../assets/Bottega (4).png'
import Trend1 from '../assets/Trend (1).png'
import Trend2 from '../assets/Trend (2).png'
import Trend3 from '../assets/Trend (3).png'
import Trend4 from '../assets/Trend (4).png'
import Trend5 from '../assets/Trend (5).png'
import Trend6 from '../assets/Trend (6).png'
import Trend7 from '../assets/Trend (7).png'
import Trend8 from '../assets/Trend (8).png'
import Trend9 from '../assets/Trend (9).png'
import Trend10 from '../assets/Trend (10).png'
import Trend11 from '../assets/Trend (11).png'
import Trend12 from '../assets/Trend (12).png'
import rectAngle from '../assets/Rectangle.png'
import { Button } from "@/components/ui/button";
import feedback1 from '../assets/Feedback (1).png'
import feedback2 from '../assets/Feedback (2).png'
import feedback3 from '../assets/Feedback (3).png'
import feedback4 from '../assets/Feedback (4).png'
import feedback5 from '../assets/Feedback (5).png'
import feedback6 from '../assets/Feedback (6).png'
import feedback7 from '../assets/Feedback (7).png'
import feedback8 from '../assets/Feedback (8).png'
import { Footer } from "../Common/Footer";


export const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? cardComponent.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === cardComponent.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [])

    const categoryItems = [
        { image: All, title: "All" },
        { image: Restaurants, title: "Restaurants" },
        { image: Hotels, title: "Hotels" },
        { image: Homeservices, title: "Home services" },
        { image: Shopping, title: "Shopping" },
        { image: Carlocation, title: "Car location" },
        { image: Beauty, title: "Beauty & Spa" },
        { image: Park, title: "Park" },
        { image: Museum, title: "Museum" },
        { image: Wash, title: "Car wash" },
        { image: Bars, title: "Bars" },
        { image: Gyms, title: "Gyms" },
    ];

    const cardComponent = [
        [
            <ResturentCard Ratings={4} reviews={'(243 reviews)'} />,
            <ResturentCard Ratings={2} reviews={'(103 reviews)'} ImageUrl={slideImage2} />,
            <ResturentCard Ratings={5} reviews={'(443 reviews)'} ImageUrl={slideImage3} />,
            <ResturentCard Ratings={4.3} reviews={'(233 reviews)'} ImageUrl={slideImage4} />,
        ],
        [
            <ResturentCard Ratings={2} ImageUrl={slideImage4} />,
            <ResturentCard Ratings={3.1} ImageUrl={slideImage2} />,
            <ResturentCard Ratings={5} />,
            <ResturentCard Ratings={4} ImageUrl={slideImage3} />,
        ],
        [
            <ResturentCard Ratings={3.1} ImageUrl={slideImage2} />,
            <ResturentCard Ratings={4} ImageUrl={slideImage3} />,
            <ResturentCard Ratings={2} ImageUrl={slideImage4} />,
            <ResturentCard Ratings={5} />,
        ],
    ];

    return (
        <section className="category-section container mx-auto p-4 font-robotoRegular animate-fadeIn">
            {/* Category Section */}
            <section className="grid pt-[41px] grid-cols-3  sm:grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3">
                {categoryItems.map((item, index) => (
                    <div key={index} className="cursor-pointer flex justify-center  transition-transform hover:scale-105">
                        <button className="flex flex-col  hover:border-b-2 text-xs pb-3 hover:border-b-[#1677BD] hover:text-[#1677BD] focus:text-[#1677BD] focus:border-b-2 focus:border-b-[#1677BD] justify-center items-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="md:h-[30px] md:w-[30px]  h-[18px] w-[18px] object-contain mb-2 transition duration-300 hover:brightness-110"
                            />
                            {item.title}
                        </button>
                    </div>
                ))}
            </section>

            {/* Slider Section */}
            <section className="bg-[#1677BD] flex justify-evenly md:justify-between rounded-xl mt-8">
                <button onClick={handlePrev} className="md:block hidden" >
                    <img src={leftSlide} alt="Previous Slide" />
                </button>
                <div className="pt-5 pb-[55px] flex flex-col gap-4 flex-grow">
                    <h1 className="text-white ml-3 text-[32px]">
                        Find the best restaurant ratings below
                    </h1>

                    <div className="flex flex-wrap gap-4 justify-center sm:justify-around">
                        {cardComponent[currentIndex]}
                    </div>



                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {cardComponent.map((_, index) => (
                            <div
                                key={index}
                                className={`h-3 w-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-white" : "bg-gray-400"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            ></div>
                        ))}
                    </div>
                </div>
                <button onClick={handleNext} className="md:block hidden" >
                    <img src={rightSlide} alt="Next Slide" />
                </button>
            </section>

            {/* ---- trend section  */}
            <section className="mt-[102px] px-4  ">
                <h1 className="text-[#1E1E1E] text-[25px] sm:text-[32px] font-Lexend font-bold mb-6 text-center md:text-left">
                    The Latest Trends
                </h1>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                    <ResturentCard Ratings={4.5} reviews={"(250 reviews)"} ImageUrl={Trend1} className="w-full " />
                    <ResturentCard Ratings={4.7} reviews={"(300 reviews)"} ImageUrl={Trend2} className="w-full" />
                    <ResturentCard Ratings={4.2} reviews={"(180 reviews)"} ImageUrl={Trend3} className="w-full" />
                    <ResturentCard Ratings={4.6} reviews={"(220 reviews)"} ImageUrl={Trend4} className="w-full" />
                    <ResturentCard Ratings={4.3} reviews={"(150 reviews)"} ImageUrl={Trend5} className="w-full" />
                    <ResturentCard Ratings={4.8} reviews={"(400 reviews)"} ImageUrl={Trend6} className="w-full" />
                    <ResturentCard Ratings={4.1} reviews={"(120 reviews)"} ImageUrl={Trend7} className="w-full" />
                    <ResturentCard Ratings={4.4} reviews={"(200 reviews)"} ImageUrl={Trend8} className="w-full" />
                    <ResturentCard Ratings={4.9} reviews={"(450 reviews)"} ImageUrl={Trend9} className="w-full" />
                    <ResturentCard Ratings={4.0} reviews={"(100 reviews)"} ImageUrl={Trend10} className="w-full" />
                    <ResturentCard Ratings={4.6} reviews={"(230 reviews)"} ImageUrl={Trend11} className="w-full" />
                    <ResturentCard Ratings={4.3} reviews={"(190 reviews)"} ImageUrl={Trend12} className="w-full" />
                </div>
                <div className="text-center mt-[52px] font-Lexend  " >
                    <h2>Discover more cool restaurants</h2>
                    <Button
                        className="rounded-full bg-[#1677BD] mt-3 text-xs md:text-[15.5px] px-4 md:px-5"
                    >
                        Show more
                    </Button>
                </div>
            </section>


            <section className="bg-[#F2F2F2] mt-[84px] flex flex-col-reverse md:flex-row items-center justify-evenly px-4 py-8 md:py-16">
                {/* Content Section */}
                <div className="text-center md:text-left space-y-4">
                    <h1 className="text-[#1E1E1E] font-Lexend text-xl md:text-[26px] font-bold w-full max-w-[502px] mx-auto md:mx-0">
                        MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
                    </h1>
                    <p className="text-xs font-normal w-full max-w-[453px] mx-auto md:mx-0">
                        The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
                    </p>
                    <Button className="rounded-full bg-[#1E1E1E] text-white mt-3 text-xs md:text-[15.5px] px-4 md:px-6 py-2">
                        Explore MyFeedback business
                    </Button>
                </div>

                {/* Image Section */}
                <img
                    src={rectAngle}
                    alt="Business Resources"
                    className="w-[200px] md:w-[350px] lg:w-[450px] h-auto object-cover mb-4 md:mb-0"
                />
            </section>

            <section className="mt-[83px] overflow-hidden">
                <h1 className="font-Lexend text-xl md:text-2xl font-bold mb-6 ml-8 ">
                    Recent Activities
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-8">
                    <FeedbackCard
                        userName="Leslie Sakho"
                        location="Canada, Toronto"
                        description={`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`}
                        images={[feedback1, feedback2, feedback3]}
                    />

                    <FeedbackCard
                        userName="Chris Macari"
                        location="Singapour"
                        date="14/09/2023"
                        description={`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`}
                        images={[feedback4, feedback5, feedback6]}
                    />

                    <FeedbackCard
                        userName="Jojo Alba"
                        location="Kuala Lumpur"
                        date="28/09/2023"
                        description={`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`}
                        images={[feedback7, feedback2, feedback8]}
                    />

                    <FeedbackCard
                        userName="Another User"
                        location="Berlin, Germany"
                        date="01/10/2023"
                        description={`The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`}
                        images={[feedback1, feedback4, feedback6]}
                    />
                </div>
            </section>

           <Footer/>
        </section>
    );
};
