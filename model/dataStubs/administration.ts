import { Attachment } from "@utils";

const attachment1: Attachment = {
  type: "img",
  link: "/assets/person1.svg",
};
const attachment2: Attachment = {
  type: "img",
  link: "/assets/person2.svg",
};
const attachment3: Attachment = {
  type: "img",
  link: "/assets/person3.svg",
};

export const adminPerson1 = {
  id: "1",
  first_name: "Иван",
  patronymic: "Иванович",
  last_name: "Иванов",
  position: {
    name: "Начальник дирекции",
    id: "1",
  },
  photo_link: attachment1,
};
export const adminPerson2 = {
  id: "2",
  first_name: "Иван",
  patronymic: "Иванович",
  last_name: "Иванов",
  position: {
    name: "Первый заместитель начальника дирекции",
    id: "2",
  },
  photo_link: attachment2,
};
export const adminPerson3 = {
  id: "3",
  first_name: "Иван",
  patronymic: "Иванович",
  last_name: "Иванов",
  position: {
    name: "Заместитель начальника дирекции",
    id: "2",
  },
  photo_link: attachment3,
};

export const administrationData = [
  adminPerson1,
  adminPerson2,
  adminPerson3,
  { ...adminPerson1, id: "4" },
  { ...adminPerson2, id: "5" },
  { ...adminPerson3, id: "6" },
  { ...adminPerson1, id: "7" },
  { ...adminPerson2, id: "8" },
  { ...adminPerson3, id: "9" },
];
