import { Author } from "./Author";

export interface Post {
  slug?: string;
  date?: string;
  author?: Array<Author>;
  title?: string;
  description?: string;
  tags?: Array<string>;
  test: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  author?: Array<Author>;
  description?: string;
  date?: string | Date;
  tags?: Array<string>;
}
