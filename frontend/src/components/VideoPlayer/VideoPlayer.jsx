import React, { useRef, useState } from 'react';
import screenfull from 'screenfull';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TbRewindBackward10 } from "react-icons/tb";
import { TbRewindForward10 } from "react-icons/tb";
import { MdFullscreen } from "react-icons/md";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // Format time to mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgress = () => {
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress((current / duration) * 100);
    setCurrentTime(formatTime(current));
  };

  const handleLoadedMetadata = () => {
    setDuration(formatTime(videoRef.current.duration));
  };

  // Jump 10 seconds back
  const rewind10Seconds = () => {
    videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
  };

  // Jump 10 seconds forward
  const forward10Seconds = () => {
    videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10);
  };

  const handleSpeedChange = (speed) => {
    videoRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
  };

  const toggleFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(videoRef.current);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-black rounded-lg group">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full rounded-lg"
          onTimeUpdate={handleProgress}
          onLoadedMetadata={handleLoadedMetadata}
          controlsList="nodownload"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="https://d1pghkbs868271.cloudfront.net/2020-10-05%2022-21-43.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 md:py-3 px-2 md:px-5 flex flex-row justify-between items-center text-white space-y-2 md:space-y-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          <div className="flex items-center space-x-2">
            {/* 10 seconds Back Button */}
            <button onClick={rewind10Seconds} className="md:playerButton">
              <TbRewindBackward10 />
            </button>

            {/* Play/Pause Button */}
            <button onClick={togglePlayPause} className="md:playerButton">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            {/* 10 seconds Forward Button */}
            <button onClick={forward10Seconds} className="md:playerButton">
              <TbRewindForward10 />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-grow mx-4 w-full md:w-auto relative">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              className="w-full h-1 bg-gray-700 rounded-lg cursor-pointer"
              onChange={(e) => {
                const seekTime = (e.target.value / 100) * videoRef.current.duration;
                videoRef.current.currentTime = seekTime;
              }}
            />
          </div>

          <div className="flex items-center space-x-2">
            {/* Time Display */}
            <span className="text-xs md:text-base flex">
              {currentTime} <span className='hidden md:block'>/ {duration}</span>
            </span>

            {/* Playback Speed Control */}
            <select
              className="bg-gray-800 text-white md:px-2 py-1 rounded-md text-xs md:text-base"
              value={playbackSpeed}
              onChange={(e) => handleSpeedChange(e.target.value)}
            >
              <option value="0.5">0.5x</option>
              <option value="1">1x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullScreen}
              className="md:playerButton"
            >
              <MdFullscreen />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
