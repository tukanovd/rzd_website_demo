import InlineImage from "./Image/InlineImage";

const iconSrc = "/assets/spinner.svg";

const Spinner = () => {
  return (
    <InlineImage
      className="animate-spin w-fit"
      src={iconSrc}
      width={24}
      height={24}
    />
  );
};

export default Spinner;
