import { defaultOpenGraph } from "@/constants";
import { Metadata } from "next";

const title = "About Jasper";
const description =
  "Things about me, I'm a SWE, tech enthusiast, gym-goer, bookworm, and anime lover.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: defaultOpenGraph({
    title,
    description,
    url: `${process.env.APP_URL}/about`
  })
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
