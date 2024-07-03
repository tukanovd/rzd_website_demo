import { Icon } from "./types";
import { Colors, ColorsType } from "./constants";

const Cross = ({ color = ColorsType.grey, width = 24, height = 24 }: Icon) => {
  return (
    <svg
      className="cross"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Type=close, State=default">
        <path
          id="Path 2"
          d="M17.6569 17.6569L6.34319 6.34315"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          id="Path 2_2"
          d="M17.6568 6.34315L6.34311 17.6569"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      <style jsx>{`
        .cross path {
          stroke: var(${Colors[color]});
        }
      `}</style>
    </svg>
  );
};

export default Cross;
