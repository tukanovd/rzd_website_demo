import { useCallback } from "react";
import c from "classnames";
import { Typography } from "../Typography";
import { useTabContext } from "./Context";
import { Size } from "@utils";
import { getTabSize, getTabStyle, getTextSize } from "./utils";
import { TabProps, TabVariant } from "./types";

const Tab = ({
  size = Size.l,
  variant = TabVariant.underline,
  text,
  id = 1,
  children,
}: TabProps) => {
  const { selectedTab, selectTab } = useTabContext();
  const isSelected = selectedTab === id;
  const handleSelectTab = useCallback(() => selectTab(id), [id, selectTab]);
  const handleEnterTab = useCallback(
    (event: { key: string }) => {
      if (event.key === "Enter") selectTab(id);
    },
    [id, selectTab]
  );
  const textSize = getTextSize(size);
  const tabSize = getTabSize(size);
  const tabStyle = getTabStyle(variant, isSelected);

  if (!children) return null;
  return (
    <>
      <div className={c("flex w-max shrink-0 grow-0 px-5 py-3", tabStyle)}>
        <span
          onClick={handleSelectTab}
          onKeyDown={handleEnterTab}
          tabIndex={id}
        >
          <Typography
            variant={textSize}
            className={c("cursor-pointer color-secondary", tabSize, {
              "color-primary-black": isSelected,
            })}
          >
            {text}
          </Typography>
        </span>
      </div>
      {isSelected && (
        <div className="flex w-full shrink-0 grow-0 order-1">{children}</div>
      )}
    </>
  );
};

export default Tab;
