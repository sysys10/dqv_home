import React from "react";

interface YouTubeVideoProps {
  videoId: string;
}

export default function VideoSection({
  videoId = "Mw_x4HYXHhI",
}: YouTubeVideoProps) {
  return (
    <div className="w-full mt-8">
      <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
