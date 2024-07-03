import { FC, Fragment, ReactElement } from "react";
import Link from "./Link";
import Card from "./Card";
import Divider from "./Divider";
import { ArrowRight } from "./Icons";
import { Layout, LayoutRow } from "./Layout";

const CardLinkBox: FC<{ link?: string; children: ReactElement }> = ({
  link = "",
  children,
}) => {
  const LinkComponent = link ? Link : Fragment;
  return (
    <Card>
      <LinkComponent
        src={link}
        variant="black"
        className="flex w-full h-full gap-x-5 md:py-8 md:px-4 px-0"
      >
        <Layout cols="3" mdCols="1">
          <LayoutRow
            colSpan="2"
            mdColSpan="full"
            className="flex gap-3 md:px-0 px-2"
          >
            {children}
          </LayoutRow>

          <LayoutRow colSpan="1" mdColSpan="full">
            <div className="flex md:flex-row flex-col items-end justify-end h-full ml-auto md:mr-3">
              <div className="md:flex hidden h-full mr-7">
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
      </LinkComponent>
    </Card>
  );
};

export default CardLinkBox;
