import MainNavigation from "@/components/main_navigation";

export default {
  title: "Components/Main Navigation",
  component: MainNavigation,
  parameters: {
    layout: "fullscreen",
  },
};

const Decorator = ({ children }) => (
  <div className="relative bg-white p-4">{children}</div>
);

export const Default = {
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
