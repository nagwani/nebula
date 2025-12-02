import LogoCard from "@/components/logo_card";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("logo_card");

export default {
  title: "Components/Logo Card",
  component: LogoCard,
  argTypes: {
    backgroundColor: {
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

export const CustomBackground = {
  args: {
    ...exampleArgs[0],
    backgroundColor: "#E0F2FE",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const DarkBackground = {
  args: {
    ...exampleArgs[0],
    backgroundColor: "#1E293B",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
