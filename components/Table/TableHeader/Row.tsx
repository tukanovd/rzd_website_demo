import classNames from "classnames";

const HeaderRow = (props: any) => {
  return <tr className={classNames("", props.className)}>{props.children}</tr>;
};

export default HeaderRow;
