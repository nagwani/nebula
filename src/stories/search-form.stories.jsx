import SearchForm from "@/components/search_form";

export default {
  title: "Components/Search Form",
  component: SearchForm,
};

const Decorator = ({ children }) => (
  <div className="max-w-md p-8">{children}</div>
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

export const FullWidth = {
  decorators: [
    (Story) => (
      <div className="w-full max-w-xl p-8">
        <Story />
      </div>
    ),
  ],
};
