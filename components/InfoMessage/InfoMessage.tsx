import InlineImage from "../Image/InlineImage";
import { InfoMessage, MessageType, MessageTypes } from "./types";
import { iconSize, iconTypes } from "./constants";

const getIcon = (type: MessageType) => {
  return iconTypes[type];
};
const getIconStyle = (type: MessageType) => {
  if (type === MessageTypes.warning) {
    return "bg-color-primary-white rounded-border-radius_medium";
  }
  return "";
};

const InfoMessage = ({ children, type }: InfoMessage) => {
  const iconSrc = getIcon(type);
  const iconStyle = getIconStyle(type);
  return (
    <div className="flex items-center rounded-border-radius_medium bg-color-common py-2.5 pl-3.5 pr-10 gap-3">
      <InlineImage
        className={iconStyle}
        src={iconSrc}
        width={iconSize}
        height={iconSize}
      />
      <div>{children}</div>
    </div>
  );
};

export default InfoMessage;
