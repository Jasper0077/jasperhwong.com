export default function DownloadButton({
  title,
  handleDownload
}: {
  title?: string;
  handleDownload: () => void;
}) {
  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex items-center gap-x-1.5 rounded-md bg-zinc-200 px-2 py-1 text-sm font-semibold text-[--tw-prose-body] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-gray-600 dark:text-[--tw-prose-invert-body]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
      {title || ""}
    </button>
  );
}
