import c from "classnames";
import { Button } from "./ButtonBase";
import { Typography } from "./Typography";
import { Layout, LayoutRow } from "./Layout";
import { Size, SizeType, getSize } from "@utils";
import Link from "./Link";
import { ThemedBGImage } from "./Image";

type BannerProps = {
  imgSrc?: string;
  previewSrc?: string;
  title?: string;
  buttonText?: string;
  text?: string;
  link?: string;
  onButtonClick?: () => void;
  size?: SizeType;
  fullSize?: boolean;
  isPreview?: boolean;
  isShowBanner?: boolean;
  isMgn?: boolean;
};

const getTextSize = (size?: SizeType) => {
  if (size === Size.m) {
    return "mb-16";
  }
  return "mb-28";
};

const Banner = ({
  imgSrc,
  title,
  link,
  isPreview,
  previewSrc,
  buttonText,
  text,
  onButtonClick,
  fullSize,
  size = Size.m,
  isShowBanner = false, // TODO переделать компонент картинки, банер должен быть виден всегда, даже без картинки
  isMgn = false,
}: BannerProps) => {
  const style = c(getSize(size), {
    "w-full": fullSize,
    "rounded-border-radius_medium": !fullSize,
  });

  const textStyle = c("flex flex-col gap-y-5 md:pl-0 pl-3", getTextSize(size), {
    "mt-24": !isPreview,
    "mt-6": isPreview,
  });
  const src = isPreview ? previewSrc : imgSrc;
  const colsSize = isPreview ? "1" : "2";
  const gridStyle = c("h-full", {
    "px-3": isPreview && !fullSize,
  });

  if (isMgn) {
    return (
      <Layout cols="12" mdCols="1">
        <LayoutRow start={colsSize} colSpan="6" className="mt-6">
          {title && (
            <Typography
              variant={isPreview ? "h2" : "b1"}
              className="color-primary-white"
            >
              {title}
            </Typography>
          )}
          {text && (
            <Typography variant="p1" className="color-primary-white">
              {text}
            </Typography>
          )}
        </LayoutRow>
        {buttonText && (
          <LayoutRow start={colsSize} colSpan={isPreview ? "full" : "3"}>
            <Button classNames="w-full" size="s" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </LayoutRow>
        )}
        <LayoutRow start={colsSize} className="flex items-end" colSpan="12">
          {link && (
            <Link src={link} variant="white" className="mt-2">
              <Typography variant="p2">Подробнее</Typography>
            </Link>
          )}
        </LayoutRow>
      </Layout>
    );
  }

  return (
    <ThemedBGImage src={src} className={style} isNews={isShowBanner}>
      <Layout cols="12" mdCols="1" className={gridStyle}>
        <LayoutRow start={colsSize} colSpan="6" className={textStyle}>
          {title && (
            <Typography
              variant={isPreview ? "h2" : "b1"}
              className="color-primary-white"
            >
              {title}
            </Typography>
          )}
          {text && (
            <Typography variant="p1" className="color-primary-white">
              {text}
            </Typography>
          )}
        </LayoutRow>
        {buttonText && (
          <LayoutRow start={colsSize} colSpan={isPreview ? "full" : "3"}>
            <Button classNames="w-full" size="s" onClick={onButtonClick}>
              {buttonText}
            </Button>
          </LayoutRow>
        )}
        <LayoutRow
          start={colsSize}
          className="mb-6 flex items-end pl-3"
          colSpan="12"
        >
          {link && (
            <Link src={link} variant="white">
              <Typography variant="p2">Подробнее</Typography>
            </Link>
          )}
        </LayoutRow>
      </Layout>
    </ThemedBGImage>
  );
};

export default Banner;
