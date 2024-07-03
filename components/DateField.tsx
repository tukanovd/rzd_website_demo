import { Typography } from "./Typography";

const parseDate = (input: string): string => {
  const date = new Date(input);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}.${month}.${year}`;
};

const DateField = ({ date }: { date: string }) => {
  const parsedDate = parseDate(date);
  return (
    <Typography variant="p3" className="color-secondary">
      {parsedDate}
    </Typography>
  );
};

export default DateField;
