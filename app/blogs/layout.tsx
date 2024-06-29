import { defaultOpenGraph } from "@/constants";
import { Metadata } from "next";

const title = "Jasper's Blogs";
const description =
  "An assortment of random snippety cascade of thoughts at certain point of time ordered in chronologically order.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: defaultOpenGraph({
    title,
    description,
    url: `${process.env.APP_URL}/blogs`
  })
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
