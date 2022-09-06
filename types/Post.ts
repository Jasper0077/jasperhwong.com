import { Author } from "./Author";

export interface Post {
  slug: string;
  title: string;
  author?: Array<Author>;
  description?: string;
  date?: string | Date;
  tags?: Array<string>;
}
