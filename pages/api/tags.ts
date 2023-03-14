

import { createClient } from "contentful";
import { NextApiRequest, NextApiResponse } from "next";

const space = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const host = "cdn.contentful.com";


export default async function tags(__: any, res: NextApiResponse) {
  try {
    if (space && environment && accessToken) {
      const client = createClient({
        space,
        environment,
        accessToken,
        host
      });

      const tags = await client.getTags();

      return res.status(200).json({ tags: tags.items });
    }

    return res.status(400).json([]);
  }
  catch (e: any) {
    console.error(e);
    return res.status(e.status).json({ message: e.message });
  }
}