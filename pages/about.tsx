import { GetStaticProps } from "next";
import About from "@ui/About";
import { AboutDataType, getAboutData } from "@model/getAboutData";

const AboutPage = (props: AboutDataType) => {
  return <About {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAboutData();
  return {
    props: { ...data },
  };
};

export default AboutPage;
