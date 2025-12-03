import GridContainer from "@/components/grid_container";

export default {
  title: "Components/Grid Container",
  component: GridContainer,
  argTypes: {
    layout: {
      control: "select",
      options: [
        "50-50",
        "33-33-33",
        "75-25",
        "25-75",
        "67-33",
        "33-67",
        "50-25-25",
        "25-25-50",
        "25-25-25-25",
      ],
    },
    gap: {
      control: "select",
      options: ["Extra Small", "Small", "Medium", "Large", "Extra Large"],
    },
  },
};

const GridItem = ({ children }) => (
  <div className="flex h-24 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
    {children}
  </div>
);

const TwoColumnContent = (
  <>
    <GridItem>Column 1</GridItem>
    <GridItem>Column 2</GridItem>
  </>
);

const ThreeColumnContent = (
  <>
    <GridItem>Column 1</GridItem>
    <GridItem>Column 2</GridItem>
    <GridItem>Column 3</GridItem>
  </>
);

const FourColumnContent = (
  <>
    <GridItem>Column 1</GridItem>
    <GridItem>Column 2</GridItem>
    <GridItem>Column 3</GridItem>
    <GridItem>Column 4</GridItem>
  </>
);

export const Default = {
  args: {
    layout: "33-33-33",
    gap: "Medium",
    content: ThreeColumnContent,
  },
};

export const TwoColumnsEqual = {
  args: {
    layout: "50-50",
    gap: "Medium",
    content: TwoColumnContent,
  },
};

export const TwoColumnsWideLeft = {
  args: {
    layout: "75-25",
    gap: "Medium",
    content: TwoColumnContent,
  },
};

export const TwoColumnsWideRight = {
  args: {
    layout: "25-75",
    gap: "Medium",
    content: TwoColumnContent,
  },
};

export const FourColumnsEqual = {
  args: {
    layout: "25-25-25-25",
    gap: "Medium",
    content: FourColumnContent,
  },
};

export const LargeGap = {
  args: {
    layout: "33-33-33",
    gap: "Extra Large",
    content: ThreeColumnContent,
  },
};

export const SmallGap = {
  args: {
    layout: "33-33-33",
    gap: "Small",
    content: ThreeColumnContent,
  },
};
