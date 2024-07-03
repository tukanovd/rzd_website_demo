import c from "classnames";
import { ReactNode } from "react";

export type BackgroundImageProps = {
  src?: string;
  children?: ReactNode;
  className?: string;
  height?: number;
  width?: number;
};

const BackgroundImage = ({
  src,
  className,
  children,
  height,
  width,
}: BackgroundImageProps) => {
  return (
    <div className={c("banner-image", className)}>
      {children && children}
      <style jsx>{`
        .banner-image {
          background-image: url(${src});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          ${width ? "width: " + width + "px" : ""};
          ${height ? "height: " + height + "px" : ""};
        }
      `}</style>
    </div>
  );
};

export default BackgroundImage;
