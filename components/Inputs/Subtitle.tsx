import Typography from "../Typography";

interface Subtitle {
  subtitleStyle?: string;
  text?: string;
}

const Subtitle = ({ subtitleStyle, text }: Subtitle) => {
  return (
    <Typography className={subtitleStyle} component="span" variant="p3">
      {text}
    </Typography>
  );
};

export default Subtitle;
