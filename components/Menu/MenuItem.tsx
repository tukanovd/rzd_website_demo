import React from "react";
import Typography from "../Typography/Typography";
import Divider from "../Divider";
import Link from "../Link";
import { MenuItemProps } from "./types";

const MenuItem = ({ itemData, typographyVariant = "p2", onClick, onEnterDown }: MenuItemProps) => {
  const { label, id, src = "" } = itemData;

  const enterClickHandler = (event: any) => {
	  if (onEnterDown) {
		  onEnterDown(event, id)
	  }
  }

  return (
    <>
      <div className="px-2.5 py-4 w-full" onClick={onClick} onKeyDown={enterClickHandler}>
        <Link src={src} variant="black">
          <Typography variant={typographyVariant} key={id}>
            {label}
          </Typography>
        </Link>
      </div>
      <Divider />
    </>
  );
};

export default MenuItem;
