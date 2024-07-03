import Directorates from "@ui/Directorates/Directorates";
import { GetStaticProps } from "next";
import { Directorate, getDirectorates } from "@model";
import { LayoutRow } from "@components/Layout";

const DirectoratesPage = ({
  directorates,
}: {
  directorates: Directorate[];
}) => {
  return (
    <LayoutRow colSpan="full" className="md:pb-40 pb-36">
      <Directorates
        directorates={directorates}
        title="Структурные подразделения"
      />
    </LayoutRow>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const directorates = await getDirectorates();
  return {
    props: { directorates },
  };
};

export default DirectoratesPage;
