import React from "react";

const images = [
  "https://novine-react.envytheme.com/images/instagram1.jpg",
  "https://novine-react.envytheme.com/images/instagram2.jpg",
  "https://novine-react.envytheme.com/images/instagram3.jpg",
  "https://novine-react.envytheme.com/images/instagram4.jpg",
  "https://novine-react.envytheme.com/images/instagram5.jpg",
  "https://novine-react.envytheme.com/images/instagram6.jpg",
  "https://novine-react.envytheme.com/images/instagram7.jpg",
  "https://novine-react.envytheme.com/images/instagram8.jpg",
  "https://novine-react.envytheme.com/images/instagram9.jpg",
];

const FullWidthGallery = () => {
  return (
    <div className="w-full overflow-x-auto sm:overflow-visible">
      <div className="flex sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-1">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`gallery-${index}`}
            className="w-40 sm:w-full h-32 sm:h-40 md:h-48 object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default FullWidthGallery;
