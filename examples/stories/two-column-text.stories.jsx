import Button from "@/components/button";
import TwoColumnText from "@/components/two_column_text";

const exampleArgs = {
  image: {
    src: "https://placehold.co/800x600@2x.png",
    alt: "Example image placeholder",
    width: 800,
    height: 600,
  },
  layout: "text_image",
  columnWidths: "50_50",
  preHeading: "Mission",
  heading: "This space deserves a hero.",
  headingElement: "h2",
  headingSize: "large",
  text: "This is a space to welcome visitors to the site. Grab their attention with copy that clearly states what the site is about.",
  textColor: "dark",
};

export default {
  title: "Components/Two Column Text",
  component: TwoColumnText,
  argTypes: {
    layout: {
      control: "select",
      options: ["text_image", "image_text"],
    },
    columnWidths: {
      control: "select",
      options: ["33_66", "50_50", "66_33"],
    },
    textColor: {
      control: "select",
      options: ["dark", "light"],
    },
    headingElement: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    headingSize: {
      control: "select",
      options: ["extra_large", "large", "medium", "small"],
    },
  },
};

const SampleButtons = (
  <>
    <Button text="Primary Action" variant="solid" link="#" />
    <Button text="Secondary" variant="outline_dark" link="#" />
  </>
);

export const TextImage = {
  args: {
    ...exampleArgs,
    layout: "text_image",
    columnWidths: "50_50",
    buttons: SampleButtons,
  },
};

export const ImageText = {
  args: {
    ...exampleArgs,
    layout: "image_text",
    columnWidths: "50_50",
    buttons: SampleButtons,
  },
};

export const Text33Image66 = {
  args: {
    ...exampleArgs,
    layout: "text_image",
    columnWidths: "33_66",
    buttons: SampleButtons,
  },
};

export const Text50Image50 = {
  args: {
    ...exampleArgs,
    layout: "text_image",
    columnWidths: "50_50",
    buttons: SampleButtons,
  },
};

export const Text66Image33 = {
  args: {
    ...exampleArgs,
    layout: "text_image",
    columnWidths: "66_33",
    buttons: SampleButtons,
  },
};

export const ImageTextNarrowText = {
  args: {
    ...exampleArgs,
    layout: "image_text",
    columnWidths: "33_66",
    buttons: SampleButtons,
  },
};

export const LightOnDark = {
  args: {
    ...exampleArgs,
    textColor: "light",
    buttons: (
      <>
        <Button text="Get Started" variant="solid" link="#" />
        <Button text="Learn More" variant="outline_light" link="#" />
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
