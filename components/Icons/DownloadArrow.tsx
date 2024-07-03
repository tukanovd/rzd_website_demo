import { Icon } from "./types";
import { Colors, ColorsType } from "./constants";

const DownloadArrow = ({
  color = ColorsType.white,
  width = 24,
  height = 24,
}: Icon) => {
  return (
    <svg
      className="download-arrow"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5576 11.1106L12.0001 14.6681L8.44263 11.1106"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0002 3.99664V14.6681"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0035 16.4457C20.0035 18.4105 18.4108 20.0032 16.446 20.0032H7.55431C5.58957 20.0032 3.99683 18.4105 3.99683 16.4457"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <style jsx>{`
        .download-arrow path {
          stroke: var(${Colors[color]});
        }
      `}</style>
    </svg>
  );
};

export default DownloadArrow;
