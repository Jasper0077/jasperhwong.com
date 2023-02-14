import AnimatedHeading from "components/AnimatedHeading";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto mb-16 w-full">
      <AnimatedHeading variant="h1" text="Hi, I am Jasper Hwong." />
    </div>
  );
};

export default Home;
