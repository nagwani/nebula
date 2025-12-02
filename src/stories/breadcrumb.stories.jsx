import Breadcrumb from "@/components/breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
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
