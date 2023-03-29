import Wrapper from "@ui/commons/Wrapper";
import React from "react";
import cn from "classnames";
import { range } from "utils/range";
import Dropdown from "@ui/commons/Dropdown";

const directions = [
  {
    name: "row",
    value: "flex-row"
  },
  {
    name: "row-reverse",
    value: "flex-row-reverse"
  },
  {
    name: "column",
    value: "flex-col"
  },
  {
    name: "column-reverse",
    value: "flex-col-reverse"
  }
];

const Flexbox = () => {
  const [flexDirection, setFlexDirection] = React.useState<{
    name: string;
    value: string;
  }>({
    name: "row",
    value: "flex-row"
  });
  const [numberOfElements, setNumberOfElements] = React.useState<number>(30);

  return (
    <Wrapper>
      <div className="rounded border-gray-700 dark:border-gray-200 border-dashed border-2 p-4 w-2xl h-100">
        <div
          className={cn(
            "flex justify-center mx-auto",
            flexDirection.value,
            "gap-4 items-start justify-center"
          )}
        >
          {range(0, numberOfElements).map((val) => {
            return <div className={`w-full bg-gray-500 h-12`} key={val}></div>;
          })}
        </div>
      </div>
      <div>
        <Dropdown text={flexDirection.name} className="w-24 h-9 z-10">
          {directions.map((dir, index) => {
            return (
              <Dropdown.Item
                key={dir.name + index}
                variant="div"
                onClick={() => setFlexDirection(dir)}
              >
                {dir.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown>
      </div>
    </Wrapper>
  );
};

export default Flexbox;
