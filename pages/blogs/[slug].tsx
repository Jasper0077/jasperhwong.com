import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dynamic from "next/dynamic";
import { Post } from "../../types/Post";
import { getPost, getAllPosts, mdxToHtml } from "../../utils/mdx";
import { ParsedUrlQuery } from "querystring";
import { format, parseISO } from "date-fns";
import { Suspense } from "react";

//components
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
  Sparkles
};

const PostPage: React.FC<Props> = ({
  source,
  frontMatter,
  wordCount,
  readingTime
}: Props) => {
  return (
    <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
        {frontMatter.title}
      </h1>
      <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
        <div className="flex items-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {"Jasper Hwong / "}
            {format(parseISO(frontMatter.date), "MMMM dd, yyyy")}
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
  const { content, data } = getPost(slug);
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
    fallback: false
  };
};
