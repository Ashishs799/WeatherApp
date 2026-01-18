import rainVideo from "../../assets/rainy.mp4";
import cloudsVideo from "../../assets/cloudy.mp4";
import clearVideo from "../../assets/sunny.mp4";
const VideoBackground = ({ weather }) => {
  let videoSrc;

  switch (weather) {
    case "Rain":
      videoSrc = rainVideo;
      break;
    case "Clouds":
      videoSrc = cloudsVideo;
      break;
    case "Clear":
      videoSrc = clearVideo;
      break;
    default:
      videoSrc = clearVideo;
  }

  return (
    <video
      autoPlay
      loop
      // muted
      className="z-0 absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
