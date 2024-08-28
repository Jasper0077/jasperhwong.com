import classNames from "classnames";

export function Prose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={classNames(className, "prose dark:prose-invert")}
      {...props}
    />
  );
}
