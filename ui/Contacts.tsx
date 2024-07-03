import { Layout, LayoutRow, Typography, ContactBlock, Card } from "@components";
import { ColumnsSpanType } from "@components/Layout/types";
import { ContactGroups } from "@model";

type ContactsProps = {
  contacts?: ContactGroups[];
};

const Contacts = ({ contacts }: ContactsProps) => {
  return (
    <Layout cols="3" spacing="m">
      {contacts &&
        contacts.map((contact, index) => {
          const { contacts, title, sub_title } = contact;
          const blocksCount = contacts.length.toString() as ColumnsSpanType;

          return (
            <LayoutRow key={index} colSpan={blocksCount}>
              <Card fullSize>
                <div className="p-6 h-full">
                  <div className="flex flex-col gap-5 h-full">
                    <div className="flex flex-col gap-2">
                      <Typography variant="h2" className="color-primary-black">
                        {title}
                      </Typography>
                      <Typography variant="p1" className="color-secondary">
                        {sub_title}
                      </Typography>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between gap-10 md:items-end h-full">
                      {contacts &&
                        contacts.map((block, index) => {
                          const { type, link, text, sub_details, details } =
                            block;

                          return (
                            <div key={index} className="flex flex-col gap-1">
                              {text && (
                                <ContactBlock
                                  text={text}
                                  type={type}
                                  link={link}
                                />
                              )}
                              {details && (
                                <Typography
                                  variant="p1"
                                  className="color-primary-black"
                                >
                                  {details}
                                </Typography>
                              )}
                              {sub_details && (
                                <Typography
                                  variant="p3"
                                  className="color-secondary"
                                >
                                  {sub_details}
                                </Typography>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </Card>
            </LayoutRow>
          );
        })}
    </Layout>
  );
};

export default Contacts;
