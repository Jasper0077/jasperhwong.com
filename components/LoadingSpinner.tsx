interface Props {}

const LoadingSpinner = () => {
  return (
    <div className="animate-spin items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500">
      <div className="h-9 w-9 rounded-full bg-gray-200"></div>
    </div>
  );
};

export default LoadingSpinner;
