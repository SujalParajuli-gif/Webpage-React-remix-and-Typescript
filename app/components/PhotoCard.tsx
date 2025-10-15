import React from "react";

// props for photo card 
type Props = {
  src: string; // image file path
};

const PhotoCard: React.FC<Props> = ({ src }) => {
  // image card UI
  return (
    <div className="relative bg-gray-100 overflow-hidden shadow-md">
      <img
        src={src}
        className="w-full h-[520px] object-cover"
        loading="lazy" // load when near
        alt=""         // no title for images
      />
    </div>
  );
};

export default PhotoCard;
