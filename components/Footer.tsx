import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return <footer className="flex flex-col justify-center max-w-4xl mx-auto mb-16 w-full">
    <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
    <div className="w-full max-w-4xl grid grid-col-1 sm:grid-col-3 gap-4 pb-16">
      <div className="flex flex-col space-y-4">
        <Link href={"/"}>
          <a className="text-gray-500 hover:textgray-600">Home</a>
        </Link>
        <Link href={"/about"}>
          <a className="text-gray-500 hover:textgray-600">About</a>
        </Link>
      </div>
      <div className="flex flex-col space-y-4">
      </div>
      <div className="flex flex-col space-y-4">
      </div>
    </div>
  </footer>
};

export default Footer;