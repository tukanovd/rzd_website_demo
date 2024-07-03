import { Icon } from "./types";
import { Colors, ColorsType } from "./constants";

const EyeOpen = ({
  color = ColorsType.grey,
  width = 24,
  height = 24,
}: Icon) => {
  return (
    <svg
      className="eye"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.08192 11.9999C4.6257 15.5332 8.151 18 12.2501 18C16.3492 18 19.8745 15.5333 21.4183 12.0001C19.8745 8.46676 16.3492 6 12.2501 6C8.151 6 4.62573 8.46669 3.08192 11.9999ZM22.5002 12.0001C20.9001 7.90268 16.9141 5 12.2501 5C7.58615 5 3.60016 7.90261 2 11.9999C3.60012 16.0973 7.58616 19 12.2501 19C16.9141 19 20.9001 16.0974 22.5002 12.0001Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2501 15C13.907 15 15.2501 13.6569 15.2501 12C15.2501 10.3431 13.907 9 12.2501 9C10.5933 9 9.25012 10.3431 9.25012 12C9.25012 13.6569 10.5933 15 12.2501 15ZM12.2501 16C14.4593 16 16.2501 14.2091 16.2501 12C16.2501 9.79086 14.4593 8 12.2501 8C10.041 8 8.25012 9.79086 8.25012 12C8.25012 14.2091 10.041 16 12.2501 16Z"
      />
      <style jsx>{`
        .eye path {
          fill: var(${Colors[color]});
        }
      `}</style>
    </svg>
  );
};

export default EyeOpen;
