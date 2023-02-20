// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseElement } from "slate";

declare module "slate" {
  export interface BaseElement {
    type: string;
  }
}
