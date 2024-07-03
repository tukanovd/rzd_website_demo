import {
  DropDownMenuItem,
  MenuItemData,
  ParentList,
} from "../components/Menu/types";

export const convertMenu = (options: MenuItemData[]): DropDownMenuItem[] => {
  const parents = options.reduce((acc, option) => {
    const { isParent, id } = option;
    if (isParent) {
      acc[id] = { ...option, children: [] };
    }
    return acc;
  }, {} as ParentList);

  const parentLessList = options.reduce((acc, option) => {
    const { parentId, isParent } = option;
    if (parentId) {
      const parent = parents[parentId];

      parent.children?.push(option);
    } else if (!isParent) {
      acc.push(option);
    }
    return acc;
  }, [] as MenuItemData[]);

  const parentsList = Object.keys(parents).map((key) => parents[key]);

  return [...parentLessList, ...parentsList];
};
