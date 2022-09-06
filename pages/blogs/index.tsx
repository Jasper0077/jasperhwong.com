import type { NextPage, GetStaticProps } from "next";
import { getAllPosts } from "../../utils/mdx";
import BlogPostCard from "../../components/blog/BlogPostCard";
import { posts } from "../../data/posts";

// component render function
const Blogs: NextPage = () => {
  return (
    <div className="flex flex-col justify-center px-8 my-8">
      <h1 className="flex w-full max-w-2xl relative text-4xl font-bold mx-auto pt-8 pb-8 sm:pb-16">
        Technical articles
      </h1>

      <div className="flex w-full max-w-2xl relative mx-auto pt-8 pb-8 sm:pb-16">
        {posts.map((post, index) => (
          <BlogPostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "slug", "date", "description", "tags"]);

  // retunr the posts props
  return { props: { posts } };
};
