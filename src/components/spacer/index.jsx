import { cva } from "class-variance-authority";

const spacerVariants = cva("", {
  variants: {
    height: {
      Small: "h-8",
      Medium: "h-12",
      Large: "h-16",
      "Extra Large": "h-24",
    },
  },
});

const Spacer = ({ height = "Small" }) => {
  return <div className={spacerVariants({ height })}>&nbsp;</div>;
};

export default Spacer;
