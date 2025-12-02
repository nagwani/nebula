import Spacer from "@/components/spacer";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("spacer");

export default {
  title: "Components/Spacer",
  component: Spacer,
  argTypes: {
    height: {
      control: "select",
      options: ["Small", "Medium", "Large", "Extra Large"],
    },
  },
};

const Decorator = ({ children }) => (
  <div className="flex flex-col">
    <div className="bg-blue-100 p-4 text-center text-blue-800">Above</div>
    {children}
    <div className="bg-blue-100 p-4 text-center text-blue-800">Below</div>
  </div>
);

export const Default = {
  args: exampleArgs[0],
  decorators: [
    (Story) => (
      <Decorator>
        <div className="bg-gray-200">
          <Story />
        </div>
      </Decorator>
    ),
  ],
};

export const Small = {
  args: {
    height: "Small",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <div className="bg-gray-200">
          <Story />
        </div>
      </Decorator>
    ),
  ],
};

export const Medium = {
  args: {
    height: "Medium",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <div className="bg-gray-200">
          <Story />
        </div>
      </Decorator>
    ),
  ],
};

export const Large = {
  args: {
    height: "Large",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <div className="bg-gray-200">
          <Story />
        </div>
      </Decorator>
    ),
  ],
};

export const ExtraLarge = {
  args: {
    height: "Extra Large",
  },
  decorators: [
    (Story) => (
      <Decorator>
        <div className="bg-gray-200">
          <Story />
        </div>
      </Decorator>
    ),
  ],
};
