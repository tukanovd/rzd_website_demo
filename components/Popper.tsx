import React, { useState } from "react";
import { usePopper } from "react-popper";
import { Transition } from "react-transition-group";
import { Placement } from "@popperjs/core/lib/enums";
import { Options } from "@popperjs/core/lib/modifiers/offset";
import { useEventListener } from "../hooks";

export interface PopperOptions {
  placement?: Placement;
  offset?: Options["offset"]; // [skidding, distance]
}

const Popper = (props: {
  delay: any;
  parentElement: any;
  onEnter?: () => void | undefined;
  onLeave?: () => void | undefined;
  startTransition: any;
  options?: PopperOptions | undefined;
  children: any;
}) => {
  const {
    delay,
    parentElement,
    onEnter,
    onLeave,
    startTransition,
    options = {
      placement: "top",
      offset: null,
    },
    children,
  } = props;

  const [tooltipElement, setTooltipElement] = useState(null);
  const defaultStyles = {
    transition: `opacity ${delay}ms ease-in-out`,
    visibility: "hidden",
  };

  const transitionStyles = {
    entering: { opacity: 1, visibility: "visible" },
    entered: { opacity: 1, visibility: "visible" },
    exiting: { opacity: 0, visibility: "visible" },
    exited: { opacity: 0, visibility: "hidden" },
  };

  const modifiers = [];

  if (options?.offset) {
    modifiers.push({
      name: "offset",
      options: {
        offset: options.offset,
      },
    });
  }

  const { styles, attributes } = usePopper(parentElement, tooltipElement, {
    placement: options?.placement,
    modifiers: modifiers,
  });

  const element = tooltipElement;
  // @ts-ignore
  useEventListener("mouseenter", onEnter, element);
  // @ts-ignore
  useEventListener("mouseleave", onLeave, element);

  return (
    <Transition in={startTransition} timeout={delay}>
      {(state: string | number) => (
        <div
          // @ts-ignore
          ref={setTooltipElement}
          className="z-50"
          style={{
            ...styles.popper,
            ...defaultStyles,
            // @ts-ignore
            ...transitionStyles[state],
          }}
          {...attributes.popper}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Popper;
