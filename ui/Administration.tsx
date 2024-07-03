import { Layout, LayoutRow, Typography, ThemedImage } from "@components";
import { AdministrationPage } from "@model";

const Administration = ({ managers, title }: AdministrationPage) => {
  return (
    <Layout cols="12" mdCols="1" spacingX="m" spacingY="sm">
      <LayoutRow colSpan="full" className="pb-5">
        <Typography variant="h1" className="color-primary-black">
          {title}
        </Typography>
      </LayoutRow>
      {managers &&
        managers.map((person) => {
          const { first_name, last_name, patronymic, id, position, photo } =
            person;
          const { name: positionName } = position;
          const link = photo?.link;
          const fullName = `${first_name} ${patronymic} ${last_name}`;

          return (
            <LayoutRow key={id} colSpan="4">
              <div className="flex flex-col gap-5">
                {link && <ThemedImage src={link} alt={fullName} />}
                <div className="flex flex-col gap-1">
                  <Typography variant="h2" className="color-primary-black">
                    {fullName}
                  </Typography>
                  <Typography variant="p1" className="color-secondary">
                    {positionName}
                  </Typography>
                </div>
              </div>
            </LayoutRow>
          );
        })}
    </Layout>
  );
};

export default Administration;
