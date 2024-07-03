import React from "react";
import Typography from "../Typography";
import { MenuProps } from "./types";
import DropDownMenu from "./DropDownMenu";
import Link from "../Link";
import { convertMenu } from "@utils/convertMenu";

const Menu = ({ options }: MenuProps) => {
  const convertedOptions = convertMenu(options);

  return convertedOptions.map((option, index) => {
    const { isParent, children, label, src } = option;

    if (isParent && children) {
      return <DropDownMenu key={index} options={children} text={label} />;
    }
    return (
      <Link key={index} src={src} variant="black" className="flex items-center">
        <Typography variant="p2">{label}</Typography>
      </Link>
    );
  });
};

export default Menu;
