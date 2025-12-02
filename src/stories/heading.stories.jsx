import Heading from "@/components/heading";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("heading");

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    textColor: {
      control: "select",
      options: ["Dark", "Light"],
    },
    headingElement: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    headingSize: {
      control: "select",
      options: ["Small", "Medium", "Large", "Extra Large"],
    },
    layout: {
      control: "select",
      options: ["Left aligned", "Center aligned", "Right aligned"],
    },
  },
};

const Decorator = ({ children, dark = false }) => (
  <div className={`p-8 ${dark ? "bg-slate-800" : ""}`}>{children}</div>
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

export const ExtraLarge = {
  args: {
    ...exampleArgs[0],
    headingSize: "Extra Large",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Large = {
  args: {
    ...exampleArgs[0],
    headingSize: "Large",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Medium = {
  args: {
    ...exampleArgs[0],
    headingSize: "Medium",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Small = {
  args: {
    ...exampleArgs[0],
    headingSize: "Small",
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

export const RightAligned = {
  args: {
    ...exampleArgs[0],
    layout: "Right aligned",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const WithPreHeading = {
  args: {
    ...exampleArgs[0],
    preHeading: "Pre-heading text",
    heading: "Main heading text",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const LightOnDark = {
  args: {
    ...exampleArgs[0],
    textColor: "Light",
  },
  decorators: [
    (Story) => (
      <Decorator dark>
        <Story />
      </Decorator>
    ),
  ],
};
