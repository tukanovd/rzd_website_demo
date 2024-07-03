import { useCallback, useEffect } from "react";
import c from "classnames";
import Typography from "../Typography";
import { useHover } from "../../hooks";
import { Item } from "@utils";

interface Option {
  item: Item;
  tabIndex: number;
  onClick?: (item: Item) => void;
  onHover?: (item: Item) => void;
  isSelected?: boolean;
}

const Option = ({ item, tabIndex, onClick, onHover, isSelected }: Option) => {
  const { label } = item;
  const handleClick = useCallback(() => {
    onClick && onClick(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id, item.label]);

  const [ref, isHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    if (isHovered && onHover) onHover(item);
  }, [isHovered, item, onHover]);
  const styles = c("min-w-120 px-3 py-1.5 my-2.5", {
    "bg-color-common": isHovered,
    "bg-color-secondary": isSelected,
  });

  return (
    <div tabIndex={tabIndex} ref={ref} className={styles} onClick={handleClick}>
      <Typography variant="p2">{label}</Typography>
    </div>
  );
};

export default Option;
