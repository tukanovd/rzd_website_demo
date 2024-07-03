import dynamic from "next/dynamic";

const AsyncSwiper = dynamic(() => import("./Swiper"), {
  ssr: false,
});

export default AsyncSwiper;
