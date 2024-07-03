import SearchSlice from "../../Slices/SearchSlice";
import NewsSlice from "../../Slices/News/NewsSlice";
import { SwiperMgn } from "./SwiperMgn";
import { Banner, Portal, Layout, LayoutRow, Swiper } from "@components";
import { useTheme } from "@utils/themeSwitcher";

// @ts-ignore
const renderer = (slide) => {
  const { label, title, imgSrc, previewSrc, buttonText, buttonLink } = slide;

  const clickButtonHandler = () => {
    window.location.assign(buttonLink);
  };

  return (
    <Banner
      title={title}
      imgSrc={imgSrc}
      previewSrc={previewSrc}
      buttonText={buttonText}
      fullSize={true}
      text={label}
      size="l"
      onButtonClick={clickButtonHandler}
    />
  );
};

// @ts-ignore
const Home = ({ data, sliceNames }) => {
  const { swiper, search, specialOffer, news } = data;
  const { theme } = useTheme();
  const isMgn = theme !== "default";

  return sliceNames.map((sliceName: string) => {
    switch (sliceName) {
      case "swiper":
        return isMgn ? (
          <SwiperMgn slides={swiper} sliceName={sliceName} />
        ) : (
          <Portal key={sliceName} id="fullPageTop">
            <Layout cols="1">
              <LayoutRow colSpan="full">
                <Swiper slides={swiper} slideRenderer={renderer} />
              </LayoutRow>
            </Layout>
          </Portal>
        );
      case "search":
        return (
          <LayoutRow key={sliceName} colSpan="full" className="pt-10">
            <SearchSlice {...search} />
          </LayoutRow>
        );
      case "news":
        return (
          <LayoutRow key={sliceName} colSpan="full" className="pb-32">
            <NewsSlice {...news} swipeable={true} />
          </LayoutRow>
        );
      case "specialOffer":
        return isMgn ? null : (
          <LayoutRow key={sliceName} colSpan="full" className="pt-10">
            <Banner
              imgSrc={specialOffer.src}
              title={specialOffer.title}
              {...specialOffer}
              size="m"
            />
          </LayoutRow>
        );
      default:
        return null;
    }
  });
};

export default Home;
