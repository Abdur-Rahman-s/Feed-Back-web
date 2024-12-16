import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 py-8 mt-16 border-t">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-gray-500 dark:text-gray-300">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white font-Lexend">
                        About
                    </h3>
                    <ul className="space-y-2 text-sm font-robotoRegular">
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                About MyFeedback
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                Investor Relations
                            </a>
                        </li>
                    </ul>
                </div>

                {/* MyFeedback Section */}
                <div>
                    <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white font-Lexend">
                        MyFeedback
                    </h3>
                    <ul className="space-y-2 text-sm font-robotoRegular">
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                MyFeedback for Business
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                Collections
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                Talk
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                Events
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                MyFeedback Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                Support
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-blue-500 transition duration-200">
                                Developers
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Languages and Countries */}
                <div>
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white font-Lexend">
                            Languages
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-robotoRegular">
                            <span>English</span>
                            <IoIosArrowDown className="text-gray-600 dark:text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white font-Lexend">
                            Countries
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-robotoRegular">
                            <span>Singapore</span>
                            <IoIosArrowDown className="text-gray-600 dark:text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-sm font-bold text-gray-700 dark:text-gray-400 mt-8">
                <p>
                    Copyright © {new Date().getFullYear()} MyFeedback, designed by Scott.
                </p>
            </div>
        </footer>
    );
};
