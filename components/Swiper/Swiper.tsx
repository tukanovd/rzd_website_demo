import { useCallback, useMemo, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { isMobile } from "react-device-detect";
import c from "classnames";
import Slide from "./Slide";
import { ArrowNext, ArrowPrev } from "./Arrow";
import SlidesWrapper from "./SlidesWrapper";
import useSlideTransition from "./useSlideTransition";

import { SwiperProps } from "./types";
import {
  DEFAULT_DURATION,
  MAX_SLIDES_PER_VIEW,
  MIN_SLIDES_PER_VIEW,
  SLIDES_GAP,
  SWITCH_SLIDE_DELAY,
} from "./constants";
import useTouch, { Direction, DirectionType } from "../../hooks/useTouch";
import { throttle } from "@utils";

// @ts-ignore
const addEvent = (node, done) =>
  node.addEventListener("transitionend", done, false);

const getSlidesPerView = (isStack: boolean, isMobile: boolean | undefined) => {
  if (isMobile) return MIN_SLIDES_PER_VIEW;

  return isStack ? MAX_SLIDES_PER_VIEW : MIN_SLIDES_PER_VIEW;
};

const Swiper = <ObjectType,>({
  slides,
  slideRenderer,
  duration = DEFAULT_DURATION,
  isStack = false,
}: SwiperProps<ObjectType>) => {
  const totalSlides = slides.length - 1;
  const [firstElement] = slides;

  const slidesPerView = getSlidesPerView(isStack, isMobile);

  const ref = useRef<HTMLDivElement>(null);
  const [visibleSlideId, setVisibleSlideId] = useState(firstElement.id);
  const [hasNext, setHasNext] = useState(totalSlides > 0);
  const [hasPrev, setHasPrev] = useState(false);

  const showPrevSlideThrottled = useMemo(() => {
    const showPrev = () => {
      setVisibleSlideId((currSlideId) => {
        const prevSlideIndex =
          slides.findIndex((slide) => slide.id === currSlideId) - 1;

        const prevSlide = slides[prevSlideIndex];
        if (!prevSlide) return currSlideId;

        const { id: prevSlideId } = prevSlide;
        const isFirstSlide = prevSlideIndex === 0;

        setHasPrev(!isFirstSlide);
        setHasNext(true);

        return prevSlideId;
      });
    };
    return throttle(showPrev, SWITCH_SLIDE_DELAY);
  }, [slides]);

  const showNextSlideThrottled = useMemo(() => {
    const showNext = () => {
      setVisibleSlideId((currSlideId) => {
        const nextSlideIndex =
          slides.findIndex((slide) => slide.id === currSlideId) + 1;

        const nextSlide = slides[nextSlideIndex];
        if (!nextSlide) return currSlideId;

        const { id: nextSlideId } = nextSlide;
        const hasNext = nextSlideIndex + slidesPerView - 1 !== totalSlides;

        setHasNext(hasNext);
        setHasPrev(true);

        return nextSlideId;
      });
    };

    return throttle(showNext, SWITCH_SLIDE_DELAY);
  }, [slides, totalSlides]);

  const showNextSlide = useCallback(
    () => showNextSlideThrottled(),
    [showNextSlideThrottled]
  );

  const showPrevSlide = useCallback(
    () => showPrevSlideThrottled(),
    [showPrevSlideThrottled]
  );

  const currentSlideIndex = useMemo(
    () => slides.findIndex((item) => item.id === visibleSlideId),
    [slides, visibleSlideId]
  );

  const [slideWidth, totalTransform] = useSlideTransition({
    slidesPerView,
    currentSlideIndex,
    parentRef: ref,
    isStack: isStack,
    slidesCount: totalSlides,
  });
  const handleTouch = useCallback(
    (direction: DirectionType) => {
      if (direction === Direction.right) {
        showNextSlide();
      } else if (direction === Direction.left) {
        showPrevSlide();
      }
    },
    [showNextSlide, showPrevSlide]
  );
  const gridStyle = c("relative block overflow-hidden grid grid-col-1");
  const slidesStyle = c("flex", { [SLIDES_GAP.class]: isStack });

  useTouch(ref, handleTouch);

  return (
    <div ref={ref} className={gridStyle}>
      {!isMobile && (
        <>
          <ArrowPrev
            clickHandler={showPrevSlide}
            hasPrev={hasPrev}
            isStack={isStack}
          />
          <ArrowNext
            clickHandler={showNextSlide}
            hasNext={hasNext}
            isStack={isStack}
          />
        </>
      )}
      <Transition timeout={duration} addEndListener={addEvent}>
        {(state: TransitionStatus) => (
          <SlidesWrapper
            state={state}
            duration={duration}
            transform={totalTransform}
            className={slidesStyle}
          >
            {slides.map((slide) => {
              return (
                <Slide key={slide.id} slideWidth={slideWidth}>
                  {slideRenderer(slide)}
                </Slide>
              );
            })}
          </SlidesWrapper>
        )}
      </Transition>
    </div>
  );
};

export default Swiper;
