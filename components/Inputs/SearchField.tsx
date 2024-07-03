import { useCallback, useEffect, useState } from "react";
import c from "classnames";
import BaseInput, { BaseInput as BaseInputType } from "./BaseInput";
import { Button } from "../ButtonBase";
import { Size } from "@utils";
import { getStyles } from "./utils";
import { Cross, Loupe } from "../Icons";

interface SearchField
  extends Omit<
    BaseInputType,
    "inputStyle" | "subtitle" | "subtitleStyle" | "underline"
  > {
  onSearchFind?: () => void;
}

const defaultStyles = "px-4 py-1";

const SearchField = ({
  onChange,
  onSearchFind,
  value,
  ...props
}: SearchField) => {
  const [searchValue, setSearchValue] = useState(value);

  useEffect(() => {
    if (value) setSearchValue(value);
  }, [value]);

  const handleChange = useCallback(
    (value: string) => {
      setSearchValue(value);
      onChange && onChange(value);
    },
    [onChange]
  );
  const clearSearchField = useCallback(() => {
	  setSearchValue("");
	  onChange && onChange("");
  }, []);

  const clearIsShown = !!searchValue?.length;
  const style = c("flex", getStyles({}));

  return (
    <div className={style}>
      <div className={c("flex items-center h-full w-full", defaultStyles)}>
        {!clearIsShown && (
          <span className="pr-2 flex">
            <Loupe height={24} width={24} />
          </span>
        )}
        <span className="w-full">
          <BaseInput
            {...props}
            onChange={handleChange}
            value={searchValue}
            inputStyle="outline-0 w-full px-0"
            size={Size.s}
            placeholder="Поиск"
          />
        </span>
      </div>
      {clearIsShown && (
        <div className="flex items-center">
          <span className="flex pr-2 cursor-pointer" onClick={clearSearchField}>
            <Cross />
          </span>
          <Button variant="text" classNames="h-full" onClick={onSearchFind}>
            Найти
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchField;
