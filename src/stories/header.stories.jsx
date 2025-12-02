import Header from "@/components/header";
import Logo from "@/components/logo";
import MainNavigation from "@/components/main_navigation";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    displaySearchForm: {
      control: "boolean",
    },
    backgroundColor: {
      control: "color",
    },
  },
};

const mockNavLinks = [
  { id: "1", title: "Home", url: "/" },
  { id: "2", title: "Products", url: "/products" },
  { id: "3", title: "Services", url: "/services" },
  { id: "4", title: "About", url: "/about" },
  { id: "5", title: "Contact", url: "/contact" },
];

export const Default = {
  args: {
    displaySearchForm: true,
    backgroundColor: "#ffffff",
    logo: <Logo />,
    menu: <MainNavigation links={mockNavLinks} />,
  },
};

export const WithoutSearch = {
  args: {
    displaySearchForm: false,
    backgroundColor: "#ffffff",
    logo: <Logo />,
    menu: <MainNavigation links={mockNavLinks} />,
  },
};

export const CustomBackground = {
  args: {
    displaySearchForm: true,
    backgroundColor: "#F8FAFC",
    logo: <Logo />,
    menu: <MainNavigation links={mockNavLinks} />,
  },
};

export const MinimalNav = {
  args: {
    displaySearchForm: false,
    backgroundColor: "#ffffff",
    logo: <Logo />,
    menu: (
      <MainNavigation
        links={[
          { id: "1", title: "Home", url: "/" },
          { id: "2", title: "About", url: "/about" },
        ]}
      />
    ),
  },
};
