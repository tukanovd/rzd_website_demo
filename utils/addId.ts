export type ElementExtendedWithId<T extends {}> = T & { id: number };

export const addId = <T extends {}>(data: T[]): ElementExtendedWithId<T>[] => {
  return data.map((item, index) => ({
    ...item,
    id: index,
  }));
};
