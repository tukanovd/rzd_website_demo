export type SubscribeSliceType = {
  title?: string;
  text?: string;
  subtitle?: string;
  src: string;
};

const subscribe = {
  src: "post",
  title: "Подпишись на рассылку",
  text: "Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформы",
  subtitle:
    "Оформив подписку вы не только будете первым узнавать о выходе новой статьи, но и получать дополнительную информацию, не публикуемую в блоге",
};

export const getSubscribeSliceData: () => Promise<
  Awaited<SubscribeSliceType>
> = async () => {
  // @ts-ignore
  return Promise.resolve(subscribe);
};
