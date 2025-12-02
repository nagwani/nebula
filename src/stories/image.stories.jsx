import Image from "@/components/image";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("image");

export default {
  title: "Components/Image",
  component: Image,
};

const Decorator = ({ children }) => (
  <div className="max-w-2xl p-8">{children}</div>
);

export const Default = {
  args: exampleArgs[0],
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const CustomImage = {
  args: {
    image: {
      src: "https://placehold.co/1200x800@2x.png",
      alt: "Wide landscape placeholder",
      width: 1200,
      height: 800,
    },
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const SquareImage = {
  args: {
    image: {
      src: "https://placehold.co/600x600@2x.png",
      alt: "Square placeholder",
      width: 600,
      height: 600,
    },
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const PortraitImage = {
  args: {
    image: {
      src: "https://placehold.co/400x600@2x.png",
      alt: "Portrait placeholder",
      width: 400,
      height: 600,
    },
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
