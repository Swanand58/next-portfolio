import Image from "next/image";
import React, { useState } from "react";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-80 max-h-[80vh] flex items-center justify-center">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt="Carousel"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
            className="max-h-full"
          />
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 p-2 z-10"
        >
          {"<"}
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 p-2 z-10"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
