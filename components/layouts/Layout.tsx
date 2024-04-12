import Head from "next/head";
import { Key } from "react";
import Header from "./Header";
import Footer from "../Footer";

export interface ContainerProps {
  children?: React.ReactNode;
  customMeta?: Record<Key, string>;
}

export default function Layout({ children, customMeta }: ContainerProps) {
  const meta = {
    name: "Jasper Hwong",
    title: "Jasper Hwong – Developer.",
    description:
      "Full-stack software engineer based in Singapore." +
      "interested in Web Development, Machine Learning and Algorithms",
    url: "https://jasperhwong.vercel.app",
    ...customMeta
  };

  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center">
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description}></meta>
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta
            property="og:image"
            content={
              "https://avatars.githubusercontent.com/u/48860446?s=400&u=8fff5d79830aa932769873b301fb2cabdaa3ffaa&v=4"
            }
          />
          <meta property="og:url" content={meta.url} />
          <meta property="og:site_name" content={meta.name} />
        </Head>
      </div>
      <div className="relative flex flex-col w-full">
        <main
          id="skip"
          className="relative flex flex-col p-4 text-justify bg-zinc-50 dark:bg-gray-900"
        >
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
