import InlineImage, { ImageProps } from "./InlineImage";
import { useTheme } from "@utils/themeSwitcher";
import BackgroundImage, { BackgroundImageProps } from "./BackgroundImage";

const ThemedImage = (props: ImageProps) => {
  const { theme } = useTheme();
  const { src } = props;
  let _src = src;
  if (theme !== "default") {
    return null;
  }

  return <InlineImage {...props} src={_src} />;
};

const ThemedBGImage = (props: BackgroundImageProps & { isNews?: boolean }) => {
  const { theme } = useTheme();
  const { src, isNews, children, ...restProps } = props;
  let _src = src;
  if (theme !== "default" && isNews) {
    return null;
  }
  if (theme !== "default") {
    _src = "";
  }

  return (
    <BackgroundImage {...restProps} src={_src}>
      {children}
    </BackgroundImage>
  );
};

export { ThemedImage, ThemedBGImage };
