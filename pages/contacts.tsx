import { GetStaticProps } from "next";
import Contacts from "@ui/Contacts";
import { getContacts } from "@model";
import type { ContactPageType } from "@model";
import { LayoutRow, Typography } from "@components";

type ContactsPageProps = {
  pageDetails: ContactPageType;
};

const ContactsPage = ({ pageDetails }: ContactsPageProps) => {
  const { title, contacts } = pageDetails;
  return (
    <LayoutRow colSpan="full" className="pb-40">
      <Typography variant="h1" className="pb-10 color-primary-black">
        {title}
      </Typography>
      <Contacts contacts={contacts} />
    </LayoutRow>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pageDetails = await getContacts();
  return {
    props: { pageDetails },
  };
};

export default ContactsPage;
