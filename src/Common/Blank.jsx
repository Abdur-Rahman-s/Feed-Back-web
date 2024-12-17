import React from 'react';
import { Link } from 'react-router-dom';  

export const Blank = () => {
    return (
        <div className="flex items-center justify-center flex-col font-Lexend h-screen absolute inset-0">
            <h1 className="font-bold text-2xl text-center text-gray-700">Content not Available 😔!</h1>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <Link to="/" className="block text-center">Go to Home</Link>
            </button>
        </div>
    );
};
