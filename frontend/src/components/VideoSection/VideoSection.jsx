import React, { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Navbar from '../Navbar/Navbar';
import {TheosPlayer} from "@aka_theos/react-hls-player";
import { motion } from 'framer-motion';

const VideoSection = ({ module }) => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Set the new video URL when the module changes
    if (module && module.videourl) {
      setVideoUrl(`https://d1x6q4m9kni4a2.cloudfront.net${module.videourl}`);
    }
  }, [module]); // This runs whenever the `module` prop changes

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container text-white"
      >
        {/* Video */}
        <div className="mb-8 w-[20%]">
          {/* Update the video player with the new URL when the module changes */}
          <TheosPlayer
        
    src={videoUrl}
    autoPlay={false}/>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-4xl font-extrabold mb-4 text-indigo-400"
        >
          {module.title}
        </motion.h1>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-6">
          {module.description}
        </p>

        {/* PDF Download */}
        <div className="mb-7">
          <a
            href={`https://d1x6q4m9kni4a2.cloudfront.net${module.resource}`}
            target="_blank"
            download
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-500 transition duration-300"
          >
            Download PDF
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default VideoSection;
