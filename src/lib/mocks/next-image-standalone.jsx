/**
 * Mock implementation of next-image-standalone for local development.
 * Renders a standard `<img>` element with the same props.
 *
 * @todo Remove this file after https://drupal.org/i/3560419.
 */

const NextImage = ({
  src,
  alt,
  width,
  height,
  loader,
  className,
  style,
  ...rest
}) => {
  // If a loader is provided, use it to transform the src
  // Otherwise, use src directly (passthrough behavior)
  const imageSrc = loader ? loader({ src, width, quality: 75 }) : src;

  return (
    <img
      src={imageSrc}
      alt={alt || ""}
      width={width}
      height={height}
      className={className}
      style={style}
      {...rest}
    />
  );
};

export default NextImage;
