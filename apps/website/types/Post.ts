import { Author } from "./Author";

export interface Post {
  slug: string;
  title: string;
  date: string | Date; // DD Mmm yyyy
  author?: Array<Author>;
  avatar?: string;
  description?: string;
  tags?: Array<string>;
}
