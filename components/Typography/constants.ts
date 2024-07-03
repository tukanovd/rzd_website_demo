import type { TypographyVariants } from "./types";

export const typographyVariants: TypographyVariants = {
  b1: "b1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p1: "p1",
  p2: "p2",
  p2b: "p2b",
  p3: "p3",
  bA: "bA",
  bAA: "bAA",
  bAAA: "bAAA",
};

export const typographyVariantMapping = {
  b1: "h1",
  h1: "h1",
  h2: "span",
  h3: "span",
  p1: "span",
  p2: "span",
  p2b: "span",
  p3: "span",
  bA: "span",
  bAA: "span",
  bAAA: "span",
};

export const typographyClasses = {
  [typographyVariants.b1]: "text-b1",
  [typographyVariants.h1]: "text-h1",
  [typographyVariants.h2]: "text-h2",
  [typographyVariants.h3]: "text-h3",
  [typographyVariants.p1]: "text-p1",
  [typographyVariants.p2]: "text-p2",
  [typographyVariants.p2b]: "text-p2b",
  [typographyVariants.p3]: "text-p3",
  [typographyVariants.bA]: "text-blind-A",
  [typographyVariants.bAA]: "text-blind-AA",
  [typographyVariants.bAAA]: "text-blind-AAA",
};
