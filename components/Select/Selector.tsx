import React, { useCallback, useState } from "react";
import TooltipContainer from "../TooltipContainer";
import ScrollBox from "../ScrollBox/ScrollBox";
import Card from "../Card";
import { Option } from "../ScrollBox";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { Item } from "@utils";
import { Autocomplete } from "./Autocomplete";
import { DropDown } from "./DropDown";

export interface Selector {
  options: Item[];
  selectedItem?: Item;
  closeOnClick?: boolean;
  onSelect: (item: Item) => void;
  onChange?: (value: string) => void;
  Component: React.ComponentType<Autocomplete | DropDown>;
}

const Selector = ({
  options,
  selectedItem,
  onSelect,
  onChange,
  closeOnClick = false,
  Component,
}: Selector) => {
  const [val, setVal] = useState("");
  const [tooltipIsShown, setTooltipIsShown] = useState(false);

  const handleChange = useCallback(
    (value: string) => {
      setVal(value);
      setTooltipIsShown(!!value);
      onChange && onChange(value);
    },
    [onChange]
  );
  const closeTooltip = useCallback(() => {
    setTooltipIsShown(false);
  }, []);

  const handleSelect = useCallback(
    (item: Item) => {
      setVal(item.label);
      onSelect(item);
      closeTooltip();
    },
    [onSelect, closeTooltip]
  );

  const handleInputClick = useCallback(() => {
    if (closeOnClick) {
      setTooltipIsShown((prev) => !prev);
    } else {
      setTooltipIsShown(true);
    }
  }, [closeOnClick]);

  const ref = useOnClickOutside(closeTooltip);

  const renderer = () => {
    return (
      <Card outline>
        <div className="min-w-120">
          <ScrollBox className="min-w-120 px-2.5">
            {options.map((item, index) => (
              <Option
                key={item.id}
                tabIndex={index}
                item={item}
                isSelected={item.id === selectedItem?.id}
                onClick={handleSelect}
              />
            ))}
          </ScrollBox>
        </div>
      </Card>
    );
  };

  return (
    // @ts-ignore
    <div ref={ref}>
      <TooltipContainer
        visible={tooltipIsShown}
        tooltipRenderer={renderer}
        options={{ placement: "bottom-start" }}
      >
        <Component
          value={val}
          onChange={handleChange}
          onClick={handleInputClick}
          isOpen={tooltipIsShown}
        />
      </TooltipContainer>
    </div>
  );
};

export default Selector;
