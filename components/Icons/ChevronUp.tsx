import { Icon } from "./types";
import { Colors, ColorsType } from "./constants";

const ChevronUp = ({
  color = ColorsType.grey,
  width = 24,
  height = 24,
}: Icon) => {
  return (
    <svg
      className="chevron-up"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 14L12 8L6 14" />
      <style jsx>{`
        .chevron-up path {
          stroke: var(${Colors[color]});
        }
      `}</style>
    </svg>
  );
};

export default ChevronUp;
