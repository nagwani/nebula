import Button from "@/components/button";
import Hero from "@/components/hero";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("hero");

export default {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    layout: {
      control: "select",
      options: ["Left aligned", "Centered"],
    },
    textColor: {
      control: "select",
      options: ["Dark", "Light"],
    },
    headingSize: {
      control: "select",
      options: ["Extra Large", "Large", "Medium", "Small"],
    },
    headingElement: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    darkenImage: {
      control: "boolean",
    },
  },
};

const SampleButtons = (
  <>
    <Button text="Get Started" variant="Solid" link="#" />
    <Button text="Learn More" variant="Outline Dark" link="#" />
  </>
);

const LightButtons = (
  <>
    <Button text="Get Started" variant="Solid" link="#" />
    <Button text="Learn More" variant="Outline Light" link="#" />
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
    layout: "Left aligned",
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

export const LightTextOnDarkImage = {
  args: {
    ...exampleArgs[0],
    textColor: "Light",
    darkenImage: true,
    backgroundImage: {
      src: "https://placehold.co/1920x1080/1e293b/1e293b@2x.png",
      alt: "Dark background",
      width: 1920,
      height: 1080,
    },
    buttons: LightButtons,
  },
};

export const ExtraLargeHeading = {
  args: {
    ...exampleArgs[0],
    headingSize: "Extra Large",
    heading: "Make a Bold Statement",
    buttons: SampleButtons,
  },
};

export const WithPreHeading = {
  args: {
    ...exampleArgs[0],
    preHeading: "Welcome",
    heading: "Build Something Amazing",
    text: "Create beautiful, responsive websites with our modern component library.",
    buttons: SampleButtons,
  },
};
