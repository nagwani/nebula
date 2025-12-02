import Card from "@/components/card";
import CardContainer from "@/components/card_container";

import { getComponentExamples } from "./lib/get-examples";

const containerExampleArgs = await getComponentExamples("card_container");
const cardExampleArgs = await getComponentExamples("card");

export default {
  title: "Components/Card Container",
  component: CardContainer,
  argTypes: {
    layout: {
      control: "select",
      options: ["50-50", "33-33-33", "50-25-25", "25-25-50", "25-25-25-25"],
    },
    textColor: {
      control: "select",
      options: ["Dark", "Light"],
    },
    headingSize: {
      control: "select",
      options: ["Extra Large", "Large", "Medium", "Small"],
    },
    headingPosition: {
      control: "select",
      options: ["Left aligned", "Center aligned", "Right aligned"],
    },
    headingLevel: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

const SampleCards = (
  <>
    <Card
      {...cardExampleArgs[0]}
      heading="Card One"
      text="This is the first card in the container."
    />
    <Card
      {...cardExampleArgs[0]}
      heading="Card Two"
      text="This is the second card in the container."
    />
    <Card
      {...cardExampleArgs[0]}
      heading="Card Three"
      text="This is the third card in the container."
    />
  </>
);

const TwoCards = (
  <>
    <Card
      {...cardExampleArgs[0]}
      heading="Card One"
      text="This is the first card."
    />
    <Card
      {...cardExampleArgs[0]}
      heading="Card Two"
      text="This is the second card."
    />
  </>
);

const FourCards = (
  <>
    <Card {...cardExampleArgs[0]} heading="Card One" text="First card." />
    <Card {...cardExampleArgs[0]} heading="Card Two" text="Second card." />
    <Card {...cardExampleArgs[0]} heading="Card Three" text="Third card." />
    <Card {...cardExampleArgs[0]} heading="Card Four" text="Fourth card." />
  </>
);

export const Default = {
  args: {
    ...containerExampleArgs[0],
    content: SampleCards,
  },
};

export const WithHeading = {
  args: {
    ...containerExampleArgs[0],
    preHeading: "Our Services",
    heading: "What We Offer",
    headingSize: "Large",
    headingPosition: "Center aligned",
    headingLevel: "h2",
    content: SampleCards,
  },
};

export const TwoColumnLayout = {
  args: {
    layout: "50-50",
    textColor: "Dark",
    heading: "Featured",
    headingPosition: "Left aligned",
    content: TwoCards,
  },
};

export const FourColumnLayout = {
  args: {
    layout: "25-25-25-25",
    textColor: "Dark",
    heading: "All Features",
    headingPosition: "Center aligned",
    content: FourCards,
  },
};

export const LeftAlignedHeading = {
  args: {
    ...containerExampleArgs[0],
    preHeading: "Features",
    heading: "Everything you need",
    headingPosition: "Left aligned",
    content: SampleCards,
  },
};
