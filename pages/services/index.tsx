import { GetStaticProps } from "next";
import { getServices, OneOfServiceType } from "@model";
import { Services } from "@ui/Services";

type ServicesProps = {
  data: OneOfServiceType[];
};

const Stations = ({ data }: ServicesProps) => {
  return <Services services={data} />;
};

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const data = await getServices();
  return {
    props: { data },
  };
};

export default Stations;
