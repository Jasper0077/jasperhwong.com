import type { NextApiRequest, NextApiResponse } from "next";
import { octokit } from "utils/octokit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const response = await octokit.rest.repos.listForUser({
    username: "Jasper0077"
  });
  res.status(200).json(response);
}
