const Timeline = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 my-8">
      <li className="mb-10 ml-4 list-none">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
          May 2022
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Software Developer
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Working on a rebranded clinic management system, partnership with
          Singapore SmartCMS, IHIS.The system is built with Next.js, Node.js,
          MySQL.
        </p>
      </li>
    </ol>
  );
};

export default Timeline;
