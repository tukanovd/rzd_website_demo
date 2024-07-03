import { useEffect, useRef } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

function useEventListener<
  KD extends keyof DocumentEventMap,
  KH extends keyof HTMLElementEventMap,
  KW extends keyof WindowEventMap,
  T extends HTMLElement | void = void
>(
  eventType: KD | KH | KW | string,
  listener: (
    this: typeof element,
    evt:
      | TouchEvent
      | DocumentEventMap[KD]
      | HTMLElementEventMap[KH]
      | WindowEventMap[KW]
      | Event
  ) => void,
  element?: Document | HTMLElement | Window | null | undefined,
  options: AddEventListenerOptions = {}
): void {
  const listenerRef = useRef(listener);

  useIsomorphicLayoutEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  const { capture, once, passive } = options;

  useEffect(() => {
    const _element = element ?? window;

    if (!(_element && _element.addEventListener)) return;

    const wrappedListener: typeof listenerRef.current = (evt) =>
      listenerRef.current.call(_element, evt);

    const opts = { capture, once, passive };

    _element.addEventListener(eventType, wrappedListener, opts);

    return () => {
      _element.removeEventListener(eventType, wrappedListener, opts);
    };
  }, [element, eventType, capture, once, passive]);
}

export default useEventListener;
