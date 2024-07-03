import { Attachment, TextBlock } from "../utils";

export type ImportantInfo = {
  slug: string;
  title: string;
  attachment: Attachment;
  blocks: TextBlock[];
};

const banner: Attachment = { type: "img", link: "/media/1744832.jpg" };

const textBlockTitle1: TextBlock = {
  type: "header",
  text: "Основные требования и ограничения в части обеспечения безопасности:",
};
const textBlock1: TextBlock = {
  type: "text",
  text: "Все физические лица обязаны осуществлять проход на вокзалы в соответствии с правилами входного контроля, выполнять требования работников железнодорожных вокзалов, подразделений транспортной безопасности  и сотрудников транспортной полиции.",
};
const textBlock2: TextBlock = {
  type: "text",
  text: "Запрещается:",
};
const textBlockList1: TextBlock = {
  type: "list",
  text: "проносить вещества и предметы согласно перечню;",
};
const textBlockList2: TextBlock = {
  type: "list",
  text: "препятствовать функционированию технических средств обеспечения транспортной безопасности;",
};
const textBlockList3: TextBlock = {
  type: "list",
  text: "распространять заведомо ложную информацию о событиях или действиях, создающих угрозу безопасности;",
};
const textBlockList4: TextBlock = {
  type: "list",
  text: "использовать пиротехнические изделия;",
};
const textBlockList5: TextBlock = {
  type: "list",
  text: "бежать по пассажирской платформе;",
};
const textBlockList6: TextBlock = {
  type: "list",
  text: "устраивать подвижные игры;",
};
const textBlockList7: TextBlock = {
  type: "list",
  text: "иметь при себе предметы, которые без упаковки или чехлов могут травмировать других граждан;",
};
const textBlockList8: TextBlock = {
  type: "list",
  text: "находиться на железнодорожных путях и оставлять на них предметы;",
};
const textBlock9: TextBlock = {
  type: "list",
  text: "Не допускается находиться в состоянии алкогольного, токсического или наркотического опьянения;",
};
const textBlock10: TextBlock = {
  type: "list",
  text: "Не допускается курение в помещениях железнодорожных вокзалов.",
};
const textBlock11: TextBlock = {
  type: "text",
  text: "При нарушении правил пассажиру может быть отказано в услуге перевозки. Лица, нарушающие правила, несут ответственность, предусмотренную законодательством Российской Федерации.",
};
const textBlock12: TextBlock = {
  type: "text",
  text: "",
};
const textBlock13: TextBlock = {
  type: "text",
  text: "Для комфортного прохождения входного контроля рекомендуется прибывать на вокзал заранее: не менее чем за 30 минут до отправления поезда.",
};
const textBlock14: TextBlock = {
  type: "text",
  text: "Документы:",
};
const textBlockList15: TextBlock = {
  type: "list",
  text: "Федеральный закон Российской Федерации от 09.02.2007 г. № 16-ФЗ «О транспортной безопасности».",
};
const textBlockList16: TextBlock = {
  type: "list",
  text: "Федеральный закон от 23.02.2013 г. № 15-ФЗ «Об охране здоровья граждан от воздействия окружающего табачного дыма и последствий потребления табака».",
};
const textBlockList17: TextBlock = {
  type: "list",
  text: "Постановление Правительства Российской Федерации от 15.11.2014 № 1208.",
};
const textBlockList18: TextBlock = {
  type: "list",
  text: "Приказ Министерства транспорта Российской Федерации от 08.02.2007 г. № 18 «Об утверждении правил нахождения граждан и размещения объектов в зонах повышенной опасности, выполнения в этих зонах работ, проезда и перехода через железнодорожные пути».",
};
const textBlockList19: TextBlock = {
  type: "list",
  text: "Приказ Минтранса России от 28.12.2016 г. №  421 «Об утверждении Порядка предоставления права на бесплатный проезд железнодорожным транспортом в дополнительных поездах (в том числе период предоставления права на бесплатный проезд, условия предоставления права на бесплатный проезд и допуска к посадке в транспортное средство, механизм учета поездок, требования к транспортному обслуживанию зрителей спортивных соревнований)».",
};
const textBlock20: TextBlock = {
  type: "header",
  text: "Обычный порядок прохождения входного контроля и обследования посетителей, их ручной клади и багажа.",
};
const textBlock21: TextBlock = {
  type: "text",
  text: "Процедура входного контроля на вокзалах аналогична процедуре досмотра в аэропортах.",
};
const textBlockList22: TextBlock = {
  type: "list",
  text: "Входной контроль пассажиров и посетителей осуществляется с применением стационарных (рамочных) и ручных металлодетекторов.",
};
const textBlockList23: TextBlock = {
  type: "list",
  text: "Входной контроль багажа осуществляется с применением рентгеноскопического оборудования.",
};
const textBlockList24: TextBlock = {
  type: "list",
  text: "Пассажир или посетитель самостоятельно размещает багаж и ручную кладь на ленту рентгеноскопического оборудования. Для мелких и ценных вещей имеются лотки.",
};
const textBlockList25: TextBlock = {
  type: "list",
  text: "Пассажир или посетитель обязан ответить на уточняющие вопросы работников железнодорожных вокзалов, охранных организаций и сотрудников транспортной полиции.",
};
const textBlockList26: TextBlock = {
  type: "list",
  text: "При  наличии предположений о наличии запрещённых к проносу предметов и веществ, пассажир или посетитель приглашается для повторного прохождения входного контроля и обследования / опроса.",
};
const textBlockList27: TextBlock = {
  type: "list",
  text: "Для комфортного прохождения входного контроля рекомендуется прибывать на вокзалы не позднее, чем за 30 минут до отправления поезда.",
};
const textBlock28: TextBlock = {
  type: "text",
  text: "Отказ от прохождения входного контроля пассажиром влечёт расторжение договора перевозки в одностороннем порядке.",
};
const textBlock29: TextBlock = {
  type: "header",
  text: "Порядок прохождения входного контроля для лиц с кардиостимуляторами.",
};
const textBlockList30: TextBlock = {
  type: "list",
  text: "Исключается проход через стационарные (рамочные) металлодетекторы людей с кардиостимуляторами.",
};
const textBlockList31: TextBlock = {
  type: "list",
  text: "Проход осуществляется в обход стационарных металлодетекторов по указанию сотрудников вокзалов.",
};
const textBlockList32: TextBlock = {
  type: "list",
  text: "Входной контроль пассажиров и посетителей с кардиостимуляторами осуществляется ручным (контактным) способом.",
};
const textBlock33: TextBlock = {
  type: "text",
  text: "Пассажиры и посетители с кардиостимуляторами должны уточнить порядок входного контроля на конкретном объекте у работников железнодорожных вокзалов. Рекомендуется иметь при себе подтверждающий медицинский документ.",
};
const textBlock34: TextBlock = {
  type: "text",
  text: "Отказ от прохождения входного контроля пассажиром влечёт расторжение договора перевозки в одностороннем порядке.",
};
const textBlock35: TextBlock = {
  type: "header",
  text: "Порядок прохождения входного контроля для лиц с детскими колясками и в инвалидных колясках.",
};
const textBlockList36: TextBlock = {
  type: "list",
  text: "Для прохождении входного контроля с детскими колясками необходимо: положить на ленту рентгеноскопического оборудования содержимое карманов, складную коляску (прогулочную, строллер) сложить и также разместить на ленту рентгеноскопического, крупногабаритную коляску (люльку, нескладную) представить к ручному обследованию по дополнительным указаниям работников железнодорожных вокзалов.",
};
const textBlockList37: TextBlock = {
  type: "list",
  text: "Пассажиры и посетители в инвалидных колясках не проезжают через рамки металлодетекторов. Проход осуществляется в обход рамки. Входной контроль проводится в ручном режиме.",
};
const textBlock38: TextBlock = {
  type: "text",
  text: "Пассажирам в инвалидных колясках и пассажирам с иными ограничениями мобильности рекомендуется пользоваться услугами Центра содействия мобильности ОАО «РЖД».",
};
const textBlock39: TextBlock = {
  type: "header",
  text: "Документы:",
};
const textBlockList40: TextBlock = {
  type: "list",
  text: "Выдержки из федерального закона Российской Федерации от 09.02.2007 № 16-ФЗ «О транспортной безопасности».",
};
const textBlockList41: TextBlock = {
  type: "list",
  text: "Постановление Правительства Российской Федерации от 15.11.2014 года № 1208 «Об утверждении требований по соблюдению транспортной безопасности для физических лиц, следующих либо находящихся на объектах транспортной инфраструктуры или транспортных средствах, по видам транспорта».",
};
const textBlockList42: TextBlock = {
  type: "list",
  text: "Административная ответственность в области транспортной безопасности (Выдержка из Кодекса Российской Федерации об административных правонарушениях, ст.11.15.1).",
};
const textBlockList43: TextBlock = {
  type: "list",
  text: "Уголовная ответственность в области транспортной безопасности (Выдержка из Уголовного Кодекса Российской Федерации ст.263.1).",
};
const textBlockList44: TextBlock = {
  type: "list",
  text: "Выдержки из постановления правительства РФ от 08.10.2020 № 1633 «Об утверждении требований по обеспечению транспортной безопасности, в том числе требований к антитеррористической защищенности объектов (территорий), учитывающих уровни безопасности для различных категорий объектов транспортной инфраструктуры железнодорожного транспорта».",
};
const textBlockList45: TextBlock = {
  type: "list",
  text: "Выдержка из приказа Министерства транспорта Российской Федерации от 23.07.2015 г. № 227 «Об утверждении правил проведения досмотра, дополнительного досмотра, повторного досмотра в целях обеспечения транспортной безопасности».",
};
const textBlockList46: TextBlock = {
  type: "list",
  text: "Технические средства досмотра, принципы работы и воздействие на человека.",
};
const page2textBlock1: TextBlock = {
  type: "header",
  text: "К кому можно обратиться на вокзалах?",
};
const page2textBlock2: TextBlock = {
  type: "list",
  text: "Справочная информация о порядке пользования услугами железнодорожного транспорта представлена в справочных видеотерминалах. ",
};
const page2textBlock3: TextBlock = {
  type: "list",
  text: "По всем вопросам работы вокзального комплекса можно обратиться к оператору справочного терминала по видеосвязи, а также  дежурному помощнику начальника вокзала.",
};
const page2textBlock4: TextBlock = {
  type: "header",
  text: "Важная информация о времени отправления и прибытия в билетах и на вокзалах:",
};
const page2textBlock5: TextBlock = {
  type: "list",
  text: "Железные дороги работают по местному времени. ",
};
const page2textBlock6: TextBlock = {
  type: "list",
  text: "В проездных билетах время отправления и прибытия указано местное.",
};
const page2textBlock7: TextBlock = {
  type: "list",
  text: "На вокзалах России часы показывают местное время.",
};
const page2textBlock8: TextBlock = {
  type: "list",
  text: "На табло с отправлениями и прибытиями поездов указано местное время.",
};
const page2textBlock9: TextBlock = {
  type: "header",
  text: "Если утерян / украден / испорчен билет на поезд:",
};
const page2textBlock10: TextBlock = {
  type: "list",
  text: "Обратитесь к дежурному помощнику начальника вокзала.",
};
const page2textBlock11: TextBlock = {
  type: "list",
  text: "В стандартных случаях для восстановления утерянного билета необходимо подать письменное заявление о восстановлении, предъявить документ, на который был оформлен билет (или справку из полиции, если удостоверяющий личность документ также утерян), указать дату отъезда и сообщить маршрут поездки.",
};
const page2textBlock12: TextBlock = {
  type: "list",
  text: "За восстановление утерянного или испорченного билета с пассажира взымается сбор.",
};
const page2textBlock13: TextBlock = {
  type: "header",
  text: "Если вы опоздали на поезд:",
};
const page2textBlock14: TextBlock = {
  type: "list",
  text: "Обратитесь к дежурному помощнику начальника вокзала и следуйте их рекомендациям.",
};
const page2textBlock15: TextBlock = {
  type: "header",
  text: "Если вы потеряли / у вас украли документы.",
};
const page2textBlock16: TextBlock = {
  type: "list",
  text: "Обратитесь к дежурному помощнику начальника вокзала или напрямую к сотруднику полиции и следуйте их рекомендациям.",
};
const page3textBlock1: TextBlock = {
  type: "header",
  text: "Противодействие коррупции.",
};
const page3textBlock2: TextBlock = {
  type: "text",
  text: "Горячая антикоррупционная линия ОАО «РЖД» - Телефон: 8(499) 262-66-66",
};
const page3textBlock3: TextBlock = {
  type: "text",
  text: "Служба безопасности Дирекции железнодорожных вокзалов по противодействию коррупции - Телефон: 8(800)775-93-07 (звонок бесплатный)",
};
const page3textBlock4: TextBlock = {
  type: "text",
  text: "Важно! Принимаются только обращения, касающиеся коррупции. Остальные обращения не рассматриваются.",
};

const importantData: ImportantInfo = {
  slug: "id1",
  title: "Правила поведения на вокзалах и проведения досмотра",
  attachment: banner,
  blocks: [
    textBlockTitle1,
    textBlock1,
    textBlock2,
    textBlockList1,
    textBlockList2,
    textBlockList3,
    textBlockList4,
    textBlockList5,
    textBlockList6,
    textBlockList7,
    textBlockList8,
    textBlock9,
    textBlock10,
    textBlock11,
    textBlock13,
    textBlock14,
    textBlockList15,
    textBlockList16,
    textBlockList17,
    textBlockList18,
    textBlockList19,
    textBlock20,
    textBlock21,
    textBlockList22,
    textBlockList23,
    textBlockList24,
    textBlockList25,
    textBlockList26,
    textBlockList27,
    textBlock28,
    textBlock29,
    textBlockList30,
    textBlockList31,
    textBlockList32,
    textBlock33,
    textBlock34,
    textBlock35,
    textBlockList36,
    textBlockList37,
    textBlock38,
    textBlock39,
    textBlockList40,
    textBlockList41,
    textBlockList42,
    textBlockList43,
    textBlockList44,
    textBlockList45,
    textBlockList46,
  ],
};

const vokzalSupportData: ImportantInfo = {
  slug: "id2",
  title: "Справочная информация на вокзалах",
  attachment: banner,
  blocks: [
    page2textBlock1,
    page2textBlock2,
    page2textBlock3,
    page2textBlock4,
    page2textBlock5,
    page2textBlock6,
    page2textBlock7,
    page2textBlock8,
    page2textBlock9,
    page2textBlock10,
    page2textBlock11,
    page2textBlock12,
    page2textBlock13,
    page2textBlock14,
    page2textBlock15,
    page2textBlock16,
  ],
};

const antiKorruptionData: ImportantInfo = {
  slug: "id3",
  title: "Противодействие коррупции",
  attachment: banner,
  blocks: [
    page3textBlock1,
    page3textBlock2,
    page3textBlock3,
    page3textBlock4,
  ],
};
const finalData = [
  importantData,
  vokzalSupportData,
  antiKorruptionData
];

export const getImportantInfo: () => Promise<Awaited<ImportantInfo[]>> = () => {
  return Promise.resolve(finalData);
};

export const getImportantInfoBySlug: (
  slug: string
) => Promise<Awaited<ImportantInfo>> = (slug) => {
  const [filteredData] = finalData.filter((item) => item.slug === slug);
  return Promise.resolve(filteredData);
};
