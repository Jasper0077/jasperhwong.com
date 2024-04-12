import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID || ""
  });

  console.log("debug", response);

  res.status(200).json({ response });
}
