import { ReactNode, RefObject } from "react";
import { TransitionStatus } from "react-transition-group";

export type TransitionType = "entering" | "entered" | "exiting" | "exited";

type ArrowProps = {
  clickHandler: () => void;
  isStack?: boolean;
};
export type ArrowPrevProps = ArrowProps & {
  hasPrev: boolean;
};
export type ArrowNextProps = ArrowProps & {
  hasNext: boolean;
};
export type SlideDataProps<T> = T & {
  id: string | number;
};
export type SwiperProps<T> = {
  slides: SlideDataProps<T>[];
  slideRenderer: (slide: SlideDataProps<T>) => JSX.Element;
  duration?: number;
  isStack?: boolean;
};
export type Slide = {
  children: ReactNode;
  slideWidth: number | string;
};

export type SlideWrapperProps = {
  children: ReactNode;
  state: TransitionStatus;
  className: string;
  transform: number;
  duration: number;
};

export type UseTransformProps = {
  parentRef: RefObject<HTMLElement>;
  slidesPerView: number;
  currentSlideIndex: number;
  isStack: boolean;
  slidesCount: number;
};
export type UseTransformReturns = [slideWidth: number, totalTransform: number];
