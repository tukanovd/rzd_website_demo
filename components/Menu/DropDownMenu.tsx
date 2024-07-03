import { DropDownMenuProps } from "./types";
import React, { useCallback, useState } from 'react'
import c from "classnames";

import Card from "../Card";
import ScrollBox from "../ScrollBox";
import MenuItem from "./MenuItem";
import TooltipContainer from "../TooltipContainer";
import Typography from "../Typography/Typography";
import { useElementSize, useOnClickOutside } from "../../hooks";
import { ChevronDown, ChevronUp } from "../Icons";

const DropDownMenu = ({ options, text }: DropDownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Chevron = isOpen ? ChevronUp : ChevronDown;

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = useCallback(() => {
	  setIsOpen((prev) => !prev)
  }, []);
  const ref = useOnClickOutside(closeMenu);
  const [setElementRef, elementSize] = useElementSize<HTMLSpanElement>();

  const onEnterParentHandler = useCallback((event: { key: string }) => {
	  if (event.key === 'Enter') {
		  setIsOpen(true);
	  }
  }, []);

  const onEnterChildHandler = useCallback((event: { key: string }, id: string) => {
	  if (event.key === 'Enter') {
		  setIsOpen(false);
	  } else if (event.key === 'Tab') {
		  if (options[options.length - 1].id === id) {
			  toggleMenu();
		  }
	  }
  }, []);


	const renderer = () => {
    return (
      <Card outline rounded={false}>
        <div
          className="min-w-120"
          style={{
            minWidth: elementSize.width < 170 ? 170 : elementSize.width,
          }}
        >
          <ScrollBox>
            {options.map((item, index) => (
              <MenuItem key={index} itemData={item} onEnterDown={onEnterChildHandler} />
            ))}
          </ScrollBox>
        </div>
      </Card>
    );
  };

  return (
    <TooltipContainer
      visible={isOpen}
      tooltipRenderer={renderer}
      options={{ placement: "bottom-start", offset: [0, 12] }}
    >
      <span
		tabIndex={0}
        // @ts-ignore
        ref={(elRef) => {
          ref.current = elRef;
          setElementRef(elRef);
        }}
        className={c(
          "flex cursor-pointer justify-between items-center color-primary-black"
        )}
        onClick={toggleMenu}
		onKeyDown={onEnterParentHandler}
      >
        <Typography variant="p2">{text}</Typography>
        <Chevron />
      </span>
    </TooltipContainer>
  );
};

export default DropDownMenu;
