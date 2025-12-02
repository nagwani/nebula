import FormattedText from "@/lib/FormattedText";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const textVariants = cva("my-8", {
  variants: {
    textColor: {
      Dark: "!text-black",
      Light: "!text-white",
    },
    textSize: {
      "Extra Small": "text-xs",
      Small: "text-sm",
      Normal: "text-base/6",
      Large: "text-lg/8",
      "Extra Large": "text-xl/8",
    },
    textShadow: {
      Light: "text-shadow-sm",
      Medium: "text-shadow-md",
      Heavy: "text-shadow-lg",
    },
  },
});

const Text = ({ text, textSize, textColor, textShadow, className }) => {
  return (
    <FormattedText
      className={cn(
        textVariants({ textColor, textSize, textShadow }),
        className,
      )}
    >
      {text}
    </FormattedText>
  );
};

export default Text;
