import React, { useState } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  darkMode: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ darkMode }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleVideoError = () => {
    setHasError(true);
    setIsVideoPlaying(false);
  };

  if (hasError) {
    return (
      <div className={`
        relative 
        w-[60%] 
        aspect-video 
        rounded-lg 
        overflow-hidden 
        flex 
        items-center 
        justify-center
        ${darkMode ? "bg-gray-800" : "bg-white"}
        border-2 
        ${darkMode ? "border-gray-700" : "border-gray-200"}
      `}>
        <div className="text-center p-4">
          <svg className="mx-auto w-16 h-16 text-gray-400 mb-4" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="20" y="20" width="60" height="40" rx="2" strokeWidth="4"/>
            <path d="M50 70v10" strokeWidth="4"/>
            <path d="M35 80h30" strokeWidth="4"/>
            <path d="M35 35l30 30M65 35L35 65" strokeWidth="4"/>
          </svg>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Video playback is currently unavailable
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`
      relative 
      w-[60%] 
      aspect-video 
      rounded-lg 
      overflow-hidden 
      flex 
      items-center 
      justify-center
      ${darkMode ? "bg-gray-800" : "bg-white"}
      border-2 
      ${darkMode ? "border-gray-700" : "border-gray-200"}
    `}>
      {!isVideoPlaying ? (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/bizguard-video-thumbnail.jpg"
              alt="BizGuard AI Video Preview"
              fill
              style={{ 
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              className="p-2"
              priority
            />
          </div>
          
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            onClick={() => setIsVideoPlaying(true)}
          >
            <div className={`
              w-16 h-16 mb-10 ml-2
              rounded-full 
              bg-black/50 
              backdrop-blur-sm
              flex items-center justify-center
              transform
              transition-all duration-300
              group-hover:scale-110
              group-hover:bg-grey-500/80
              ${darkMode ? 'shadow-lg shadow-orange-500/20' : 'shadow-lg shadow-black/20'}
            `}>
              <i className={`
                fas fa-play 
                text-white 
                text-2xl
                transform 
                translate-x-0.5
                transition-transform duration-300
                group-hover:scale-125
              `}></i>
            </div>
          </div>
        </div>
      ) : (
        <video 
          className="w-full h-full"
          autoPlay 
          controls
          playsInline
          onError={handleVideoError}
          onEnded={() => setIsVideoPlaying(false)}
        >
          <source src="/BizGuard_AI_-_Explainer_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer; 