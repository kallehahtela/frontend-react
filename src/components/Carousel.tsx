import React, { useState } from "react";

const carouselItems = [
    {
        id: 1,
        imageUrl: './src/assets/images/woodland.jpg',
        link: 'https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        name: 'Woodland 2',
        imageUrl: './src/assets/images/woodland.jpg',
        link: 'https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        name: 'Woodland 3',
        imageUrl: './src/assets/images/woodland.jpg',
        link: 'https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 4,
        name: 'Woodland 4',
        imageUrl: './src/assets/images/woodland.jpg',
        link: 'https://images.unsplash.com/photo-1737405555489-78b3755eaa81?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];

function Carousel() {
    const [slideIndex, setSlideIndex] = useState(0);
    const totalSlides = carouselItems.length;

    const updateSlide = (direction: number) => {
        setSlideIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            if (newIndex < 0) return totalSlides - 1;
            if (newIndex >= totalSlides) return 0;
            return newIndex;
        });
    };

    return (
        <div className="absolute top-30 w-full bg-gray-900 text-white overflow-hidden">

            {/* Carousel Container */}
            <div className="relative flex w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${slideIndex * 100}%)`,
                    }}
                >
                    {carouselItems.map((item) => (
                        <div
                        key={item.id}
                        className="min-w-full flex-shrink-0 h-50"
                        style={{
                            backgroundImage: `url(${item.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            padding: "50px", // Adjust this value for desired margin
                            boxSizing: "border-box",
                        }}
                        >
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <button
                onClick={() => updateSlide(-1)}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                ◀
            </button>
            <button
                onClick={() => updateSlide(1)}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
                ▶
            </button>

            {/* Dots */}
            <div className="flex justify-center absolute left-40 bottom-7 h-0 space-x-2">
                {carouselItems.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSlideIndex(idx)}
                        className={`w-3 h-3 rounded-full ${
                            idx === slideIndex ? "bg-blue-500" : "bg-gray-500"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
