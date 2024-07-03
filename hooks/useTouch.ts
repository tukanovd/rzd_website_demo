import { MutableRefObject, useCallback, useEffect, useState } from "react";
import useEventListener from "./useEventListener";

export enum Direction {
  "top" = "top",
  "bottom" = "bottom",
  "left" = "left",
  "right" = "right",
}
export type DirectionType = keyof typeof Direction;

const useTouch = <TElement extends HTMLElement>(
  ref: MutableRefObject<TElement | null>,
  onTouch: (direction: DirectionType) => void
) => {
  const [startPoint, setStartPoint] = useState<Touch | null>(null);
  const [endPoint, setEndPoint] = useState<Touch | null>(null);
  const [direction, setDirection] = useState<DirectionType | null>(null);
  const target = ref?.current;

  const handleTouchStart = useCallback((e: TouchEvent) => {
    setStartPoint(e.touches[0]);
    setEndPoint(null);
  }, []);
  const handleTouchMove = useCallback((e: TouchEvent) => {
    setEndPoint(e.touches[0]);
  }, []);

  // @ts-ignore
  useEventListener("touchstart", handleTouchStart, target);
  // @ts-ignore
  useEventListener("touchmove", handleTouchMove, target);

  useEffect(() => {
    if (startPoint && endPoint) {
      const diffX = startPoint.clientX - endPoint.clientX;
      const diffY = startPoint.clientY - endPoint.clientY;

      let dir: DirectionType;
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          dir = Direction.left;
        } else {
          dir = Direction.right;
        }
      } else {
        if (diffY < 0) {
          dir = Direction.top;
        } else {
          dir = Direction.bottom;
        }
      }

      setDirection(dir);
    } else {
      setDirection(null);
    }
  }, [startPoint, endPoint]);

  useEffect(() => {
    if (direction) {
      onTouch(direction);
    }
  }, [direction, onTouch]);
};

export default useTouch;
