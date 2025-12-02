import ResponsiveImage from "next-image-standalone";

const passthroughLoader = ({ src }) => src;

const Image = ({ image }) => {
  const { src, alt, width, height } = image;
  return (
    <ResponsiveImage
      {...{ src, alt, width, height }}
      loader={passthroughLoader}
      className="my-8 max-w-full"
    />
  );
};

export default Image;
