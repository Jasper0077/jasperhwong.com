import Image from "next/image";
import Container from "../components/Container";

const About = () => {
  return (<Container>
    <div className="flex flex-col justify-center max-w-4xl mx-auto mb-16 w-full">
      <h1 className="text-3xl font-bold text-center tracking-tight text-black-400 dark:text-white">
        About Me
      </h1>
      <div className="mb-8 prose dark:prose-stone leading-6 items-start">
        <h2>Links</h2>
      </div>
    </div>
  </Container>);
};

export default About;