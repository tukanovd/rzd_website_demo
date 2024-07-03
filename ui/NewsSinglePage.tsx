import c from "classnames";
import InlineSVG from "react-inlinesvg";
import { NewsData } from "@model";
import NewsSlice from "../Slices/News";
import {
  Typography,
  Button,
  Portal,
  Layout,
  ThemedImage,
  LayoutRow,
  Banner,
  Input,
  DateField,
  Hashtags,
  LinkedTypography,
} from "@components";
import { useTheme } from "@utils/themeSwitcher";

const vkIcon = "/assets/vk.svg";
const telegramIcon = "/assets/telegram.svg";

const Subscribe = () => {
  const { theme } = useTheme();
  const isMgn = theme !== "default";

  return (
    <div className="flex flex-col md:gap-8 gap-10">
      <div className="flex flex-col gap-6">
        <Typography variant="h2" className="color-primary-black">
          Поделиться:
        </Typography>
        <div className="flex gap-4">
          <InlineSVG src={isMgn ? vkIcon.replace(".", "Black.") : vkIcon} />
          <InlineSVG
            src={isMgn ? telegramIcon.replace(".", "Black.") : telegramIcon}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h2" className="color-primary-black">
          Подписаться на рассылку:
        </Typography>
        <Input underline={true} type="text" placeholder="E-mail" />
        <Button variant="outline">Подписаться</Button>
      </div>
    </div>
  );
};

type NewsSinglePageProps = NewsData & {
  recommendedNews: NewsData[];
};

const NewsSinglePage = (props: NewsSinglePageProps) => {
  const {
    blocks,
    attachments = [],
    title,
    tags,
    published_at,
    recommendedNews,
  } = props;
  const [banner] = attachments;
  const bannerSrc = banner?.link;
  const { theme } = useTheme();
  const isShowImg = theme === "default";

  return (
    <>
      <Portal id="fullPageTop">
        <Layout cols="1">
          <Typography
            variant="b1"
            className="py-8 md:px-32 px-5 color-primary-black"
          >
            {title}
          </Typography>
          {bannerSrc && <ThemedImage src={bannerSrc} size="l" />}
        </Layout>
      </Portal>
      <LayoutRow colSpan="3" className="pt-10">
        <div className="flex flex-col md:gap-8 gap-10">
          <div className="flex flex-col gap-2">
            <Hashtags src="news" tags={tags} />
            <DateField date={published_at} />
          </div>
          <div className="md:flex hidden">
            <Subscribe />
          </div>
        </div>
      </LayoutRow>
      <LayoutRow start="5" end="13" className="flex flex-col pt-10 gap-5">
        {blocks.map((block, index) => {
          const { text, attachments } = block;
          const hasAttachment = !!attachments?.length;
          const attachStyle = c({ "py-5": hasAttachment });

          return (
            <div key={index} className="flex flex-col">
              {text && (
                <LinkedTypography variant="p1" className="color-primary-black">
                  {text}
                </LinkedTypography>
              )}
              {!!attachments?.length &&
                isShowImg &&
                attachments.map((attachment, index) => (
                  <div key={index} className={attachStyle}>
                    <Banner imgSrc={attachment.link} />
                  </div>
                ))}
            </div>
          );
        })}
      </LayoutRow>
      <div className="md:hidden block">
        <Subscribe />
      </div>
      <LayoutRow colSpan="full" className="md:pb-25 pb-35">
        <NewsSlice
          news={recommendedNews}
          title="Читайте также:"
          swipeable={false}
        />
      </LayoutRow>
    </>
  );
};

export default NewsSinglePage;
