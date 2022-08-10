import { Author } from "./Author";

export interface Post {
  slug?: string;
  date?: string;
  author?: Array<Author>;
  title?: string;
  description?: string;
}
