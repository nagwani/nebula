import Card from "@/components/card";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("card");

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    layout: {
      control: "select",
      options: ["Left aligned", "Center aligned", "Right aligned"],
    },
    textColor: {
      control: "select",
      options: ["Default", "Dark", "Light"],
    },
    headingElement: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    linkVariant: {
      control: "select",
      options: ["Solid", "Outline Dark", "Link", "Link Underline"],
    },
    backgroundColor: {
      control: "color",
    },
    backgroundColorOnHover: {
      control: "color",
    },
  },
};

const Decorator = ({ children }) => (
  <div className="flex gap-4 p-8">{children}</div>
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

export const WithLink = {
  args: {
    ...exampleArgs[0],
    link: "/learn-more",
    linkLabel: "Learn more",
    linkVariant: "Link",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const CenterAligned = {
  args: {
    ...exampleArgs[0],
    layout: "Center aligned",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const CustomColors = {
  args: {
    ...exampleArgs[0],
    backgroundColor: "#F0F9FF",
    backgroundColorOnHover: "#E0F2FE",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const WithSolidButton = {
  args: {
    ...exampleArgs[0],
    link: "/get-started",
    linkLabel: "Get Started",
    linkVariant: "Solid",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
