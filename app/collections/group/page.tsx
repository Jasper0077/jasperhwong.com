"use client";

import cn from "classnames";
import { useFormik } from "formik";
import { cloneDeep } from "lodash";
import React, { KeyboardEventHandler } from "react";

import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { FormTextField, TextField } from "@/components/TextField";
import { Group, Name } from "@/types/Group";
import { group as groupNames } from "@/utils/group";

import Card from "./_components/Card";

function GroupPage() {
  const [group, setGroup] = React.useState<Group<Name>>([]);
  const [numberOfGroup, setNumberOfGroup] = React.useState<number>(3);
  const formik = useFormik<Array<Name>>({
    initialValues: [{ id: 0, name: "" }],
    onSubmit: (values) => {
      const names = formik.values;
      const shuffledGroup = groupNames<Name>(names, numberOfGroup);
      setGroup(shuffledGroup);
    }
  });

  const handleAddClick = React.useCallback(() => {
    const updated = cloneDeep(formik.values);
    let id = updated.length - 1;
    updated.push({ id: ++id, name: "" });
    console.log(updated);
    formik.setValues(updated);
  }, [formik.values]);

  const handleShiftKeyPressed: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.code === "AltLeft") {
      handleAddClick();
      return;
    }
  };

  return (
    <div
      className={cn([
        "max-w-4xl mx-auto flex flex-row justify-between items-center space-x-4 py-8 px-4"
      ])}
    >
      <div className="grid grid-cols-2 gap-4 w-[20vw]">
        {group.map((names, teamIndex) => (
          <Card
            team={`Team ${teamIndex + 1}`}
            names={names.map(({ name }) => name)}
          />
        ))}
      </div>
      <Divider vertical />
      <div className="overflow-x-auto grid h-full w-[20vw] justify-items-center place-items-start p-6 py-8 sm:p-8 lg:p-12">
        <form
          className="w-full max-w-lg space-y-2"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-row items-end justify-between">
            <Button onClick={handleAddClick}>Add</Button>
            <TextField
              type="number"
              label="groups?"
              onChange={(event) =>
                setNumberOfGroup(parseInt(event?.target.value))
              }
            />
          </div>
          {formik.values.map(({ id, name }, index) => (
            <FormTextField
              key={id}
              handleChange={formik.handleChange}
              values={formik.values}
              field={`${index}.name`}
              onKeyDown={handleShiftKeyPressed}
            />
          ))}
          <div className="flex flex-row-reverse items-center space-x-4">
            <Button type="submit" className="self-end">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GroupPage;
