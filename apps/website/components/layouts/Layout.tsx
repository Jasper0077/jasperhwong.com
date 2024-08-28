import Header from "./Header";
import Footer from "../Footer";

export interface ContainerProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: ContainerProps) {
  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center"></div>
      <div className="relative flex w-full flex-col">
        <main
          id="skip"
          className="relative flex flex-col bg-zinc-50 p-4 text-justify dark:bg-gray-900"
        >
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
