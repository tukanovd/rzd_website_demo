import { Layout, LayoutRow } from "@components/Layout";
import { Typography } from "@components/Typography";
import { Directorate } from "@model";
import Person from "@components/Person";
import ContactBlock from "@components/ContactBlock";

const Directorates = ({ info }: Directorate) => {
  const { name, contact_groups, managers } = info;

  return (
    <Layout cols="12" mdCols="1" spacingX="m" spacingY="sm">
      <LayoutRow colSpan="full" className="pb-5">
        {name && (
          <Typography variant="h1" className="color-primary-black">
            {name}
          </Typography>
        )}
      </LayoutRow>
      <LayoutRow colSpan="full" className="pb-2">
        <Typography variant="h2" className="color-primary-black">
          Руководители
        </Typography>
      </LayoutRow>
      {managers &&
        managers.map((manager) => {
          const { id } = manager;

          return (
            <LayoutRow key={id} colSpan="4">
              <Person {...manager} />
            </LayoutRow>
          );
        })}
      <LayoutRow colSpan="full" className="pt-5 pb-2">
        <Typography variant="h2" className="color-primary-black">
          Контакты
        </Typography>
      </LayoutRow>
      {contact_groups &&
        contact_groups.map((contactGroup, index) => {
          const { contacts } = contactGroup;
          const [contact] = contacts;
          return (
            <LayoutRow key={index} colSpan="full">
              <ContactBlock {...contact} variant="p1" withTitle />
            </LayoutRow>
          );
        })}
    </Layout>
  );
};

export default Directorates;
