export interface TagProps {
  tags: Array<string> | undefined;
}

const Tag = ({ tags }: TagProps) => {
  return (
    <>
      {tags?.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 rounded-lg text-blue-800 text-xs font-semibold mx-auto px-2.5 py-0.5 dark:bg-blue-200 dark:text-blue-800"
        >
          {tag}
        </span>
      ))}
    </>
  );
};

export default Tag;
