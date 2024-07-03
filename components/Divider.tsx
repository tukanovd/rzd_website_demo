import c from "classnames";

const Divider = ({ isVertical }: { isVertical?: boolean }) => {
  return (
    <>
      <hr
        className={c("border-common w-full", {
          "divider-vertical h-full": isVertical,
        })}
      />
      <style jsx>{`
        .divider-vertical {
          border-right-width: 1px;
          width: 0;
        }
      `}</style>
    </>
  );
};

export default Divider;
