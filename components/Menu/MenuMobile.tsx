import React, { useCallback, useMemo, useState } from "react";
import InlineSVG from "react-inlinesvg";
import c from "classnames";
import { convertMenu } from "@utils/convertMenu";
import TooltipContainer from "../TooltipContainer";
import Card from "../Card";
import MenuItem from "./MenuItem";
import Spoiler from "../Spoiler";
import { useOnClickOutside } from "../../hooks";
import { MenuItemId, MenuProps } from "./types";

const MenuMobile = ({ options, footerRenderer }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openedMenuItems, setOpenedMenuItems] = useState<MenuItemId[]>([]);

  const convertedOptions = useMemo(() => convertMenu(options), [options]);

  const hideMenu = useCallback(() => setIsOpen(false), []);
  const toggleOpen = useCallback(
    () => setIsOpen((prevIsOpen) => !prevIsOpen),
    []
  );

  const toggleOpenMenuItem = useCallback(
    (id: MenuItemId) =>
      setOpenedMenuItems((prevMenuIds) => {
        const [menuItem] = prevMenuIds.filter((menuId) => id === menuId);
        if (menuItem) {
          return prevMenuIds.filter((menuId) => id !== menuId);
        }
        return [...prevMenuIds, id];
      }),
    []
  );

  const tooltipRenderer = useCallback(() => {
    return (
      <Card outline>
        <div className="w-80">
          {convertedOptions.map((option) => {
            const { isParent, children, label, id } = option;

            if (isParent && children) {
              const isMenuOpen = openedMenuItems.includes(id);
              const headerStyle = c("px-2.5 pt-4 pb-4", { "pb-1": isMenuOpen });
              return (
                <Spoiler
                  key={id}
                  onClick={() => toggleOpenMenuItem(id)}
                  isOpen={isMenuOpen}
                  header={label}
                  headerStyle={headerStyle}
                  className="px-0 py-0"
                  size="l"
                >
                  {children.map((child) => (
                    <MenuItem
                      key={child.id}
                      itemData={child}
                      typographyVariant="h3"
                      onClick={toggleOpen}
                    />
                  ))}
                </Spoiler>
              );
            }
            return (
              <MenuItem
                key={id}
                itemData={option}
                typographyVariant="h3"
                onClick={toggleOpen}
              />
            );
          })}
          {footerRenderer && footerRenderer()}
        </div>
      </Card>
    );
  }, [convertedOptions, footerRenderer, openedMenuItems, toggleOpenMenuItem]);

  const ref = useOnClickOutside<HTMLDivElement>(hideMenu);
  return (
    <TooltipContainer
      options={{ placement: "bottom-end", offset: [12, 35] }}
      visible={isOpen}
      tooltipRenderer={tooltipRenderer}
      ref={ref}
    >
      <span
        className="flex items-center cursor-pointer mr-1"
        onClick={toggleOpen}
      >
        <InlineSVG src="/assets/burger.svg" />
      </span>
    </TooltipContainer>
  );
};

export default MenuMobile;
