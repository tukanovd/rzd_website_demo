import { FC, Fragment } from "react";
import c from "classnames";

import type { TextBlock as TextBlockType } from "@utils";
import { Layout, LayoutRow } from "../Layout";
import Typography from "../Typography";
import TextBlock from "./TextBlock";

const TextBlockTitled: FC<{ textBlocks: TextBlockType[] }> = ({
  textBlocks,
}) => {
  return (
    <Layout cols="12" spacingY="m">
      {textBlocks.map((block, index) => {
        const { text, type, title } = block;
        const isFirst = index === 0;
        const style = c({
          "pt-10": type === "header" && isFirst,
        });
        return (
          <Fragment key={index}>
            {title && (
              <LayoutRow colSpan="6">
                <Typography variant="h2">{title}</Typography>
              </LayoutRow>
            )}
            <LayoutRow colSpan={title ? "6" : "8"}>
              <TextBlock text={text} type={type} className={style} />
            </LayoutRow>
          </Fragment>
        );
      })}
    </Layout>
  );
};

export default TextBlockTitled;
