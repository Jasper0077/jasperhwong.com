import { ParsedUrlQuery } from "querystring";

export const formatDynamicPath: (
  pathname: string,
  query: ParsedUrlQuery
) => string = (pathname, query) => {
  const pathSegments = pathname.split("/");
  const formatted = pathSegments.map((segment) => {
    if (segment.startsWith("[") && segment.endsWith("]")) {
      const key = segment.slice(1, -1);
      return query[key] || "";
    }
    return segment;
  });
  return formatted.join("/");
};
