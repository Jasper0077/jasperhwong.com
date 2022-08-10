import type { NextPage, GetStaticProps } from "next";
import { Post } from "../../types/Post";
import Link from "next/link";
import { getAllPosts } from "../../utils/mdx";

// props type
interface Props {
  posts: [Post];
}

// component render function
const Blogs: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Technical articles</h1>

      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.slug}>
            <h2 className="text-2xl font-bold mb-4">
              <Link href={`/blogs/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>

            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "slug", "date", "description"]);

  // retunr the posts props
  return { props: { posts } };
};
