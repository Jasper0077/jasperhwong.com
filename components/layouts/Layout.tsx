import Header from "./Header";
import Footer from "../Footer";

export interface ContainerProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: ContainerProps) {
  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center"></div>
      <div className="relative flex flex-col w-full">
        <main
          id="skip"
          className="relative flex flex-col p-4 text-justify bg-zinc-50 dark:bg-gray-900"
        >
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
