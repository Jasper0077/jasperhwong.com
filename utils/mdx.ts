import matter from "gray-matter";
import { join } from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

type Items = {
  [key: string]: string;
};

type Post = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const POSTS_PATH = join(process.cwd(), "pages/blogs");

function getPostsFilePaths(): string[] {
  return (
    fs
      .readdirSync(POSTS_PATH)
      // load the post content from the mdx files
      .filter((path) => /\.mdx?$/.test(path))
  );
}

export function getPost(slug: string): Post {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return { data, content };
}

export function getPostItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, "");
  const { data, content } = getPost(slug);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      // verify the fields has data
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[]): Items[] {
  const filePaths = getPostsFilePaths();

  // get the posts from the filepaths with the needed fields sorted by date
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));

  return posts;
}

export async function mdxToHtml(source: string) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"]
            }
          }
        ]
      ],
      format: "mdx"
    }
  });

  return {
    html: mdxSource,
    wordCount: source.split(/\s+/gu).length,
    readingTime: readingTime(source).text
  };
}
