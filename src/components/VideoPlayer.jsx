import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { PLAYBACK_URL } from "../constants";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(
      videoRef.current,
      {
        techOrder: ["AmazonIVS"],
      },
      () => {
        console.log("Player is ready to use!");
        player.src(PLAYBACK_URL);
      }
    );

    // return () => {
    //   if (player) {
    //     player.dispose();
    //   }
    // };
  }, []);

  return (
    <div
      className="video-container"
      style={{ width: "700px", height: "400px" }}
    >
      <video
        ref={videoRef}
        className="video-js vjs-4-3 vjs-big-play-centered"
        controls
        autoPlay
        playsInline
        data-setup="{}"
      />
      <div className="seekbar">
        <div className="progress" />
      </div>
    </div>
  );
};

export default VideoPlayer;
