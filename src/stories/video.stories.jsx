import Video from "@/components/video";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("video");

export default {
  title: "Components/Video",
  component: Video,
};

const Decorator = ({ children }) => (
  <div className="max-w-2xl p-8">{children}</div>
);

export const Default = {
  args: exampleArgs[0],
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};

export const SampleVideo = {
  args: {
    video: {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "https://placehold.co/640x360.png?text=Video+Poster",
    },
  },
  decorators: [
    (Story) => (
      <Decorator>
        <Story />
      </Decorator>
    ),
  ],
};
