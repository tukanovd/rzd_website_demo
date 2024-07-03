import Link from "./Link";
import { Typography } from "./Typography";
import { Tag } from "@utils";

type HashtagsProps = {
  src?: string;
  tags: Tag[];
};

const Hashtags = ({ src, tags }: HashtagsProps) => {
  return (
    <div className="flex gap-1">
      {tags.map((hashtag, index) => (
        <Link
          key={index}
          src={`/${src}/?tag=${hashtag.id}`}
          variant="primary"
          className="w-fit"
        >
          <Typography variant="p3">#{hashtag.title.toUpperCase()}</Typography>
        </Link>
      ))}
    </div>
  );
};

export default Hashtags;
