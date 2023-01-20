import { Post } from "../types/Post";

/**
 * List of blog posts metadata.
 */
export const posts: Array<Post> = [
  {
    slug: "how-to-set-up-mdx-in-next",
    title: "How to set up MDX in Nextjs",
    author: [
      {
        name: "Jasper Hwong",
        github: "Jasper0077"
      }
    ],
    description:
      "This article will guide you how to set up mdx in a nextjs environment from zero to hero",
    date: "11 Aug 2022",
    tags: ["React", "mdx", "Next.js"]
  },
  {
    slug: "wrapping-up-2022",
    title: "Wrapping Up 2022",
    author: [
      {
        name: "Jasper Hwong",
        github: "Jasper0077"
      }
    ],
    description: "A Recap of what I have learned in 2022...",
    date: "13 Dec 2022",
    tags: ["React", "mdx", "Next.js", "Leetcode", "AWS", "Kubernetes"]
  }
];
