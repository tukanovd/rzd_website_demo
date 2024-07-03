import { FC } from "react";
import { ContactGroups } from "@model";
import ContactBlock from "./ContactBlock";
import { Layout, LayoutRow } from "./Layout";
import Typography from "./Typography";

const ContactGroups: FC<{ contactGroups: ContactGroups[] }> = ({
  contactGroups,
}) => {
  return (
    <>
      {contactGroups.map((contactBlock, index) => {
        const { contacts } = contactBlock;
        return contacts.map((contact) => (
          <div key={index} className="flex justify-between">
            <Layout cols="4" className="gap-x-7">
              <LayoutRow colSpan="2">
                <Typography variant="p1" className="color-primary-black">
                  {contact.details}
                </Typography>
              </LayoutRow>
              <LayoutRow colSpan="1">
                <div className="flex flex-col gap-2">
                  <ContactBlock
                    {...contact}
                    withTitle
                    variant="p2"
                    textColor="black"
                  />
                </div>
              </LayoutRow>
            </Layout>
          </div>
        ));
      })}
    </>
  );
};

export default ContactGroups;
