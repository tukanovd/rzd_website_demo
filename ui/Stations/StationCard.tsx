import {
  Card,
  Layout,
  LayoutRow,
  ThemedBGImage,
  Typography,
  Link,
} from "@components";
import Divider from "@components/Divider";
import { ArrowRight } from "@components/Icons";
import { ContactGroups } from "@model";
import { StationType } from "@model/stations";
import { PAGES_CONFIG } from "@utils";
import { useTheme } from "@utils/themeSwitcher";

const filterAddressContacts = (contactGroups: ContactGroups[]): string[] => {
  const addressContacts: string[] = [];

  contactGroups.forEach((group) => {
    group.contacts.forEach((contact) => {
      if (contact.type === "address") {
        addressContacts.push(contact.text);
      }
    });
  });

  return addressContacts;
};

const StationCard = ({ station }: { station: StationType }) => {
  const { info, slug } = station;
  const { name, contact_groups, attachments } = info;
  const [address] = filterAddressContacts(contact_groups);
  const [prevImg] = attachments;
  const { link } = prevImg;
  const { theme } = useTheme();

  return (
    <Card className="w-full">
      <Link
        src={`${PAGES_CONFIG.stations.url}/${slug}`}
        variant="black"
        className="flex w-full h-full gap-x-5 md:py-8 md:px-4 px-0"
      >
        <Layout cols="3" mdCols="1">
          <LayoutRow
            colSpan="2"
            mdColSpan="full"
            className="flex gap-3 md:px-0 px-2"
          >
            {theme === "default" && (
              <ThemedBGImage
                src={link}
                className="shrink-0"
                width={128}
                height={128}
              />
            )}
            <div className="flex flex-col gap-4">
              <Typography variant="h2">{name}</Typography>
              {address && (
                <Typography variant="p1" className="color-secondary">
                  {address}
                </Typography>
              )}
            </div>
          </LayoutRow>
          <LayoutRow colSpan="1" mdColSpan="full">
            <div className="flex md:flex-row flex-col items-end justify-end h-full ml-auto md:mr-3">
              <div className="md:flex hidden h-full py-10 mr-7">
                <Divider isVertical={true} />
              </div>
              <div className="md:hidden w-full flex pt-2">
                <Divider />
              </div>
              <div className="flex items-center mr-4 py-2 md:py-0 md:mr-0 h-full">
                <ArrowRight />
              </div>
            </div>
          </LayoutRow>
        </Layout>
      </Link>
    </Card>
  );
};

export default StationCard;
