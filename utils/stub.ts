import { MenuItemData } from "@components/Menu/types";
import { PAGES_CONFIG } from "./constants";

export const getStubText = () => {
  return (
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt congue velit in vulputate. Nunc ullamcorper est in mi bibendum, ut eleifend tellus sollicitudin. Integer sit amet fermentum risus. Quisque et feugiat diam, ac ultrices sapien. Vestibulum ut sodales lacus. Sed in lorem lorem. Praesent eget rutrum diam, ut ultrices magna. Donec bibendum est ut turpis semper, a elementum mi convallis. Duis faucibus non nisi id dictum. Aliquam erat volutpat. Phasellus sed tortor a nisl aliquam convallis. Maecenas varius mi quis ullamcorper varius. Etiam lacinia ex sed mauris hendrerit elementum. Donec a tempor lorem, elementum tempus magna.\n" +
    "\n" +
    "Etiam id interdum ex. Mauris consectetur non purus at ullamcorper. Curabitur tempus est felis, sit amet dictum orci elementum vel. Proin euismod elementum lorem, eget pharetra diam finibus vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc imperdiet ex nec fermentum pretium. Aenean eu mollis arcu, sed elementum mauris. Ut et nulla a ex condimentum luctus. Praesent non lacus ultrices, luctus libero non, tempor neque. Mauris odio metus, tincidunt sed luctus eu, egestas quis tellus. Proin sit amet tincidunt ipsum, vel tempus tortor. Nunc fringilla blandit mi, vitae facilisis ipsum faucibus at. In congue elit erat, quis tempor augue placerat vel.\n" +
    "\n" +
    "Praesent maximus risus nec imperdiet tincidunt. Cras lacus mauris, imperdiet non euismod et, eleifend nec lacus. Vestibulum egestas, tellus quis malesuada sagittis, elit eros hendrerit elit, sit amet sodales risus velit eget ligula. Pellentesque sed mollis justo. Quisque ut ipsum venenatis lectus cursus gravida. Etiam varius lobortis mauris et faucibus. Nam finibus tincidunt leo ac porttitor. Donec mauris lacus, sollicitudin in lacinia in, tincidunt finibus odio. Fusce maximus sollicitudin leo, non imperdiet lacus ultricies non. Mauris sit amet ornare tellus. Vivamus dapibus metus nec turpis varius, a molestie turpis tempor.\n" +
    "\n" +
    "Suspendisse tristique odio in aliquam faucibus. Duis varius, nisl vitae accumsan sollicitudin, felis mauris bibendum libero, vitae blandit eros odio ac sapien. Integer finibus magna in erat lobortis, sed venenatis felis ultricies. Morbi commodo sem in velit pharetra, ut suscipit lectus ullamcorper. Integer nec egestas turpis, vel tincidunt neque. Donec eget ipsum euismod nulla faucibus lacinia. In consectetur placerat efficitur. Integer dapibus justo non nunc bibendum lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Morbi id gravida erat, id dignissim orci. Vestibulum vel risus in nulla elementum eleifend non sed neque. Sed rhoncus hendrerit leo id luctus. Vestibulum sed enim quis ante malesuada pretium. Proin tempus dapibus iaculis. Sed consequat ultrices dignissim.\n" +
    "\n" +
    "Curabitur id odio in ante placerat condimentum. Ut tortor libero, laoreet quis laoreet non, commodo vitae velit. Mauris vitae augue cursus, varius nunc ut, imperdiet neque. Proin eu sapien leo. Quisque leo mauris, facilisis nec ipsum pellentesque, mattis finibus nisl. Nulla fringilla orci et urna pretium, a bibendum libero luctus. In nec facilisis turpis."
  );
};

const mainLogo = "/assets/mainLogo.svg";
const rzdLogo = "/assets/RZD.svg";
const glasses = "/assets/glasses.svg";
const vkIcon = "/assets/vk.svg";
const telegramIcon = "/assets/telegram.svg";

const passangersMenutItem: MenuItemData = {
  id: "i2",
  label: "Пассажирам и посетителям",
  src: "/",
  isParent: true,
};
const servicesMenuItem: MenuItemData = {
  id: "i24",
  label: "Услуги на вокзалах",
  src: PAGES_CONFIG.services.url,
  parentId: passangersMenutItem.id,
};

export const headerData = {
  blindSwitcher: { iconSrc: glasses, text: "Версия для слабовидящих" },
  vk: { src: "https://vk.com/railway_stations_russia", iconSrc: vkIcon },
  telegram: {
    src: "https://t.me/railway_stations_russia",
    iconSrc: telegramIcon,
  },
  support: { phone: "88007750000", text: "Центр поддержки клиентов" },
  mainLogo,
  rzdLogo,
  menu: [
    servicesMenuItem,
    passangersMenutItem,
    { id: "i1", label: "Новости", src: "/news" },
    {
      id: "i4",
      label: "Важная информация",
      src: "/importantInfo",
      parentId: "i2",
    },
    {
      id: "i14",
      label: "Вокзалы России",
      src: "/stations",
      parentId: "i2",
    },
    { id: "i7", label: "О дирекции", src: "/news", isParent: true },
    { id: "i17", label: "Руководство", src: "/administration", parentId: "i7" },
    {
      id: "i18",
      label: "Структурные подразделения",
      src: "/directorates",
      parentId: "i7",
    },
    { id: "i19", label: "Общая информация", src: "/about", parentId: "i7" },
  ],
  button: { src: "", text: "Обратная связь" },
};

export const footerData = {
  mainLogo,
  rightsReserves:
    "© Дирекция Железнодорожных Вокзалов – филиал ОАО «РЖД»,\n" +
    "2009 - 2023 год.\n" +
    "При использовании любых материалов ссылка на сайт dzvr.ru обязательна",
  menu: [
    servicesMenuItem,
    passangersMenutItem,
    { id: "i3", label: "Новости", src: "/news", isParent: true },
    { id: "i1", label: "О дирекции", src: "/news", isParent: true },
    {
      id: "i16",
      label: "Важная информация",
      src: "/importantInfo",
      parentId: "i2",
    },
    {
      id: "i14",
      label: "Вокзалы России",
      src: "/stations",
      parentId: "i2",
    },
    { id: "i7", label: "Руководство", src: "/administration", parentId: "i1" },
    {
      id: "i8",
      label: "Структурные подразделения",
      src: "/directorates",
      parentId: "i1",
    },
    { id: "i9", label: "Общая информация", src: "/about", parentId: "i1" },
  ],
  contacts: {
    title: "Контакты",
    src: "/contacts",
    socials: [
      { src: "https://vk.com/railway_stations_russia", icon: vkIcon },
      { src: "https://t.me/railway_stations_russia", icon: telegramIcon },
    ],
  },
};

export const news = {
  title: "Новости",
  news: [
    {
      id: "news1",
      title: "Акция на вокзале Волгограда: бизнес-зал до конца лета",
      text: "Акция на вокзале Волгограда: бизнес-зал до конца лета стал почти вдвое дешевлеАкция ...",
      hashtag: "Питание",
      publishDate: "21.07.2021",
      imgSrc: "/assets/NewsExample1.svg",
    },
    {
      id: "news2",
      title: "Акция на вокзале Волгограда: бизнес-зал до конца лета",
      text: "Акция на вокзале Волгограда: бизнес-зал до конца лета стал почти вдвое дешевлеАкция ...",
      hashtag: "Питание",
      publishDate: "21.07.2021",
      imgSrc: "/assets/NewsExample2.svg",
    },
    {
      id: "news3",
      title: "Акция на вокзале Волгограда: бизнес-зал до конца лета",
      text: "Акция на вокзале Волгограда: бизнес-зал до конца лета стал почти вдвое дешевлеАкция ...",
      hashtag: "Питание",
      publishDate: "21.07.2021",
      imgSrc: "/assets/NewsExample3.svg",
    },
    {
      id: "news4",
      title: "Акция на вокзале Волгограда: бизнес-зал до конца лета",
      text: "Акция на вокзале Волгограда: бизнес-зал до конца лета стал почти вдвое дешевлеАкция ...",
      hashtag: "Питание",
      publishDate: "21.07.2021",
      imgSrc: "/assets/NewsExample3.svg",
    },
  ],
  buttonProps: { src: "/", label: "Смотреть все" },
};

export const search = { placeholder: "Поиск", title: "Вокзалы России" };
export const specialOffer = {
  src: "/assets/defaultBanner.svg",
  title: "Специальные предложения",
  subtext: "Подробнее",
};
export const data = [
  {
    id: "slide1",
    label: "Контакты, расписания, услуги и сервисы",
    title: "Вокзалы России",
    subtext: "Вокзалы России",
    buttonText: "Список вокзалов",
    buttonLink: "https://mgn.dzvr.ru/stations/mgn/open",
    imgSrc: "/assets/defaultBanner.svg",
    previewSrc: "/assets/previewBanner.svg",
  },
  {
    id: "slide2",
    label:
      "Бронируйте отели и выбирайте экскурсии и впечатления на travel.rzd.ru",
    title: "Продолжите путешествие с РЖД!",
    subtext: "Продолжите путешествие с РЖД!",
    buttonText: "Перейти",
    buttonLink: "https://travel.rzd.ru",
    imgSrc: "/assets/defaultBanner.svg",
    previewSrc: "/assets/previewBanner.svg",
  },
  {
    id: "slide3",
    label: " ",
    title: "Первый иммерсивный аудиоспектакль на вокзале",
    subtext: "Первый иммерсивный аудиоспектакль на вокзале",
    buttonText: "Подробнее.",
    buttonLink: "http://vokzal.mycityvoice.tilda.ws/",
    imgSrc: "/assets/defaultBanner.svg",
    previewSrc: "/assets/previewBanner.svg",
  },
];
