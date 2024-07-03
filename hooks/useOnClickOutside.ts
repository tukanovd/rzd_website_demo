import { useRef } from "react";
import useEventListener from "./useEventListener";

const outsideClickIgnoreClass = ".ignore-react-onclickoutside";

const getIgnoreSelector = (selector: string | null) => {
  if (!selector) return outsideClickIgnoreClass;

  return [outsideClickIgnoreClass, selector].join(",");
};

type clickOutsideHandler = (event: Event) => void;

const useOnClickOutside = <T extends HTMLElement>(
  handler: clickOutsideHandler,
  { ignoreCSSSelector = null } = {}
) => {
  const rootNodeRef = useRef<T | null>(null);
  const ignoreSelector = getIgnoreSelector(ignoreCSSSelector);

  const listener = (event: Event) => {
    const targetNode = event.target as HTMLElement;
    if (
      rootNodeRef.current?.contains(targetNode) ||
      targetNode.closest(ignoreSelector)
    )
      return;

    handler(event);
  };

  useEventListener("mousedown", listener);
  useEventListener("touchstart", listener);

  return rootNodeRef;
};

export default useOnClickOutside;
