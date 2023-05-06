import React from "react";
import { fadeIn } from "utils/motion";
import { Post } from "../../types/Post";
import Tag from "./Tag";
import { motion } from "framer-motion";
import WithAnimation from "components/hoc/WithAnimation";

export interface CardProps {
  index: number;
  post: Post;
}

const BlogPostCard = (props: CardProps) => {
  const { index, post } = props;
  return (
    <motion.a
      href={`/blogs/${post.slug}`}
      className="flex flex-col items-start min-h-min p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: index * 0.5,
        duration: 0.75
      })}
    >
      <div className="grid grid-cols-3 gap-2">
        <h4 className="mb-1 col-span-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h4>
        <div className="col-span-3 flex flex-col sm:flex-row gap-2">
          <p className="font-light text-sm col-span-2 text-gray-400 dark:text-gray-200 my-auto">
            {`Last Edited: ${post.date}`}
          </p>
          <div className="space-x-2 overflow-y-hidden">
            <Tag tags={post.tags} />
          </div>
        </div>
        <p className="flex font-normal col-span-3 text-gray-700 dark:text-gray-400 my-auto">
          {post.description}
        </p>
      </div>
    </motion.a>
  );
};

export default WithAnimation(BlogPostCard);
