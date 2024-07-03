import { Icon } from "./types";
import { Colors, ColorsType } from "./constants";

const Loupe = ({ color = ColorsType.grey, width = 26, height = 26 }: Icon) => {
  return (
    <svg
      className="loupe"
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.0586" cy="12.0586" r="7.06194" />
      <path d="M21.0033 21.0033L17.0517 17.0517" />
      <style jsx>{`
        .loupe path {
          stroke: var(${Colors[color]});
        }
        .loupe circle {
          stroke: var(${Colors[color]});
        }
      `}</style>
    </svg>
  );
};

export default Loupe;
