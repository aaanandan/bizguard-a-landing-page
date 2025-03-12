import React, { useState } from 'react';
// import Image from 'next/image';

interface VideoPlayerProps {
  darkMode: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ darkMode }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoId = 'KDviwGO_mrY';
  
  return (
    <div className={`
      relative 
      w-[60%] 
      aspect-video 
      rounded-xl
      overflow-hidden
      border-2
      ${darkMode ? "border-gray-700" : "border-gray-200"}
    `}>
      {!isVideoPlaying ? (
        <div 
          className="relative w-full h-full cursor-pointer"
          onClick={() => setIsVideoPlaying(true)}
        >
          {/* YouTube Default Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          {/* Simple Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`
              w-16 h-16 
              rounded-full 
              flex items-center justify-center
              bg-black/50 
              hover:bg-black/70
              transition-all
            `}>
              <i className="fas fa-play text-white text-2xl"></i>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="BizGuard AI Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer; 

// const styles = `
//   .text-shadow-lg {
//     text-shadow: 0 2px 4px rgba(0,0,0,0.3);
//   }
// `; 