import { useEffect, useRef } from "react";


import "plyr-react/plyr.css"
import Hls from "hls.js";
import Plyr from "plyr-react";

const HLS = () => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   const loadVideo = async () => {
  //     const video = document.getElementById("plyr");
  //     const hls = new Hls();
  //     hls.loadSource("https://d1x6q4m9kni4a2.cloudfront.net/Outputs/SVID_20200717_102349_1.m3u8");
  //     hls.attachMedia(video);
  //     ref.current.plyr.media = video; // Accessing plyr media without TypeScript

  //     hls.on(Hls.Events.MANIFEST_PARSED, function () {
  //       ref.current.plyr.play();
  //     });
  //   };

  //   loadVideo();
  // }, []); // Add an empty dependency array to ensure it runs once on mount

  return (
    <Plyr
      id="plyr"
      options={{ 
        volume: 0.1, 
        settings: ['quality', 'speed'] 
      }}
      source={
        {
          src: "https://d1x6q4m9kni4a2.cloudfront.net/Outputs/SVID_20200717_102349_1.mp4",
          type: "video/mp4",
        }
      } // Adjust source as needed
      
      // ref={ref}
    />
  );
};
export default HLS;


