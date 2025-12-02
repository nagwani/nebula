import Section from "@/components/section";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("section");

export default {
  title: "Components/Section",
  component: Section,
  argTypes: {
    width: {
      control: "select",
      options: ["Normal", "Wide"],
    },
  },
};

const SampleContent = () => (
  <div className="rounded-lg bg-blue-100 p-4 text-center text-blue-800">
    Section Content
  </div>
);

export const Default = {
  args: {
    ...exampleArgs[0],
    content: <SampleContent />,
  },
};

export const Normal = {
  args: {
    width: "Normal",
    content: <SampleContent />,
  },
};

export const Wide = {
  args: {
    width: "Wide",
    content: <SampleContent />,
  },
};
