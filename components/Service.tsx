import React from "react";
import { ThemedBGImage } from "./Image";
import { Typography } from "./Typography";

type ServiceT = {
  title: string;
  subTitle: string;
  description: string | null;
  imgLink: string;
  isExtended: boolean;
  index: number;
  toggleDescription: (index: number | null) => void;
};

const Service = ({
  title,
  subTitle,
  index,
  description,
  isExtended,
  imgLink = "/assets/success.svg",
  toggleDescription,
}: ServiceT) => {
  const toggleDescriptionHandler = () => {
    toggleDescription(index);
  };

  return (
    <div
      className="flex w-full"
      key={title + subTitle}
      onClick={toggleDescriptionHandler}
    >
      <div className="mr-4">
        <ThemedBGImage
          src={imgLink}
          className="shrink-0"
          width={48}
          height={48}
        />
      </div>
      <div>
        <div>
          <Typography variant="p2" className="color-primary-black">
            {title}
          </Typography>
        </div>
        <div>
          <Typography variant="p2" className="text-gray-500">
            {subTitle}
          </Typography>
        </div>
        {isExtended && description && (
          <div className={"mt-2"}>
            <Typography variant="p2" className="text-gray-500 mt-1.5">
              {description}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
