import Image from "next/image";

interface Props {}

const Collections = () => {
  return (
    <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-center justify-center">
      <div className="relative">
        <Image
          src="https://i.pinimg.com/736x/e8/cc/47/e8cc477152201b9d326cfe6f2fc1932e.jpg"
          height={640}
          width={360}
          alt={"Pikachu"}
          className="rounded-xl object-cover"
        />
        <div className="absolute inset-0 rounded-md bg-gray-700 opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white">To Be Updated..</h2>
        </div>{" "}
      </div>
    </div>
  );
};

export default Collections;
