import { GetStaticProps } from "next";
import {
  AdministrationPage as AdministrationPageType,
  getAdministrationData,
} from "@model";
import Administration from "@ui/Administration";
import { LayoutRow } from "@components";

export type AdministrationPageProps = {
  data: AdministrationPageType;
};

const AdministrationPage = ({ data }: AdministrationPageProps) => {
  return (
    <LayoutRow colSpan="full" className="md:pb-40 pb-36">
      <Administration {...data} />
    </LayoutRow>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const administrationData = await getAdministrationData();
  return {
    props: { data: administrationData },
  };
};

export default AdministrationPage;
