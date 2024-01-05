import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  const playerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Adjust this value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    observer.observe(playerRef.current);

    return () => {
      observer.unobserve(playerRef.current);
    };
  }, []);

  return (
    <div ref={playerRef}>
      {isVisible && (
        <ReactPlayer
            url={videoUrl}
            playing={true}
            controls={true}
            width="100%"
            height="auto"
            muted={true}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
