import Timeline from "../components/Timeline";

const About = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto mb-16 w-full">
      <h1 className="text-5xl font-bold text-center tracking-tight text-black-400 dark:text-white">
        About Me
      </h1>
      <div className="mb-8 prose dark:prose-dark leading-6 items-start">
        <h2>Bio</h2>
        <h3>Job Title</h3>
        <p>Jasper Hwong - Software Developer</p>
        <h3>Work Experience</h3>
        <p>
          Hi, my name is Jasper Hwong, {"I'm"} currently a software developer at{" "}
          <a href="https://unotech.io">Uno Technologies</a> in Singapore.
        </p>
        <Timeline />
      </div>
    </div>
  );
};

export default About;
