import AnimatedHeading from "components/AnimatedHeading";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto mb-16 w-full">
      <AnimatedHeading
        variant="h1"
        classNames="flex w-full max-w-2xl text-4xl font-bold mx-auto pt-8 pb-8 sm:pb-16"
        text="Hi, I am Jasper Hwong."
      />
    </div>
  );
};

export default Home;
