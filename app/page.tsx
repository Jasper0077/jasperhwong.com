import classNames from "classnames";

const Home = () => {
  return (
    <>
      <div className="mx-auto mb-16 flex min-h-[70vh] w-full max-w-2xl flex-col justify-center">
        <div className="ml-4 flex flex-row items-center justify-start gap-8">
          <div
            className={classNames(
              "rounded-full bg-zinc-200",
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
            <h2 className="mx-auto flex w-full max-w-2xl pb-4 pt-8 text-4xl font-bold sm:pb-8">
              Hi, I'm Jasper.
            </h2>
            <h1 className="text-lg text-gray-600 dark:text-gray-200">
              I am a software developer, tech enthusiast. I work as a Full-stack
              developer, and code my own projects during my spare time. Whenever
              I have time, I enjoy watching anime, sports and reading.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
