import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { i18n } from "utils/i18n";
import { useRouter } from "next/router";
import React from "react";
import { formatDynamicPath } from "utils/path";

interface Props {}

const languages: Record<string, { nativeName: string }> = {
  en: { nativeName: "English" },
  ch: { nativeName: "Chinese" }
};

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

const ListboxInput = ({}: Props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? "en" : "ch";
  const [selected, setSelected] = React.useState<string>(t);
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // const [selected, setSelected] = useState<string>("English");

  const changeLanguage = (language: string) => {
    const { pathname, query } = router;
    const path = formatDynamicPath(pathname, query);
    router.push(path, path, { locale: language });
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-9 h-9 cursor-default rounded-lg bg-gray-200 p-[0.25rem] text-gray-900 dark:bg-gray-600 hover:ring-2 ring-0 ring-gray-300 transition-all ring-inset focus:outline-none focus:ring-2">
              {mounted && (selected === "en" || "") ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7  text-gray-800 dark:text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                  />
                </svg>
              ) : (
                <p className=" text-gray-800 dark:text-gray-200">CH</p>
              )}
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-50 mt-1 bg-white dark:bg-gray-400 max-h-60 w-max overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {Object.keys(languages).map((language) => (
                  <Listbox.Option
                    key={language}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-gray-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-8 pr-4"
                      )
                    }
                    value={language}
                    onClick={() => changeLanguage(language)}
                    disabled={selected === language}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {languages[language].nativeName}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? " text-white" : "text-gray-400",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default ListboxInput;
