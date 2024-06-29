import { defaultOpenGraph } from "@/constants";
import { Metadata } from "next";

const title = "Jasper's Collections";
const description = "Here, I present the apps and tools I've crafted.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: defaultOpenGraph({
    title,
    description,
    url: `${process.env.APP_URL}/collections`
  })
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
