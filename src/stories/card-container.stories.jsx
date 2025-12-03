import Card from "@/components/card";
import CardContainer from "@/components/card_container";

const containerExampleArgs = {
  preHeading: "Featured services",
  heading: "What we offer.",
  headingSize: "Large",
  textColor: "Dark",
  headingPosition: "Center aligned",
  headingLevel: "h2",
  layout: "33-33-33",
};

const cardExampleArgs = {
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
      {...cardExampleArgs}
      heading="Card One"
      text="This is the first card in the container."
    />
    <Card
      {...cardExampleArgs}
      heading="Card Two"
      text="This is the second card in the container."
    />
    <Card
      {...cardExampleArgs}
      heading="Card Three"
      text="This is the third card in the container."
    />
  </>
);

const TwoCards = (
  <>
    <Card
      {...cardExampleArgs}
      heading="Card One"
      text="This is the first card."
    />
    <Card
      {...cardExampleArgs}
      heading="Card Two"
      text="This is the second card."
    />
  </>
);

const FourCards = (
  <>
    <Card {...cardExampleArgs} heading="Card One" text="First card." />
    <Card {...cardExampleArgs} heading="Card Two" text="Second card." />
    <Card {...cardExampleArgs} heading="Card Three" text="Third card." />
    <Card {...cardExampleArgs} heading="Card Four" text="Fourth card." />
  </>
);

export const Default = {
  args: {
    ...containerExampleArgs,
    content: SampleCards,
  },
};

export const WithHeading = {
  args: {
    ...containerExampleArgs,
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
    ...containerExampleArgs,
    preHeading: "Features",
    heading: "Everything you need",
    headingPosition: "Left aligned",
    content: SampleCards,
  },
};
