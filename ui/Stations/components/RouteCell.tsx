import { Typography } from "@components";
import { Train } from "@model/trainTimeTable/types";

const RouteCell = (props: Train["route"]) => {
  return (
    <Typography>
      {props.start} - {props.end}
    </Typography>
  );
};

export default RouteCell;
