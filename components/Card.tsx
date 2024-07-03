import { MutableRefObject, ReactNode } from "react";
import c from "classnames";
import refForwarder from "./RefForwared";

type CardProps = {
  forwardedRef?: MutableRefObject<HTMLDivElement | null>;
  rounded?: boolean;
  outline?: boolean;
  children: ReactNode;
  fullSize?: boolean;
  className?: string;
};

const Card = ({
  forwardedRef,
  rounded = true,
  outline,
  children,
  fullSize,
  className,
}: CardProps) => {
  return (
    <div
      ref={(ref) => {
        if (forwardedRef) forwardedRef.current = ref;
      }}
      className={c(
        "bg-color-primary-white border-blind-width_base border-custom-transparent shadow-default",
        className,
        { "border-width_base border-common": outline },
        { "rounded-border-radius_medium": rounded },
        { "w-full h-full": fullSize }
      )}
    >
      {children}
    </div>
  );
};

export default refForwarder<HTMLDivElement, CardProps>(Card);
