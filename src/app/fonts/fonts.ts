import { Titillium_Web } from "next/font/google";

const title = Titillium_Web({
  weight: ["700"],
  subsets: ["latin"],
});

const paragraph = Titillium_Web({ weight: ["400"], subsets: ["latin"] });
const label = Titillium_Web({ weight: ["600"], subsets: ["latin"] });
export { title, paragraph, label };
