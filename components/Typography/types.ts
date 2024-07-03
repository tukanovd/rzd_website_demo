import * as React from "react";

export interface ComponentTypeMap {
  props: {};
  defaultComponent: React.ElementType;
}

export interface CommonProps {
  className?: string;
  style?: React.CSSProperties;
}

export type Props<M extends ComponentTypeMap> = M["props"] & CommonProps;

export type OverridableComponentProps<
  M extends ComponentTypeMap,
  C extends React.ElementType
> = Props<M> & Omit<React.ComponentPropsWithRef<C>, keyof Props<M>>;

export type ComponentProps<M extends ComponentTypeMap> = Props<M> &
  Omit<React.ComponentPropsWithRef<M["defaultComponent"]>, keyof Props<M>>;

export interface Component<M extends ComponentTypeMap> {
  (props: ComponentProps<M>): JSX.Element;
}

export interface OverridableComponent<M extends ComponentTypeMap>
  extends Component<M> {
  <C extends React.ElementType>(
    props: { component: C } & OverridableComponentProps<M, C>
  ): JSX.Element;
}

export type TypographyVariant =
  | "b1"
  | "h1"
  | "h2"
  | "h3"
  | "p1"
  | "p2"
  | "p2b"
  | "p3"
  | "bA"
  | "bAA"
  | "bAAA";
export type TypographyVariants = {
  [key in TypographyVariant]: TypographyVariant;
};

export interface TypographyTypeMap<
  P = {},
  D extends React.ElementType = "span"
> {
  props: P & {
    component?: React.ElementType;
    isParagraph?: boolean;
    variant?: TypographyVariant;
  };
  defaultComponent: D;
}

export type TypographyProps<
  D extends React.ElementType = TypographyTypeMap["defaultComponent"],
  P = {}
> = OverridableComponentProps<TypographyTypeMap<P, D>, D>;
