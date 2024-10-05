import React from 'react'
import {TheosPlayer} from "@aka_theos/react-hls-player";


const Test = () => {
 
  return (
    <div style={{ padding: '20px' }}>
      <TheosPlayer
    src="https://d1x6q4m9kni4a2.cloudfront.net/Outputs/SVID_20200717_102349_1.m3u8"
    autoPlay={false}
  />
  </div>
  )
}

export default Test