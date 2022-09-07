import { Author } from "./Author";

export interface Post {
  slug: string;
  title: string;
  date: string;
  author?: Array<Author>;
  description?: string;
  tags?: Array<string>;
}
