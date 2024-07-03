import { Icon } from "./types";
import { Colors, ColorsType } from "./constants";

const ChevronDown = ({
  color = ColorsType.grey,
  width = 24,
  height = 24,
}: Icon) => {
  return (
    <svg
      className="chevron-down"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 10L12 16L18 10" />
      <style jsx>{`
        .chevron-down path {
          stroke: var(${Colors[color]});
        }
      `}</style>
    </svg>
  );
};

export default ChevronDown;
