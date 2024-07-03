import { SlideWrapperProps } from "./types";

const SlidesWrapper = ({
  children,
  duration,
  state,
  transform,
  className = "",
}: SlideWrapperProps) => {
  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
  };

  const transitionStyles = {
    entering: { transform: `translateX(${transform}px)` },
    entered: { transform: `translateX(-${transform}px)` },
    exiting: { transform: `translateX(-${transform}px)` },
    exited: { transform: `translateX(-${transform}px)` },
  };

  return (
    <div
      className={className}
      style={{
        ...defaultStyle,
        // @ts-ignore
        ...transitionStyles[state],
      }}
    >
      {children}
    </div>
  );
};

export default SlidesWrapper;
