// Use React/Preact (https://preactjs.com) and Tailwind CSS 4
// (https://tailwindcss.com).
// Global CSS is added to all pages with a @theme directive.
// Tailwind theme variables must be added in Global CSS.
// @see https://tailwindcss.com/docs/theme.
// Do not include @import "tailwindcss"!

// Available third party packages:
// import { clsx } from 'clsx'
// import { cva } from 'class-variance-authority'
// import { twMerge } from 'tailwind-merge'

// Import your other code components to use within this component:
// import Heading from '@/components/my_heading'

// Combine classes with the cn() utility function.
// @see https://git.drupalcode.org/project/canvas/-/blob/0.x/ui/lib/astro-hydration/src/lib/utils.ts
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const spacerVariants = cva("", {
  variants: {
    height: {
      Small: "h-8",
      Medium: "h-12",
      Large: "h-16",
      'Extra Large': "h-24",
    }
  }
})

const Spacer = ({
  height = "Small",
}) => {
  return (
    <div className={spacerVariants({ height })}>&nbsp;</div>
  );
};

export default Spacer