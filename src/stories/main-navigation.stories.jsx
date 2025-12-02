import MainNavigation from "@/components/main_navigation";

export default {
  title: "Components/Main Navigation",
  component: MainNavigation,
  parameters: {
    layout: "fullscreen",
  },
};

const mockLinks = [
  { id: "1", title: "Home", url: "/" },
  { id: "2", title: "Products", url: "/products" },
  { id: "3", title: "Services", url: "/services" },
  { id: "4", title: "About", url: "/about" },
  { id: "5", title: "Contact", url: "/contact" },
];

const Decorator = ({ children }) => (
  <div className="relative bg-white p-4">{children}</div>
);

export const Default = {
  args: {
    links: mockLinks,
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const FewLinks = {
  args: {
    links: [
      { id: "1", title: "Home", url: "/" },
      { id: "2", title: "About", url: "/about" },
      { id: "3", title: "Contact", url: "/contact" },
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

export const ManyLinks = {
  args: {
    links: [
      { id: "1", title: "Home", url: "/" },
      { id: "2", title: "Products", url: "/products" },
      { id: "3", title: "Services", url: "/services" },
      { id: "4", title: "Solutions", url: "/solutions" },
      { id: "5", title: "Resources", url: "/resources" },
      { id: "6", title: "Blog", url: "/blog" },
      { id: "7", title: "About", url: "/about" },
      { id: "8", title: "Contact", url: "/contact" },
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
