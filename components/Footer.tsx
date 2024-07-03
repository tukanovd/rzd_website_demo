import { Layout, LayoutRow } from "./Layout";
import InlineSVG from "react-inlinesvg";
import Link from "./Link";
import { Typography } from "./Typography";
import { MenuItemData } from "./Menu/types";
import { convertMenu } from "@utils/convertMenu";
import { useTheme } from "@utils/themeSwitcher";

type SocialsType = { src: string; icon: string };

type FooterProps = {
  data: {
    mainLogo: string;
    rightsReserves: string;
    menu: MenuItemData[];
    contacts: { title: string; src: string; socials: SocialsType[] };
  };
};

const Footer = ({ data }: FooterProps) => {
  const { mainLogo, rightsReserves, menu, contacts } = data;
  const { theme } = useTheme();
  const convertedMenu = convertMenu(menu);
  const isMgn = theme !== "default";
  return (
    <Layout
      cols="12"
      mdCols="2"
      className="md:px-10 px-5 md:py-16 py-8 bg-color-secondary"
    >
      <LayoutRow colSpan="2" className="w-fit flex-col gap-6 md:flex hidden">
        <Link src="/">
          <InlineSVG src={isMgn ? mainLogo.replace(".", "Black.") : mainLogo} />
        </Link>
        <Typography variant="p3" className="color-primary-black">
          {rightsReserves}
        </Typography>
      </LayoutRow>
      <LayoutRow start="5" end="13">
        <Layout cols="8">
          {convertedMenu.map((item) => {
            const { isParent, children, label, src, id } = item;

            if (isParent) {
              return (
                <LayoutRow
                  key={id}
                  colSpan="2"
                  className="md:flex hidden flex-col gap-4 w-2/3"
                >
                  <Link src={src} variant="black">
                    <Typography variant="h3">{label}</Typography>
                  </Link>
                  <div className="flex flex-col gap-2">
                    {children &&
                      children.map((child) => {
                        const { label, src, id } = child;
                        return (
                          <Link key={id} src={src} variant="black">
                            <Typography variant="p1">{label}</Typography>
                          </Link>
                        );
                      })}
                  </div>
                </LayoutRow>
              );
            }
          })}

          <LayoutRow
            colSpan="2"
            className="flex flex-col md:items-end items-start gap-4"
          >
            <Link src={contacts.src} variant="black">
              <Typography variant="h3">{contacts.title}</Typography>
            </Link>
            <div className="flex gap-4 pr-3">
              {contacts.socials &&
                contacts.socials.map((social, index) => {
                  const { src, icon } = social;

                  return (
                    <Link src={src} key={index}>
                      <InlineSVG
                        src={isMgn ? icon.replace(".", "Black.") : icon}
                      />
                    </Link>
                  );
                })}
            </div>
          </LayoutRow>
        </Layout>
      </LayoutRow>
      <LayoutRow
        colSpan="full"
        className="w-fit flex-col gap-6 md:hidden flex pt-14"
      >
        <Typography variant="p3" className="color-primary-black">
          {rightsReserves}
        </Typography>
      </LayoutRow>
    </Layout>
  );
};

export default Footer;
