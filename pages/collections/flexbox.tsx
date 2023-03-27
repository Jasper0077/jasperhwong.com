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
  const [numberOfElements, setNumberOfElements] = React.useState<number>(3);

  return (
    <Wrapper>
      <div className={cn("flex", flexDirection.value)}>
        {range(0, numberOfElements).map((val) => {
          return (
            <div
              className="rounded border-gray-600 bg-gray-400 text-7xl p-4"
              key={val}
            >
              {val}
            </div>
          );
        })}
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
