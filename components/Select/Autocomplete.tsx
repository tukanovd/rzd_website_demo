import StyledInput from "../Inputs/StyledInput";

export interface Autocomplete {
  value: string;
  onClick: () => void;
  onChange: (value: string) => void;
}

const Autocomplete = ({ value, onClick, onChange }: Autocomplete) => {
  return (
    <StyledInput
      inputStyle="w-width_medium"
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default Autocomplete;
