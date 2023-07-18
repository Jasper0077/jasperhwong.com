import type { NextApiRequest, NextApiResponse } from "next";
import client from "utils/apolloClient";
import { gql } from "@apollo/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { data } = await client.query({
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
              }
            }
          }
        }
      }
    `
  });

  res.status(200).json(data);
}
