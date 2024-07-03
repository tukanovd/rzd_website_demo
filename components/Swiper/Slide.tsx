import { Slide } from "./types";

const Slide = ({ children, slideWidth }: Slide) => {
  return (
    <div
      className="shrink-0"
      style={{
        width: `${slideWidth}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Slide;
