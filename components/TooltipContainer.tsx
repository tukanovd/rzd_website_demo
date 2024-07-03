import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  MutableRefObject,
} from "react";
import Popper from "./Popper";
import { PopperOptions } from "./Popper";
import { useEventListener } from "../hooks";
import refForwarder from "./RefForwared";

interface TooltipContainer {
  visible?: boolean | null;
  forwardedRef?: MutableRefObject<HTMLDivElement | null>;
  children: JSX.Element | ((arg0: any) => JSX.Element);
  tooltipRenderer: () => JSX.Element;
  options?: PopperOptions;
  delay?: number;
}

const TooltipContainer = ({
  visible = null,
  forwardedRef,
  children,
  tooltipRenderer,
  options,
  delay = 250,
}: TooltipContainer) => {
  const refElement = useRef<HTMLDivElement | null>(null);
  const isOverPopper = useRef(false);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [isShowTooltip, setIsShowTooltip] = useState(!!visible);
  const isControlled = visible !== null;

  const showTooltip = useCallback(() => {
    setIsShowTooltip(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setTimeout(() => {
      if (isOverPopper.current && !isControlled) {
        hideTooltip();
        return;
      }

      setIsShowTooltip(false);
    }, delay);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isControlled) {
      showTooltip();
    }
  }, [isControlled]);

  const handleMouseLeaves = useCallback(() => {
    if (!isControlled) {
      hideTooltip();
    }
  }, [isControlled]);

  const setIsEnterPopper = () => {
    isOverPopper.current = true;
  };
  const setIsLeavePopper = () => {
    isOverPopper.current = false;
  };

  useEffect(() => {
    const element = refElement.current;
    if (element) {
      setPopperElement(element);
    }
  }, [setPopperElement]);

  useEffect(() => {
    if (visible) showTooltip();
    else {
      hideTooltip();
    }
  }, [visible, showTooltip, hideTooltip]);

  useEventListener("mouseenter", handleMouseEnter, popperElement);
  useEventListener("mouseleave", handleMouseLeaves, popperElement);

  const renderTooltip = (startTransition = true) => {
    if (!tooltipRenderer || typeof tooltipRenderer !== "function") return null;

    return (
      <Popper
        parentElement={popperElement}
        options={options}
        delay={delay}
        startTransition={startTransition}
        onEnter={setIsEnterPopper}
        onLeave={setIsLeavePopper}
      >
        {tooltipRenderer()}
      </Popper>
    );
  };

  if (typeof children === "function") {
    return (
      <>
        {children(refElement)}
        {renderTooltip(isShowTooltip)}
      </>
    );
  }

  return (
    <div
      ref={(ref) => {
        if (refElement) refElement.current = ref;
        if (forwardedRef) forwardedRef.current = ref;
      }}
    >
      {children}
      {renderTooltip(isShowTooltip)}
    </div>
  );
};

export default refForwarder(TooltipContainer);
