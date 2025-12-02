import Footer from "@/components/footer";

import { getComponentExamples } from "./lib/get-examples";

const exampleArgs = await getComponentExamples("footer");

export default {
  title: "Components/Footer",
  component: Footer,
};

export const Default = {
  args: exampleArgs[0],
};

export const WithLinks = {
  args: {
    text: (
      <>
        <a href="/privacy" className="text-gray-500 hover:text-gray-700">
          Privacy Policy
        </a>
        <span className="text-gray-300">|</span>
        <a href="/terms" className="text-gray-500 hover:text-gray-700">
          Terms of Service
        </a>
        <span className="text-gray-300">|</span>
        <a href="/contact" className="text-gray-500 hover:text-gray-700">
          Contact Us
        </a>
      </>
    ),
  },
};
