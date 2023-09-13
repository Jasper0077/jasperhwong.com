const Timeline = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 my-8">
      <li className="mb-10 ml-4 list-none">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">
          1st August 2023
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          jasperhwong.com
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          I am thrilled to announce that I have finally launched my own personal
          website after doing some research on cloud services, domain registrar
          pricing. And I finally ended up with Cloudflare as my cloud solution.
          From now on, more content are coming up soon!
        </p>
      </li>
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
