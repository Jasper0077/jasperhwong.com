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
      } h-16 w-16 rounded-full shadow-md`}
    >
      <button
        className={`${
          pressed
            ? "bg-gradient-to-br from-gray-500 via-purple-500 to-gray-300"
            : "bg-gradient-to-br from-gray-800 via-purple-500 to-gray-900"
        } flex h-full w-full scale-90 transform items-center justify-center rounded-full transition-all focus:outline-none`}
        onClick={onClick}
      >
        <IoMusicalNotes className="h-8 w-8" />
      </button>
    </div>
  );
}
