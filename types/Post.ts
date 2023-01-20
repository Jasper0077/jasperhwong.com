import { Author } from "./Author";

export interface Post {
  slug: string;
  title: string;
  date: Date;
  author?: Array<Author>;
  description?: string;
  tags?: Array<string>;
}
