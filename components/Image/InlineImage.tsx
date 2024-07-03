import c from "classnames";
import { getSize, Size, SizeType } from "@utils";

export type ImageProps = {
  className?: string;
  size?: SizeType;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  style?: Object;
};

const InlineImage = ({
  src,
  className,
  size = Size.content,
  width,
  height,
  alt = "",
  style,
}: ImageProps) => {
  const classes = c(getSize(size), className);

  return (
    <div className={classes} style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        className="inline-block w-full h-full"
        width={width}
        height={height}
        alt={alt}
      />
    </div>
  );
};

export default InlineImage;
