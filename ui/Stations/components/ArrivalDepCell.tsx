import classNames from "classnames";
import { Typography } from "@components";
import { Train } from "@model/trainTimeTable/types";
import { parseTimeFromDateTime } from "@utils";

const ArrivalDepCell = (props: Train["arrival"]) => {
  const { scheduled, actual } = props;

  return (
    <span>
      <Typography className={classNames({ "line-through": actual })}>
        {parseTimeFromDateTime(scheduled)}
      </Typography>
      {actual && (
        <Typography className="ml-1">
          {parseTimeFromDateTime(actual)}
        </Typography>
      )}
    </span>
  );
};

export default ArrivalDepCell;
