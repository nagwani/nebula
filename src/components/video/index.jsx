const Video = ({ video }) => {
  return (
    <video className="w-full" controls>
      <source src={video.src} />
      <track kind="captions" srcLang="en" label="English" default />
    </video>
  );
};

export default Video;
