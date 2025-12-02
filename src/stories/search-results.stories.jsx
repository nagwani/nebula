import SearchResults from "@/components/search_results";

export default {
  title: "Components/Search Results",
  component: SearchResults,
};

const mockResults = [
  {
    title: "Getting Started with React",
    path: { alias: "/blog/getting-started-react" },
  },
  {
    title: "Building Modern Web Applications",
    path: { alias: "/blog/modern-web-apps" },
  },
  {
    title: "Introduction to Tailwind CSS",
    path: { alias: "/blog/tailwind-intro" },
  },
  {
    title: "Component-Driven Development",
    path: { alias: "/blog/component-driven" },
  },
  {
    title: "Best Practices for Code Organization",
    path: { alias: "/blog/code-organization" },
  },
];

const Decorator = ({ children }) => (
  <div className="max-w-2xl bg-white p-8">{children}</div>
);

export const Default = {
  args: {
    results: mockResults,
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const WithPagination = {
  args: {
    results: mockResults,
    showPagination: true,
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const FewResults = {
  args: {
    results: [
      { title: "Single Result Item", path: { alias: "/page/single" } },
      { title: "Another Result", path: { alias: "/page/another" } },
    ],
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const NoResults = {
  args: {
    results: [],
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const ManyResults = {
  args: {
    results: [
      { title: "Article One", path: { alias: "/articles/one" } },
      { title: "Article Two", path: { alias: "/articles/two" } },
      { title: "Article Three", path: { alias: "/articles/three" } },
      { title: "Article Four", path: { alias: "/articles/four" } },
      { title: "Article Five", path: { alias: "/articles/five" } },
      { title: "Article Six", path: { alias: "/articles/six" } },
      { title: "Article Seven", path: { alias: "/articles/seven" } },
      { title: "Article Eight", path: { alias: "/articles/eight" } },
      { title: "Article Nine", path: { alias: "/articles/nine" } },
      { title: "Article Ten", path: { alias: "/articles/ten" } },
    ],
    showPagination: true,
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
