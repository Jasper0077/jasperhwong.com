import "@/styles/tailwind.css";
import { Providers } from "./providers";
import Layout from "@/components/layouts/Layout";
import { Metadata } from "next/types";
import Favicon from "../public/favicon.ico";
import { defaultOpenGraph } from "@/constants";

export const metadata: Metadata = {
  title: "Jasper Hwong – Developer.",
  description:
    "Full-stack software engineer based in Singapore. " +
    "Interested in Web Development, Machine Learning and Algorithms",
  icons: [{ rel: "icon", url: Favicon.src }],
  openGraph: defaultOpenGraph({})
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-gray-200 dark:bg-gray-900">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
