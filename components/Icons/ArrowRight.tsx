import { Icon } from "./types";
import { Colors, ColorsType } from "./constants";

const ArrowRight = ({
  color = ColorsType.grey,
  width = 24,
  height = 24,
}: Icon) => {
  return (
    <svg
      className="arrow-right"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 12H5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 17L19 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7L19 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <style jsx>{`
        .arrow-right path {
          stroke: var(${Colors[color]});
        }
      `}</style>
    </svg>
  );
};

export default ArrowRight;
