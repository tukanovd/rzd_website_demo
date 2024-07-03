import { PAGES_CONFIG } from "../utils";

type SliceNamesProps = string[];

const sliceNames = {
  [PAGES_CONFIG.news.id]: ["search", "news", "subscribe"],
  [PAGES_CONFIG.home.id]: ["swiper", "services", "specialOffer", "news"],
};

export const getPageSlices: (
  pageId: string
) => Promise<Awaited<SliceNamesProps>> = async (pageId) => {
  // @ts-ignore
  return Promise.resolve(sliceNames[pageId]);
};
