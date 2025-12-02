import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const containerVariants = cva("dark flex w-full flex-col", {
  variants: {
    layout: {
      "Left aligned": "items-start text-left",
      "Center aligned": "items-center text-center",
      "Right aligned": "items-end text-right",
    },
  },
});

const preHeadingVariants = cva("mb-4 text-lg font-bold", {
  variants: {
    textColor: {
      Dark: "text-primary-dark",
      Light: "text-primary-light",
    },
    headingSize: {
      ExtraLarge: "text-lg",
      Large: "text-base",
      Medium: "text-sm",
      Small: "text-xs",
    },
    textShadow: {
      Light: "text-shadow-sm",
      Medium: "text-shadow-md",
      Heavy: "text-shadow-lg",
    },
  },
});

const headingVariants = cva("leading-[normal] font-bold text-balance", {
  variants: {
    textColor: {
      Dark: "text-black",
      Light: "text-white",
    },
    headingSize: {
      "Extra Large": "text-6xl",
      Large: "text-4xl",
      Medium: "text-2xl",
      Small: "text-lg",
    },
    textShadow: {
      Light: "text-shadow-sm",
      Medium: "text-shadow-md",
      Heavy: "text-shadow-lg",
    },
  },
});

const Heading = ({
  className,
  heading,
  headingElement = "h2",
  headingSize = "Extra Large",
  layout = "Left aligned",
  preHeading,
  textColor = "Dark",
  textShadow,
}) => {
  const Heading = headingElement;
  return preHeading || heading ? (
    <div className={cn(containerVariants({ layout }), className)}>
      {preHeading && (
        <div
          className={preHeadingVariants({ textColor, headingSize, textShadow })}
        >
          {preHeading}
        </div>
      )}
      {heading && (
        <Heading
          className={headingVariants({ textColor, headingSize, textShadow })}
        >
          {heading}
        </Heading>
      )}
    </div>
  ) : null;
};

export default Heading;
