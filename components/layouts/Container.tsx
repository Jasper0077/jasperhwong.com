import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, Key } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import cn from "classnames";
import { Url } from "url";
import Footer from "../Footer";
import useSound from "use-sound";
import MobileMenu from "../MobileMenu";
import Navbar from "@ui/commons/Navbar";
import IconButton from "@ui/commons/buttons/IconButton";
import ListboxInput from "@ui/commons/Listbox";
import { enCommon } from "../../locales/en";
import { chCommon } from "../../locales/ch";

export interface NavItemProps {
  href: Url | string;
  text: string;
  translation?: string;
}

export interface ContainerProps {
  children?: JSX.Element | Array<JSX.Element> | undefined;
  customMeta?: Record<Key, string>;
}

function NavItem({ href, text, translation }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800",
          "hidden md:inline-block p-1 mx-1 sm:px-3 sm:py-2 rounded-lg transition-opacity"
        )}
      >
        <span className="capsize">
          <p
            style={{
              boxShadow: isActive
                ? "0px 1.5px 0px var(--color-primary)"
                : "none"
            }}
            className={"hover:no-shadow"}
          >
            {translation || text}
          </p>
        </span>
      </a>
    </NextLink>
  );
}

export default function Container({ children, customMeta }: ContainerProps) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? enCommon : chCommon;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [play] = useSound("/sounds/click.mp3");

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  const meta = {
    name: "Jasper Hwong",
    title: "Jasper Hwong – Developer.",
    description:
      "Full-stack software engineer based in Singapore." +
      "interested in Web Development, Machine Learning and Algorithms",
    url: "https://jasperhwong.com",
    ...customMeta
  };

  const handleThemeClick: () => void = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    play();
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
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
      <div className="flex flex-col justify-center px-10">
        <Navbar>
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <div className="flex flex-wrap mx-2">
              <NavItem href="/" text="Home" translation={t.home} />
              <NavItem href="/about" text="About" translation={t.about} />
              <NavItem href="/blogs" text="Blogs" translation={t.blogs} />
              <NavItem
                href="/collections"
                text="Collections"
                translation={t.collections}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between space-x-4">
            <ListboxInput />
            <IconButton
              handleClick={handleThemeClick}
              className="w-9 h-9 flex items-center justify-center"
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-800 dark:text-gray-200"
                >
                  {resolvedTheme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </IconButton>
          </div>
        </Navbar>
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-10 text-justify bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <Footer />
      </main>
    </div>
  );
}
