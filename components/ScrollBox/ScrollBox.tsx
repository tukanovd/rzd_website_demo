import * as React from "react";
import c from "classnames";

import SimpleBar, { Props } from "simplebar-react";

interface ScrollBox extends Props {
  children: React.ReactNode;
  className?: string;
  isExpanded?: boolean;
  isReadOnly?: boolean;
}

const ScrollBox = (props: ScrollBox) => {
  const { children, className, isExpanded, isReadOnly, onClick, ...other } =
    props;

  return (
    <SimpleBar
      className={c(
        "align-start w-full min-w-0 flex flex-col flex-wrap items-center justify-start relative",
        className
      )}
      {...other}
    >
      {children}
    </SimpleBar>
  );
};

export default ScrollBox;
