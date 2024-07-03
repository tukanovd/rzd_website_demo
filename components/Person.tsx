import { Typography } from "./Typography";

export type Person = {
  id: string;
  first_name: string;
  patronymic?: string;
  last_name: string;
  position: {
    name: string;
    id: string;
  };
};

const Person = ({ last_name, first_name, patronymic, position }: Person) => {
  const { name: positionName } = position;

  return (
    <div className="flex flex-col gap-2">
      <Typography variant="h2" className="color-primary-black">
        {first_name} {patronymic} {last_name}
      </Typography>
      <Typography variant="p1" className="color-secondary">
        {positionName}
      </Typography>
    </div>
  );
};

export default Person;
