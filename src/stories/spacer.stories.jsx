import Spacer from "@/components/spacer";

export default {
  title: "Components/Spacer",
  component: Spacer,
  argTypes: {
    height: {
      control: "select",
      options: ["Small", "Medium", "Large", "Extra Large"],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex flex-col">
        <div className="bg-blue-100 p-4 text-center text-blue-800">Above</div>
        <div className="bg-gray-200">
          <Story />
        </div>
        <div className="bg-blue-100 p-4 text-center text-blue-800">Below</div>
      </div>
    ),
  ],
};

export const Default = {
  args: {
    height: "Medium",
  },
};

export const Small = {
  args: {
    height: "Small",
  },
};

export const Large = {
  args: {
    height: "Large",
  },
};

export const ExtraLarge = {
  args: {
    height: "Extra Large",
  },
};
