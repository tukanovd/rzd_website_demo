import Autocomplete from "./Autocomplete";
import DropDown from "./DropDown";
import Selector, { Selector as SelectorType } from "./Selector";

export enum SelectVariants {
  "autocomplete" = "autocomplete",
  "dropdown" = "dropdown",
}
interface SelectVariantsType {
  variant?: SelectVariants.autocomplete | SelectVariants.dropdown;
}

interface SelectAutocomplete
  extends Omit<SelectorType, "Component">,
    Omit<SelectVariantsType, "Component"> {}

type Select = SelectAutocomplete;

const Select = ({ variant = SelectVariants.dropdown, ...props }: Select) => {
  const Component =
    variant === SelectVariants.dropdown ? DropDown : Autocomplete;

  return (
    <Selector
      {...props}
      // @ts-ignore
      Component={Component}
      closeOnClick={variant === SelectVariants.dropdown}
    />
  );
};

export default Select;
