import {
  Breadcrumbs,
  BreadcrumbProps,
  CrumbProps
} from "../components/ui/commons/Breadcrumb";
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../components/ui/commons/buttons/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Breadcrumbs",
  component: Breadcrumbs
} as ComponentMeta<typeof Breadcrumbs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumbs> = (
  args: BreadcrumbProps
) => <Breadcrumbs {...args}>{args.children}</Breadcrumbs>;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Breadcrumbs>
        <Breadcrumbs.Crumb href="/" isActive={true}>
          section 1
        </Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/" isActive={true}>
          section 2A
        </Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href="/" isActive={true}>
          section II
        </Breadcrumbs.Crumb>
      </Breadcrumbs>
    </>
  )
};
