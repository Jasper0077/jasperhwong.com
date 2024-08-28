import { GetObjectCommand } from "@aws-sdk/client-s3";
import chalk from "chalk";

import { r2 } from "@/utils/r2";

export async function GET() {
  try {
    console.log(chalk.yellow(`Downloading...`));

    const pdf = await r2.send(
      new GetObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: "JASPER-RESUME-v1.pdf" // TODO: generalise
      })
    );

    if (!pdf) {
      throw new Error("pdf not found.");
    }

    return new Response(pdf.Body?.transformToWebStream(), {
      headers: {
        "Content-Type": "application/pdf"
      }
    });
  } catch (err) {
    console.log("error", err);
  }
}
