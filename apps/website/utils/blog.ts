import glob from "fast-glob";

import { Blog, BlogWithSlug } from "@/types/Blog";

async function importBlog(blogFilename: string): Promise<BlogWithSlug> {
  let { blog } = (await import(`/app/blogs/${blogFilename}`)) as {
    default: React.ComponentType;
    blog: Blog;
  };

  return {
    slug: blogFilename.replace(/(\/page)?\.mdx$/, ""),
    ...blog
  };
}

export async function getAllBlogs() {
  let blogFilenames = await glob("*/page.mdx", {
    cwd: "./app/blogs"
  });
  let blogs = await Promise.all(blogFilenames.map(importBlog));
  return blogs.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}
