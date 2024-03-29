import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { Post } from "../../types/Post";
import { getPost, getAllPosts, mdxToHtml } from "../../utils/mdx";
import { ParsedUrlQuery } from "querystring";
import { Suspense } from "react";
import Image from "next/image";

// workaround while waiting author to migrate components to support mdx V2
import { CodeSandbox } from "mdx-embed/dist/components/codesandbox";
import LoadingSpinner from "@ui/commons/LoadingSpinner";

// components
const Sparkles = dynamic(() => import("../../components/Sparkles"));

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<Post, "slug">;
  wordCount?: number;
  readingTime?: string;
};

// bootstrapping components
export const components = {
  Sparkles,
  CodeSandbox,
  Image
};

const PostPage: React.FC<Props> = ({
  source,
  frontMatter,
  wordCount,
  readingTime
}: Props) => {
  if (!source || !frontMatter)
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner />
      </div>
    );
  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        {frontMatter.title}
      </h1>
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
        <div className="flex items-center">
          <p className="text-sm text-gray-700 dark:text-gray-300 flex flex-row items-center gap-4">
            {frontMatter.avatar && (
              <Image
                className="rounded-full bg-gray-200 dark:bg-gray-600"
                src={frontMatter.avatar}
                alt={`${frontMatter.author}'s profile picture`}
                width={36}
                height={36}
              />
            )}{" "}
            {`${frontMatter.author} / ${frontMatter.date}`}
          </p>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
          {wordCount} words
          {` • `}
          {readingTime}
        </p>
      </div>
      <Suspense fallback={null}>
        <div className="w-full prose dark:prose-invert mt-4 max-w-none">
          <MDXRemote components={components} {...source} />
        </div>
      </Suspense>
    </article>
  );
};

export default PostPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams;
  const locale = context.locale;
  const { content, data } = getPost(slug, locale);
  // serialize the data on the server side
  const { html, wordCount, readingTime } = await mdxToHtml(content);
  return {
    props: {
      source: html,
      frontMatter: data,
      wordCount,
      readingTime
    }
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  //only get the slug from posts
  const posts = getAllPosts(["slug"]);

  // map through to return post paths
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }));

  return {
    paths,
    fallback: true
  };
};
