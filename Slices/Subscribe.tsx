import { SubscribeSliceType } from "@model";
import { Layout, LayoutRow } from "@components/Layout";
import { Typography } from "@components/Typography";
import { Input } from "@components/Inputs";
import { Button } from "@components";

const SubscribeSlice = ({ title, text, subtitle }: SubscribeSliceType) => {
  return (
    <Layout
      cols="2"
      className="bg-color-secondary gap-x-16 md:py-18 md:px-30 p-5"
    >
      <LayoutRow className="flex flex-col gap-6">
        {title && (
          <Typography variant="b1" className="color-primary-black">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="p1" className="color-primary-black">
            {subtitle}
          </Typography>
        )}
      </LayoutRow>
      <LayoutRow className="flex flex-col gap-4">
        <Input underline={true} type="text" placeholder="E-mail" />
        <Typography variant="p2" className="color-primary-black">
          {text}
        </Typography>
        <Button>Подписаться</Button>
      </LayoutRow>
    </Layout>
  );
};

export default SubscribeSlice;
