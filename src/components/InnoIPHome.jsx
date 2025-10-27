import React from "react";

export default function InnoIPHome() {
    return (
        <div className=" flex flex-col items-center justify-center px-6 py-6">
            {/* Image Grid */}
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl w-full mb-10">
                {/* Left Main Image with Overlay */}
                <div className="relative">
                    <img
                        src="/images/innovation-lightbulb.jpg" // replace with your actual image path
                        alt="Innovation Lightbulb"
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="text-sm md:text-base max-w-xs mb-4">
                            Stop letting your innovation gather dust on a shelf. The market
                            for your idea is waiting
                        </p>
                        <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-md hover:bg-blue-100 transition">
                            + List New IP
                        </button>
                    </div>
                </div>

                {/* Right Side - Top & Bottom Images */}
                <div className="grid grid-rows-2 gap-4">
                    <img
                        src="/images/lightbulb-icons.jpg"
                        alt="Lightbulb Icons"
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/woman-reading.jpg"
                            alt="Woman Reading"
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                        <img
                            src="/images/patented-tech.jpg"
                            alt="Patented Technology"
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Tagline Section */}
            <p className="text-center text-gray-700 text-lg md:text-xl font-medium max-w-4xl leading-relaxed">
                The Next Great Asset Isn’t Just Created—It’s Enlisted. In The Age Of
                Intelligence, Let AI Be The Strategist That Evaluates Your IP’s True
                Battlefield Potential
            </p>
        </div>
    );
}
