import React, { useEffect } from 'react';

const YouTubePlayer = () => {
  useEffect(() => {
    // Create a script element to load the YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function will be called by the YouTube API once it's loaded
    window.onYouTubeIframeAPIReady = () => {
      window.player = new window.YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'II_m28Bm-iM', // Video ID can be updated dynamically as needed
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    // Called when the player is ready
    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    // Called when the player's state changes (e.g., playing, paused)
    const onPlayerStateChange = (event) => {
      // Add your state change logic here if needed
    };

    // Optional cleanup: Destroy the player when the component unmounts
    return () => {
      if (window.player && window.player.destroy) {
        window.player.destroy();
      }
    };
  }, []);

  return <div className='w-[960px] h-[480px] object-cover rounded-2xl commonShadow' id="player"></div>;
};

export default YouTubePlayer;
