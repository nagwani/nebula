import { cn } from "@/lib/utils";
import Heading from '@/components/heading';
import GridContainer from '@/components/grid_container'


const ThreeColumnCardContainer = ({
  children,
  className,
  headingPosition,
  heading,
  headingLevel,
  headingSize = 'Large',
  preHeading,
  textColor,
  layout,
  content
}) => {
  return (
    <div className={cn('gap-16 flex flex-col items-center mx-6', className)}>
      {heading ? (
        <Heading
          heading={heading}
          headingLevel={headingLevel}
          headingSize={headingSize}
          layout={headingPosition}
          preHeading={preHeading}
          textColor={textColor}
        />
      ) : null}
      <GridContainer content={content} layout={layout} />
    </div>
  );
};

export default ThreeColumnCardContainer