import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import woodlandImage from '../assets/images/woodland.jpg';
import grassImage from '../assets/images/grass.jpg';

const carouselItems = [
  { id: 1, imageUrl: woodlandImage },
  { id: 2, imageUrl: grassImage },
];

const Carousel: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = carouselItems.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => setSlideIndex((prev) => (prev + 1) % totalSlides),
    onSwipedRight: () => setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides),
  });

  return (
    <div {...handlers} className="mt-8 w-full h-60 flex flex-col items-center">
      {/* Carousel container */}
      <div className="relative w-3/4 full overflow-hidden rounded-lg">
        {/* Slide track */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="w-full h-64 flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex mt-4 space-x-2">
        {carouselItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlideIndex(idx)}
            className={`w-3 h-3 rounded-full ${idx === slideIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
