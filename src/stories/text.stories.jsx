import Text from "@/components/text";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("text");

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    textSize: {
      control: "select",
      options: ["Extra Small", "Small", "Normal", "Large", "Extra Large"],
    },
    textColor: {
      control: "select",
      options: ["Dark", "Light"],
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

export const ExtraSmall = {
  args: {
    ...exampleArgs[0],
    textSize: "Extra Small",
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
    textSize: "Small",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const Normal = {
  args: {
    ...exampleArgs[0],
    textSize: "Normal",
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
    textSize: "Large",
  },
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
    textSize: "Extra Large",
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

export const WithHTML = {
  args: {
    text: "<p>This is a <strong>bold</strong> and <em>italic</em> text with a <a href='#'>link</a>.</p>",
    textSize: "Normal",
    textColor: "Dark",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
