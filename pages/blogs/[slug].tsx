import { serialize } from "next-mdx-remote/serialize";
import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import cn from "classnames";

import { Post } from "../../types/Post";
import { getPost, getAllPosts } from "../../utils/mdx";
import { ParsedUrlQuery } from "querystring";

//components
// const Sparkles = dynamic(() => import("../../components/Sparkles"));
import Sparkles from "../../components/Sparkles";

// props type
type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<Post, "slug">;
};

// bootstrapping components
export const components = {
  Sparkles
};

const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  return (
    <div className="flex items-start justify-start mx-auto">
      <article
        className={cn(
          "prose prose-stone dark:prose-invert dark:prose-p-gray-200 prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl text-justify max-w-2xl mx-auto mb-16"
        )}
      >
        <h1 className="flex w-full max-w-2xl relative text-4xl font-bold mx-auto pt-8 pb-8 sm:pb-16">
          {frontMatter.title}
        </h1>
        <MDXRemote {...source} components={components} />
      </article>
    </div>
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
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
      frontMatter: data
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
