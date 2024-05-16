import { IoMusicalNotes } from "react-icons/io5";

type ICallToAction = {
  onClick: () => void;
  pressed: boolean;
};
export function RecordButton({ onClick, pressed }: ICallToAction) {
  return (
    <div
      className={`${
        pressed
          ? "bg-gradient-to-br from-gray-500 via-purple-500 to-gray-300"
          : "bg-gradient-to-br from-gray-900 via-purple-500 to-gray-900"
      } rounded-full shadow-md w-16 h-16`}
    >
      <button
        className={`${
          pressed
            ? "bg-gradient-to-br from-gray-500 via-purple-500 to-gray-300"
            : "bg-gradient-to-br from-gray-800 via-purple-500 to-gray-900"
        } rounded-full transform scale-90 flex items-center justify-center w-full h-full focus:outline-none transition-all`}
        onClick={onClick}
      >
        <IoMusicalNotes className="w-8 h-8" />
      </button>
    </div>
  );
}
