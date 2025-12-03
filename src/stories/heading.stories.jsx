import Heading from "@/components/heading";

const exampleArgs = {
  heading: "Enter a heading...",
  textColor: "Dark",
  headingElement: "h2",
  headingSize: "Medium",
  layout: "Left aligned",
};

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    textColor: {
      control: "select",
      options: ["Dark", "Light"],
    },
    headingElement: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    headingSize: {
      control: "select",
      options: ["Small", "Medium", "Large", "Extra Large"],
    },
    layout: {
      control: "select",
      options: ["Left aligned", "Center aligned", "Right aligned"],
    },
  },
};

export const Default = {
  args: exampleArgs,
};

export const ExtraLarge = {
  args: {
    ...exampleArgs,
    headingSize: "Extra Large",
  },
};

export const Large = {
  args: {
    ...exampleArgs,
    headingSize: "Large",
  },
};

export const Medium = {
  args: {
    ...exampleArgs,
    headingSize: "Medium",
  },
};

export const Small = {
  args: {
    ...exampleArgs,
    headingSize: "Small",
  },
};

export const CenterAligned = {
  args: {
    ...exampleArgs,
    layout: "Center aligned",
  },
};

export const RightAligned = {
  args: {
    ...exampleArgs,
    layout: "Right aligned",
  },
};

export const WithPreHeading = {
  args: {
    ...exampleArgs,
    preHeading: "Pre-heading text",
    heading: "Main heading text",
  },
};

export const LightOnDark = {
  args: {
    ...exampleArgs,
    textColor: "Light",
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-800 p-8">
        <Story />
      </div>
    ),
  ],
};
