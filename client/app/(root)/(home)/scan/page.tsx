"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import "./page.css";

const VideoCapture = dynamic(
  () => import("@/components/shared/VideoCapture/VideoCapture"),
  {
    ssr: false,
  }
);
const ImageCapture = dynamic(
  () => import("@/components/shared/ImageCapture/ImageCapture"),
  {
    ssr: false,
  }
);

enum Modes {
  VIDEO_CAPTURE = "video",
  IMAGE_CAPTURE = "image",
}

export default function Home() {
  const [mode, setMode] = useState(Modes.VIDEO_CAPTURE);

  const showVideoCapture = () => setMode(Modes.VIDEO_CAPTURE);
  const showImageCapture = () => setMode(Modes.IMAGE_CAPTURE);

  return (
    <div className="hello-world-page mx-auto">
      <div className="buttons-container flex justify-center items-center mx-auto">
        <button
          style={{
            backgroundColor:
              mode === Modes.VIDEO_CAPTURE ? "rgb(255,174,55)" : "white",
          }}
          onClick={showVideoCapture}
        >
          Decode Video
        </button>
        <button
          style={{
            backgroundColor:
              mode === Modes.IMAGE_CAPTURE ? "rgb(255,174,55)" : "white",
          }}
          onClick={showImageCapture}
        >
          Decode Image
        </button>
      </div>
      <div className="container mx-auto">
        {mode === Modes.VIDEO_CAPTURE ? <VideoCapture /> : <ImageCapture />}
      </div>
    </div>
  );
}
