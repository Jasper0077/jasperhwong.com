"use client";

import cn from "classnames";
import { FormikProps } from "formik";
import { get } from "lodash";
import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler
} from "react";

import { Size } from "@/types/Form";

export interface TextFieldProps {
  label?: string;
  labelSize?: Size;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;

  // event handlers
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface FormTextFieldProps<T> extends TextFieldProps {
  handleChange: FormikProps<T>["handleChange"];
  values: FormikProps<T>["values"];
  field: string;
}

// TODO: use cva
const _BaseTextField = (props: TextFieldProps) => {
  return (
    <div className={props.className}>
      {props.label && (
        <label
          htmlFor={props.label}
          className={cn([
            "block font-medium leading-6 text-gray-900 dark:text-gray-200",
            props.labelSize ? `text-${props.labelSize}` : "text-sm"
          ])}
        >
          {props.label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={props.type}
          id={props.label}
          className={cn([
            "block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 focus:ring-inset focus:ring-2 ring-gray-300 dark:ring-gray-900",
            "text-gray-900 bg-neutral-200 placeholder:text-gray-400",
            "dark:text-gray-900 dark:bg-gray-200 placeholder:text-gray-400"
          ])}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onKeyDown={(e) => props.onKeyDown?.(e)}
        />
      </div>
    </div>
  );
};

export const TextField = _BaseTextField;

export const FormTextField = <T,>(props: FormTextFieldProps<T>) => {
  const { values, handleChange, field } = props;
  return (
    <div>
      {props.label && (
        <label
          htmlFor={props.label}
          className={cn([
            "block font-medium leading-6 text-gray-900 dark:text-gray-200",
            props.labelSize ? `text-${props.labelSize}` : "text-sm"
          ])}
        >
          {props.label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={props.type}
          name={field}
          id={props.label}
          value={get(values, field)}
          onChange={handleChange}
          className={cn([
            "block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 focus:ring-inset focus:ring-2 ring-gray-300 dark:ring-gray-900",
            "text-gray-900 bg-neutral-200 placeholder:text-gray-400",
            "dark:text-gray-900 dark:bg-gray-200 placeholder:text-gray-400"
          ])}
          placeholder={props.placeholder}
          onKeyDown={(e) => props.onKeyDown?.(e)}
        />
      </div>
    </div>
  );
};
