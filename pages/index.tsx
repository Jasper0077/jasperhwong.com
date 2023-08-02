import classNames from "classnames";
import AnimatedHeading from "components/AnimatedHeading";
import type { NextPage } from "next";
import { posts } from "../data/posts";

const recentPosts = posts
  .sort((a, b) => (b.date > a.date ? 1 : -1))
  .slice(0, 2);

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto mb-16 w-full">
      <div className="flex flex-row gap-8 items-center justify-start ml-4">
        <div
          className={classNames(
            "rounded-full bg-gray-200",
            "dark:bg-gray-600",
            "hidden sm:block"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              "https://avatars.githubusercontent.com/u/48860446?s=400&u=8fff5d79830aa932769873b301fb2cabdaa3ffaa&v=4"
            }
            width={512}
            height={512}
            className="relative inset-2 top-[-2rem]"
            alt="@Jasper0077"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <AnimatedHeading
            variant="h1"
            className="flex w-full max-w-2xl text-4xl font-bold mx-auto pt-8 pb-4 sm:pb-8"
            text="Hi, I'm Jasper!"
          />
          <h1 className="text-lg dark:text-gray-200 text-gray-700">
            I am a software developer, tech enthusiast. I work as a Full-stack
            developer, and code my own projects during my spare time. Whenever I
            have time, I enjoy watching anime, sports and reading.
          </h1>
        </div>
      </div>
      <div className="mt-16 ml-4">
        <h1 className="text-lg uppercase">Recent Posts</h1>
        <div className="mt-8">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between gap-4 group mb-12"
            >
              <h4 className="font-semibold text-md group-hover:text-blue-600">
                {post.title}
              </h4>
              <p className="text-sm">{post.description}</p>
              <a
                href={`/blogs/${post.slug}`}
                className="font-thin text-sm group-hover:text-blue-600"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
