import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import cn from "classnames";
import dynamic from "next/dynamic";
import { Post } from "../../types/Post";
import { getPost, getAllPosts, mdxToHtml } from "../../utils/mdx";
import { ParsedUrlQuery } from "querystring";
import { format, parseISO } from "date-fns";

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
    <>
      <div className="flex items-start justify-start mx-auto">
        <article>
          <h1 className="flex w-full max-w-2xl relative text-5xl font-bold mx-auto pt-8 pb-8 sm:pb-4 dark:text-white">
            {frontMatter.title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full mt-2 mb-20 md:flex-row md:items-center">
            <p className="ml-2 text-sm text-orange-600 dark:text-orange-400 italic font-semibold">
              {"Jasper Hwong / "}
              {format(parseISO(frontMatter.date), "MMM dd, yyyy")}
            </p>
            <p className="mt-2 text-sm text-orange-600 dark:text-orange-400 min-w-32 md:mt-0 italic font-semibold">
              {wordCount} words {"  •  "} {readingTime}
            </p>
          </div>
          <section
            className={cn(
              "prose dark:prose-invert sm:prose-base prose-lg text-justify max-w-2xl mx-8 sm:mx-4 mb-16"
            )}
          >
            <MDXRemote {...source} components={components} />
          </section>
        </article>
      </div>
    </>
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
