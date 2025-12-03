import Text from "@/components/text";

const exampleArgs = {
  text: "Enter some text...",
  textSize: "Normal",
  textColor: "Dark",
};

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    textSize: {
      control: "select",
      options: ["Extra Small", "Small", "Normal", "Large", "Extra Large"],
    },
    textColor: {
      control: "select",
      options: ["Dark", "Light"],
    },
  },
};

export const Default = {
  args: exampleArgs,
};

export const ExtraSmall = {
  args: {
    ...exampleArgs,
    textSize: "Extra Small",
  },
};

export const Small = {
  args: {
    ...exampleArgs,
    textSize: "Small",
  },
};

export const Normal = {
  args: {
    ...exampleArgs,
    textSize: "Normal",
  },
};

export const Large = {
  args: {
    ...exampleArgs,
    textSize: "Large",
  },
};

export const ExtraLarge = {
  args: {
    ...exampleArgs,
    textSize: "Extra Large",
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

export const WithHTML = {
  args: {
    text: "<p>This is a <strong>bold</strong> and <em>italic</em> text with a <a href='#'>link</a>.</p>",
    textSize: "Normal",
    textColor: "Dark",
  },
};
