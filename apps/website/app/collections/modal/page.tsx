"use client";

import React from "react";

import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@/components/Modal";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/Button";

const ModalPage = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Wrapper>
      <h1 className="mx-auto flex w-full max-w-2xl pb-8 pt-8 text-4xl font-bold sm:pb-16">
        Modal
      </h1>
      <p className="mb-4 text-base font-normal text-gray-600 dark:text-zinc-200">
        This page is for proof of concept of using Modal with display fixed and
        using backdrop blur from tailwind css to create a better user
        experience.
      </p>
      <p className="mb-4 text-base font-normal text-gray-600 dark:text-zinc-200">
        Updates on Next.js 13 and above. We need to check if the component has
        mounted. And append the portal to the document body after mount.
      </p>
      <Button onClick={() => setOpen(!open)} variant="primary" size="medium">
        Open
      </Button>
      <Modal open={open}>
        <ModalHeader
          title="This is a modal"
          handleClose={() => setOpen(!open)}
        />
        <ModalContent>
          <p>
            sample texts go here. Width always look down to find the maximum
            width of its children. Height backtrace upwards to find the height
            of its parent.
          </p>
        </ModalContent>
        <ModalFooter>
          <Button>Click</Button>
        </ModalFooter>
      </Modal>
    </Wrapper>
  );
};

export default ModalPage;
