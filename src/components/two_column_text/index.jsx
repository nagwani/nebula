import { cva } from "class-variance-authority";
import Button from "@/components/button";
import Text from "@/components/text";
import Heading from "@/components/heading";
import ResponsiveImage from "next-image-standalone";

const passthroughLoader = ({ src }) => src;

const backgroundVariants = cva('align-center px-8 py-16 h-full w-full', {
  variants: {
    darkenImage: {
      false: null,
      true: 'backdrop-brightness-75',
    },
  },
})

const heroVariants = cva('gap-8 mx-auto flex w-full max-w-[1360px] flex-col', {
  variants: {
    layout: {
      'Left Aligned': 'md:flex-row items-start justify-between',
      Centered: 'flex-col items-center justify-center text-center',
    },
  },
  defaultVariants: {
    layout: 'leftAligned',
  },
})

const TwoColumnText = ({
  layout,
  preHeading,
  heading,
  headingElement,
  headingSize = 'Large',
  text,
  buttons,
  textColor = 'Dark',
  image,
  rightColumn,
  textShadow,
}) => {
  const getButtonVariant = (style) => {
    if (style === 'Outline') {
      return textColor === 'Dark' ? 'Outline Dark' : 'Outline Light'
    }
    return 'solid'
  }
  return (
    <div className="py-24 flex w-full justify-start bg-cover bg-center bg-no-repeat">
      <div className="flex w-full items-center justify-center mx-6">
        <div className={heroVariants({ layout })}>
          <div
            className={`max-w-xl gap-4 xl:max-w-lg flex flex-col items-start justify-start ${layout === 'centered' ? 'items-center' : 'items-start'}`}
          >
            <div className="mb-4">
              <Heading
                heading={heading}
                headingElement={headingElement}
                headingSize={headingSize}
                preHeading={preHeading}
                textColor={textColor}
                textShadow={textShadow}
              />
            </div>
            {text && (
              <Text
                className="mb-4"
                text={text}
                textColor={textColor}
                textSize="Large"
                textShadow={textShadow}
              />
            )}
            <div
              className={`gap-4 flex w-full min-w-3xs ${layout === 'centered' ? 'justify-center' : 'justify-start'}`}
            >
              {buttons}
            </div>
          </div>
          <div className="max-w-3xl flex">
            <Image image={image} className="max-w-full h-auto" />
            {rightColumn}
          </div>
        </div>
      </div>
    </div>
  )
}

const Image = ({ image, className }) => {
  if (!image) {
    return null;
  }
  const { src, alt, width, height } = image;
  return (
    <ResponsiveImage
      {...{ src, alt, width, height }}
      loader={passthroughLoader}
      className={className}
    />
  );
};

export default TwoColumnText