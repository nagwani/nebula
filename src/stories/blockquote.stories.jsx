import Blockquote from "@/components/blockquote";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("blockquote");

export default {
  title: "Components/Blockquote",
  component: Blockquote,
  argTypes: {
    textColor: {
      control: "select",
      options: ["Dark", "Light"],
    },
  },
};

const Decorator = ({ children, dark = false }) => (
  <div className={`max-w-2xl p-8 ${dark ? "bg-slate-800" : ""}`}>
    {children}
  </div>
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

export const WithAttribution = {
  args: {
    text: "The best way to predict the future is to create it.",
    textColor: "Dark",
    name: "Peter Drucker",
    title: "Management Consultant",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const LongQuote = {
  args: {
    text: "Innovation distinguishes between a leader and a follower. Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    textColor: "Dark",
    name: "Steve Jobs",
    title: "Co-founder, Apple Inc.",
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
    text: "The only way to do great work is to love what you do.",
    textColor: "Light",
    name: "Steve Jobs",
    title: "Co-founder, Apple Inc.",
  },
  decorators: [
    (Story) => (
      <Decorator dark>
        <Story />
      </Decorator>
    ),
  ],
};

export const WithoutAttribution = {
  args: {
    text: "Simplicity is the ultimate sophistication.",
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
