import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  DEFAULT_SLIDE_WIDTH,
  SLIDES_GAP,
  SLIDES_NO_GAP,
  SLIDE_WIDTH_MULTIPLIER_DESKTOP,
  SLIDE_WIDTH_MULTIPLIER_MOBILE,
  TRANSFORM_MULTIPLIER_MOBILE,
  TRANSFORM_MULTIPLIER_DESKTOP,
} from "./constants";
import { UseTransformProps, UseTransformReturns } from "./types";

const useSlideTransition: (props: UseTransformProps) => UseTransformReturns = ({
  parentRef,
  slidesPerView,
  currentSlideIndex,
  isStack,
  slidesCount,
}) => {
  const slideGap = isStack ? SLIDES_GAP.px : SLIDES_NO_GAP.px;
  const gapsCount = slidesPerView - 1;
  const totalSlidesGap = slideGap * gapsCount;
  const [slideWidth, setSlideWidth] = useState(DEFAULT_SLIDE_WIDTH);

  useEffect(() => {
    if (parentRef.current) {
      const { offsetWidth } = parentRef.current;
      let multiplier = SLIDE_WIDTH_MULTIPLIER_DESKTOP;
      if (isMobile && isStack) {
        multiplier = SLIDE_WIDTH_MULTIPLIER_MOBILE;
      }

      setSlideWidth(
        ((offsetWidth - totalSlidesGap) / slidesPerView) * multiplier
      );
    }
  });

  const isLastElement = currentSlideIndex === slidesCount;
  let multiplier = TRANSFORM_MULTIPLIER_DESKTOP;

  if (isMobile && isStack && isLastElement) {
    multiplier = TRANSFORM_MULTIPLIER_MOBILE;
  }

  const totalTransform =
    (currentSlideIndex * slideWidth + slideGap * currentSlideIndex) *
    multiplier;

  return [slideWidth, totalTransform];
};

export default useSlideTransition;
