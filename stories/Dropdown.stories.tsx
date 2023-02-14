import Dropdown, {
  DropdownItem,
  DropdownProps
} from "../components/ui/commons/Dropdown";
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Example/Dropdown",
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => (
  <Dropdown {...args}>{args.children}</Dropdown>
);

const items = (
  <Dropdown.Item onClick={() => console.log("debug", "Item 1")}>
    Item 1
  </Dropdown.Item>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: "Dropdown",
  children: items
};
