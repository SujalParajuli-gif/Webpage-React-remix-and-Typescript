import React from "react";

// props for video card 
type Props = {
  src: string;      // video file path
};

const VideoCard: React.FC<Props> = ({ src }) => {
  // video card UI
  return (
    <div className="relative bg-gray-100 overflow-hidden shadow-md">
      <video
        src={src}
        className="w-full h-full object-cover"
        autoPlay   // play automatically
        loop       // repeat
        muted      // needed for autoplay on mobile
        playsInline
      />
            
      
    </div>
  );
};

export default VideoCard;
