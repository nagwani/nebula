import Card from "@/components/card";

const exampleArgs = {
  image: {
    src: "https://placehold.co/800x600@2x.png",
    alt: "Example image placeholder",
    width: 800,
    height: 600,
  },
  layout: "Left aligned",
  heading: "Feature or benefit",
  headingElement: "h3",
  text: "Help people become familiar with the organization and its offerings, creating a sense of connection and trust.",
  link: "/",
  linkVariant: "Link",
};

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    layout: {
      control: "select",
      options: ["Left aligned", "Center aligned", "Right aligned"],
    },
    textColor: {
      control: "select",
      options: ["Default", "Dark", "Light"],
    },
    headingElement: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    linkVariant: {
      control: "select",
      options: ["Solid", "Outline Dark", "Link", "Link Underline"],
    },
    backgroundColor: {
      control: "color",
    },
    backgroundColorOnHover: {
      control: "color",
    },
  },
};

export const Default = {
  args: exampleArgs,
};

export const WithLink = {
  args: {
    ...exampleArgs,
    link: "/learn-more",
    linkLabel: "Learn more",
    linkVariant: "Link",
  },
};

export const CenterAligned = {
  args: {
    ...exampleArgs,
    layout: "Center aligned",
  },
};

export const CustomColors = {
  args: {
    ...exampleArgs,
    backgroundColor: "#F0F9FF",
    backgroundColorOnHover: "#E0F2FE",
  },
};

export const WithSolidButton = {
  args: {
    ...exampleArgs,
    link: "/get-started",
    linkLabel: "Get Started",
    linkVariant: "Solid",
  },
};
