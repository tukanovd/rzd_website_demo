import Typography from "@components/Typography";
import classNames from "classnames";

const BodyCell = (props: any) => {
  return (
    <Typography
      variant="p1"
      component="th"
      className={classNames(
        "py-6 md:px-0 px-6 first:pl-6 last:pr-6",
        props.className
      )}
      align="left"
    >
      {props.children}
    </Typography>
  );
};

export default BodyCell;
