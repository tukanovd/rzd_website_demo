import { ParsedUrlQuery } from "querystring";

export enum Size {
  "s" = "s",
  "m" = "m",
  "l" = "l",
  "content" = "content",
}

export enum AttachmentList {
  "icon" = "icon",
  "img" = "img",
  "preview" = "preview",
}

export type AttachmentListType = keyof typeof AttachmentList;

export type SizeType = keyof typeof Size;

export type Item = {
  id: string | number;
  label: string;
};
export type Attachment = {
  type: AttachmentListType;
  link: string;
  alt?: string;
};
export type Tag = {
  id: string;
  title: string;
};

export type TextBlockTypes = "list" | "text" | "header" | "attachment";

export type TextBlock = {
  type: TextBlockTypes;
  title?: string;
  text?: string;
  attachments?: Attachment[];
};

export type UrlParams = ParsedUrlQuery & {
  uid: string;
};

export enum TextColor {
  "primary" = "primary",
  "secondary" = "secondary",
  "black" = "black",
}

export type TextColorType = keyof typeof TextColor;

export type Nullable<T> = T | null | undefined;
