import Logo from "@/components/logo";

export default {
  title: "Components/Logo",
  component: Logo,
};

const Decorator = ({ children }) => (
  <div className="bg-white p-4">{children}</div>
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

export const OnDarkBackground = {
  decorators: [
    (Story) => (
      <div className="bg-slate-800 p-4">
        <Story />
      </div>
    ),
  ],
};
