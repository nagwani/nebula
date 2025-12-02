import Button from "@/components/button";
import TwoColumnText from "@/components/two_column_text";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("two_column_text");

export default {
  title: "Components/Two Column Text",
  component: TwoColumnText,
  argTypes: {
    layout: {
      control: "select",
      options: ["Left Aligned", "Centered"],
    },
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
      options: ["Extra Large", "Large", "Medium", "Small"],
    },
  },
};

const SampleButtons = (
  <>
    <Button text="Primary Action" variant="Solid" link="#" />
    <Button text="Secondary" variant="Outline Dark" link="#" />
  </>
);

export const Default = {
  args: {
    ...exampleArgs[0],
    buttons: SampleButtons,
  },
};

export const LeftAligned = {
  args: {
    ...exampleArgs[0],
    layout: "Left Aligned",
    buttons: SampleButtons,
  },
};

export const Centered = {
  args: {
    ...exampleArgs[0],
    layout: "Centered",
    buttons: SampleButtons,
  },
};

export const WithPreHeading = {
  args: {
    ...exampleArgs[0],
    preHeading: "Welcome",
    heading: "Build something amazing",
    text: "Create beautiful, responsive websites with our component library. Designed for developers who value clean code and modern design.",
    buttons: SampleButtons,
  },
};

export const LightOnDark = {
  args: {
    ...exampleArgs[0],
    textColor: "Light",
    buttons: (
      <>
        <Button text="Get Started" variant="Solid" link="#" />
        <Button text="Learn More" variant="Outline Light" link="#" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-800">
        <Story />
      </div>
    ),
  ],
};

export const WithoutImage = {
  args: {
    layout: "Left Aligned",
    heading: "Simple and Clean",
    headingElement: "h2",
    headingSize: "Large",
    text: "Sometimes you just need text without an image. This layout works great for that.",
    textColor: "Dark",
    buttons: SampleButtons,
  },
};
