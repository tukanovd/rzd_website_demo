import { LayoutRow, Card, Layout, Typography, Link } from "@components";
import Divider from "@components/Divider";
import { ArrowRight } from "@components/Icons";
import { data } from "@utils";
import React from "react";

type SwiperMgnT = {
  sliceName: string;
  slides: typeof data;
};

export const SwiperMgn = (props: SwiperMgnT) => {
  const { sliceName, slides } = props;

  return (
    <LayoutRow key={sliceName} colSpan="full" className="py-5">
      <div className="flex flex-col gap-4 w-full">
        {slides.map((slideItem, index) => (
          <Card key={index} className="w-full">
            <Link
              src={slideItem.buttonLink}
              variant="black"
              className="flex w-full h-full gap-x-5 md:py-8 md:px-4 px-0"
            >
              <Layout cols="3" mdCols="1">
                <LayoutRow
                  colSpan="2"
                  mdColSpan="full"
                  className="flex gap-3 md:px-0 px-2"
                >
                  <div className="flex flex-col gap-4">
                    <Typography variant="h2">{slideItem.title}</Typography>
                    {Boolean(slideItem.label) && (
                      <Typography variant="p1" className="color-secondary">
                        {slideItem.label}
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
        ))}
      </div>
    </LayoutRow>
  );
};
