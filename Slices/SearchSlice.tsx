import { Typography } from "@components/Typography";
import SearchField from "@components/Inputs/SearchField";

type SearchSliceProps = SearchField & {
  title?: string;
};

const SearchSlice = ({
  title,
  placeholder = "Поиск",
  ...props
}: SearchSliceProps) => {
  return (
    <div className="flex flex-col gap-6">
      {title && (
        <Typography variant="h1" className="color-primary-black">
          {title}
        </Typography>
      )}
      <SearchField placeholder={placeholder} size="m" {...props} />
    </div>
  );
};

export default SearchSlice;
