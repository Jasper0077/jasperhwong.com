// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseElement, BaseText } from "slate";

declare module "slate" {
  export interface BaseElement {
    type: string;
  }

  export interface BaseText {
    bold?: boolean;
    code?: boolean;
    italic?: boolean;
    underline?: boolean;
  }
}
