"use client";

import { MutableRefObject, RefObject, useContext } from "react";
import { useRouter } from "next/navigation";

import { AppContext } from "@/app/providers";
import { Container } from "@/components/Container";
import { Prose } from "@/components/Prose";
import { BlogWithSlug } from "@/types/Blog";
import Image from "next/image";
import readingTime from "reading-time";
import React from "react";

const WORD_PER_MINUTE = 260;

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  blog,
  children
}: {
  blog: BlogWithSlug;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLElement>(null);
  const [wordCount, setWordCount] = React.useState<number>(0);
  const [readingTime, setReadingTime] = React.useState<number>(0);
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);

  React.useEffect(() => {
    console.log("debug", ref.current?.innerText);
    if (ref.current?.innerText) {
      const words = ref.current.innerText.match(/\w+/g)?.length;
      console.log("debug words", words);
      if (words) {
        setWordCount(words || 0);
        setReadingTime(Math.ceil(words / WORD_PER_MINUTE));
      }
    }
  }, [ref]);

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article ref={ref}>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {blog?.title || ""}
              </h1>
              <time
                dateTime={blog?.date || ""}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{blog.date}</span>
              </time>
              <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
                <div className="flex items-center">
                  <p className="text-sm text-prose dark:text-prose-invert flex flex-row items-center gap-4">
                    <Image
                      className="rounded-full bg-gray-200 dark:bg-gray-600"
                      src={
                        "https://avatars.githubusercontent.com/u/48860446?s=400&u=8fff5d79830aa932769873b301fb2cabdaa3ffaa&v=4"
                      }
                      alt={`${blog.author}'s profile picture`}
                      width={36}
                      height={36}
                    />
                    {blog.author}
                  </p>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
                  {`${wordCount} words • ${readingTime} minutes`}
                </p>
              </div>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  );
}
