import react from "react";

const VideoDetail = ({ video }) => {
  if (video == null) {
    return <div>Loading ...</div>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} frameborder="0" title="video-player"></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
};
export default VideoDetail;
