import React from "react";

import { Button } from "@ui/commons/buttons/Button";
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@ui/commons/Modal";
import Wrapper from "@ui/commons/Wrapper";

const ModalPage = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log("debug", open);
  }, [open]);

  return (
    <Wrapper>
      <h1 className="flex w-full max-w-2xl text-4xl font-bold mx-auto pt-8 pb-8 sm:pb-16">
        Modal
      </h1>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        This page is for proof of concept of using Modal with display fixed and
        using backdrop blur from tailwind css to create a better user
        experience.
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
