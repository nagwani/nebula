import Button from "@/components/button";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("button");

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
  args: exampleArgs[0],
};

export const Solid = {
  args: {
    ...exampleArgs[0],
    variant: "Solid",
  },
};

export const OutlineDark = {
  args: {
    ...exampleArgs[0],
    variant: "Outline Dark",
  },
};

export const OutlineLight = {
  args: {
    ...exampleArgs[0],
    variant: "Outline Light",
  },
  parameters: {
    backgrounds: { default: "dark" },
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
    ...exampleArgs[0],
    variant: "Ghost Neutral",
  },
};

export const GhostLight = {
  args: {
    ...exampleArgs[0],
    variant: "Ghost Light",
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
    ...exampleArgs[0],
    variant: "Link",
  },
};

export const LinkUnderline = {
  args: {
    ...exampleArgs[0],
    variant: "Link Underline",
  },
};

export const LinkDark = {
  args: {
    ...exampleArgs[0],
    variant: "Link Dark",
  },
};

export const LinkLight = {
  args: {
    ...exampleArgs[0],
    variant: "Link Light",
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-800 p-8">
        <Story />
      </div>
    ),
  ],
};
