export const getCssPropValue = (propName: string) => {
  const style = getComputedStyle(document.body);
  return style.getPropertyValue(propName);
};
