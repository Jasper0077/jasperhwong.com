import { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { PinnableItemConnection } from "types/Github";

import Wrapper from "@ui/commons/Wrapper";
import { Repository } from "types/Github";
import client from "utils/apolloClient";
import { gql } from "@apollo/client";
import { enCommon } from "../../locales/en";
import { chCommon } from "../../locales/ch";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps<{
  pinnableItemConnection: PinnableItemConnection | any;
}> = async () => {
  const { data: pinnableItemConnection } = await client.query({
    query: gql`
      query {
        user(login: "Jasper0077") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                repositoryTopics(first: 5) {
                  nodes {
                    topic {
                      name
                    }
                    url
                  }
                }
                languages(first: 3) {
                  nodes {
                    name
                    color
                  }
                }
                openGraphImageUrl
                usesCustomOpenGraphImage
              }
            }
          }
        }
      }
    `
  });
  return { props: { pinnableItemConnection } };
};

const Collections = ({
  pinnableItemConnection
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? enCommon : chCommon;
  return (
    <Wrapper>
      <h1 className="flex w-full max-w-2xl text-4xl font-bold mx-auto pt-8 pb-8 sm:pb-16">
        {t["collections"]}
      </h1>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
        {pinnableItemConnection.user.pinnedItems.nodes.map(
          (repo: Repository, index: number) => (
            <div
              key={index}
              className="group relative flex flex-col items-start px-8 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg scale-95 hover:scale-100"
            >
              {repo.usesCustomOpenGraphImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-gray-500 shadow-md shadow-zinc-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:ring-0"
                  src={repo.openGraphImageUrl}
                  alt={repo.openGraphImageUrl}
                />
              )}
              <h2 className="mt-6 text-base font-semibold text-gray-800 dark:text-gray-200">
                <a href={repo.url} target="_blank" rel="noreferrer noopener">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">{repo.name}</span>
                </a>
              </h2>
              <p className="relatvie z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
                {repo.description}
              </p>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-gray-400 transition group-hover:text-blue-600 dark:text-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 flex-none"
                >
                  <path
                    d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="ml-2">Visit</span>
              </p>
            </div>
          )
        )}
      </div>
    </Wrapper>
  );
};

export default Collections;
