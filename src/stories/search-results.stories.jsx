import SearchResults from "@/components/search_results";

export default {
  title: "Components/Search Results",
  component: SearchResults,
};

const Decorator = ({ children }) => (
  <div className="max-w-2xl bg-white p-8">{children}</div>
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
