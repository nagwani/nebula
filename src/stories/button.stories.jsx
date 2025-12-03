import Button from "@/components/button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "Solid",
        "Outline Dark",
        "Outline Light",
        "Ghost Neutral",
        "Ghost Light",
        "Link",
        "Link Underline",
        "Link Dark",
        "Link Light",
        "Nav Link Dark",
      ],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    variant: "Solid",
    text: "Button",
  },
};

export const Solid = {
  args: {
    variant: "Solid",
    text: "Button",
  },
};

export const OutlineDark = {
  args: {
    variant: "Outline Dark",
    text: "Button",
  },
};

export const OutlineLight = {
  args: {
    variant: "Outline Light",
    text: "Button",
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-800 p-8">
        <Story />
      </div>
    ),
  ],
};

export const GhostNeutral = {
  args: {
    variant: "Ghost Neutral",
    text: "Button",
  },
};

export const GhostLight = {
  args: {
    variant: "Ghost Light",
    text: "Button",
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-800 p-8">
        <Story />
      </div>
    ),
  ],
};

export const Link = {
  args: {
    variant: "Link",
    text: "Button",
  },
};

export const LinkUnderline = {
  args: {
    variant: "Link Underline",
    text: "Button",
  },
};

export const LinkDark = {
  args: {
    variant: "Link Dark",
    text: "Button",
  },
};

export const LinkLight = {
  args: {
    variant: "Link Light",
    text: "Button",
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-800 p-8">
        <Story />
      </div>
    ),
  ],
};
