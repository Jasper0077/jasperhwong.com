export interface DividerProps {
  vertical?: boolean;
}

export function Divider({ vertical }: DividerProps) {
  if (vertical) {
    return (
      <div className="flex flex-1">
        <div className="inline-block h-[250px] w-0.5 self-stretch bg-gray-100 lg:h-[500px] dark:bg-white/10"></div>
      </div>
    );
  }
  return (
    <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
  );
}
