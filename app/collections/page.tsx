import Image from "next/image";

interface Props {}

const Collections = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16 w-full">
      <div className="relative">
        <Image
          src="https://i.pinimg.com/736x/e8/cc/47/e8cc477152201b9d326cfe6f2fc1932e.jpg"
          height={640}
          width={360}
          alt={"Pikachu"}
          className="object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">To Be Updated..</h2>
        </div>{" "}
      </div>
    </div>
  );
};

export default Collections;
