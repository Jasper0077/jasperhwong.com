"use client";

import classNames from "classnames";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Url } from "url";

import MobileMenu from "@/components/MobileMenu";
import IconButton from "@/components/IconButton";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";

interface NavItemProps {
  href: Url | string;
  text: string;
}

function NavItem({ href, text }: NavItemProps) {
  const pathname = usePathname();
  return (
    <NextLink
      href={href}
      className={classNames(
        pathname === href
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800",
        "mx-1 hidden rounded-lg p-1 transition-opacity sm:px-3 sm:py-2 md:inline-block"
      )}
    >
      <span className="capsize">
        <p
          style={{
            boxShadow:
              pathname === href ? "0px 1.5px 0px var(--color-primary)" : "none"
          }}
          className={"hover:no-shadow"}
        >
          {text}
        </p>
      </span>
    </NextLink>
  );
}

const Header = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mt-4 flex flex-col justify-center">
      <Navbar>
        {/* <a href="#skip" className="skip-nav">
          Skip to content
        </a> */}
        <div className="">
          <MobileMenu />
          <div className="flex flex-wrap">
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/blogs" text="Blogs" />
            <NavItem href="/collections" text="Collections" />
          </div>
        </div>
        <IconButton
          handleClick={() => setTheme(otherTheme)}
          className="flex h-9 w-9 items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5 text-gray-800 dark:text-gray-200"
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
        </IconButton>
      </Navbar>
    </div>
  );
};

export default Header;
