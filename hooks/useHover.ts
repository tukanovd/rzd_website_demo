import { useCallback, useState } from "react";
import useEventListener from "./useEventListener";

function useHover<T extends HTMLElement>(): [(ref: T) => void, boolean] {
  const [elementRef, setElementRef] = useState<T | null>(null);
  const setRef = useCallback((ref: T) => setElementRef(ref), []);
  const [value, setValue] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => setValue(true), []);
  const handleMouseLeave = useCallback(() => setValue(false), []);

  useEventListener("mouseenter", handleMouseEnter, elementRef);
  useEventListener("mouseleave", handleMouseLeave, elementRef);
  return [setRef, value];
}

export default useHover;
