import Timeline from "@/components/Timeline";
import classNames from "classnames";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto mb-16 w-full">
      <div
        className={classNames(
          "invisible absolute sm:visible",
          "top-48 right-[30%]",
          "rounded-full bg-zinc-200",
          "dark:bg-gray-600"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          src={
            "https://avatars.githubusercontent.com/u/48860446?s=400&u=8fff5d79830aa932769873b301fb2cabdaa3ffaa&v=4"
          }
          alt="@Jasper0077"
          height={128}
          width={128}
          sizes="(min-width: 1024px) 32rem, 20rem"
          className="relative inset-2 top-[-2rem]"
        />
      </div>
      <div className="mb-8 prose dark:prose-invert leading-6 items-start">
        <h2>Biography</h2>
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
