import { Robots } from "next/dist/lib/metadata/types/metadata-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

export const defaultOpenGraph: (params: Partial<OpenGraph>) => OpenGraph = (
  params
) => ({
  title: params.title || "Jasper Hwong - Developer",
  description: params.description || "jasperhwong.com",
  url: params.url || "https://www.jasperhwong.com",
  siteName: "Jasper Hwong",
  locale: "en_SG",
  type: "website",
  ...params
});
