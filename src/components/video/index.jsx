const Video = ({
  video
}) => {
  return (
    <video class="w-full" controls>
      <source src={video.src}/> 
    </video>
  )
};

export default Video;