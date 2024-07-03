import Banner from "@components/Banner";
import { Typography } from "@components/Typography";
import Link from "@components/Link";
import { NewsData } from "@model";
import Hashtags from "@components/Hashtag";
import { PAGES_CONFIG } from "@utils";
import DateField from "@components/DateField";
import { removeTextLinks } from "@utils/auxiliary";

const Option = ({
  id,
  attachments,
  tags,
  published_at,
  title,
  blocks,
}: NewsData) => {
  const [attachment] = attachments ? attachments : [];
  const { link } = attachment;
  const [previewBlock] = blocks;
  const { text } = previewBlock;

  return (
    <div>
      {link && (
        <Link src={`${PAGES_CONFIG.news.url}/${id}`}>
          <Banner size="s" imgSrc={link} isShowBanner={true} />
        </Link>
      )}
      <div className="flex justify-between items-center pt-4">
        <Hashtags src="news" tags={tags} />
        <DateField date={published_at} />
      </div>
      <Link src={`/news/${id}`} variant="black">
        <div className="mt-8 flex flex-col gap-4">
          <Typography variant="h2">{title}</Typography>
          <Typography variant="p1" className="color-primary-black">
            {removeTextLinks(text)}
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default Option;
