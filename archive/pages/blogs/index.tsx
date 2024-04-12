import type { NextPage, GetStaticProps } from "next";
import { getAllPosts } from "../../../utils/mdx";
import BlogPostCard from "../../../components/blog/BlogPostCard";
import { posts } from "../../../data/posts";
import Wrapper from "@ui/commons/Wrapper";

// component render function
const Blogs: NextPage = () => {
  return (
    <Wrapper>
      <h1 className="flex w-full max-w-2xl text-4xl font-bold mx-auto pt-8 pb-8 sm:pb-16">
        Technical Articles
      </h1>

      <div className="flex flex-col space-y-8 w-full max-w-2xl relative mx-auto pt-8 pb-8 sm:pb-16">
        {posts.map((post, index) => (
          <BlogPostCard key={index + post.slug} index={index} post={post} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Blogs;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "slug", "date", "description", "tags"]);

  // retunr the posts props
  return { props: { posts } };
};
