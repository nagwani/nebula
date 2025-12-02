import { cn } from "@/lib/utils";
import { cva } from 'class-variance-authority';
import TwoColumnText from '@/components/two_column_text'

const backgroundVariants = cva('align-center px-8 py-16 h-full w-full', {
  variants: {
    darkenImage: {
      false: null,
      true: 'backdrop-brightness-75',
    },
  },
})

const Hero = ({
  layout,
  preHeading,
  heading,
  headingElement,
  headingSize = 'Large',
  text,
  textColor = 'Dark',
  buttons,
  backgroundImage,
  darkenImage,
}) => {
  return (
    <div
      className="flex min-h-[672px] w-full justify-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className={backgroundVariants({ darkenImage })}>
        <TwoColumnText
          heading={heading}
          headingElement={headingElement}
          headingSize={headingSize}
          layout={layout}
          preHeading={preHeading}
          text={text}
          textColor={textColor}
          buttons={buttons}
          textShadow="Medium"
        />
      </div>
    </div>
  )
}

export default Hero