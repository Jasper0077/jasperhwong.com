import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps
} from "../components/ui/commons/Modal";
import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../components/ui/commons/buttons/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Modal",
  component: Modal
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args}>{args.children}</Modal>
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <ModalHeader
        title="Modal"
        handleClose={() => console.log("debug close")}
      />
      <ModalContent>
        <p>
          sample texts go here. Width always look down to find the maximum width
          of its children. Height backtrace upwards to find the height of its
          parent.
        </p>
      </ModalContent>
      <ModalFooter>
        <Button>Click</Button>
      </ModalFooter>
    </>
  )
};
