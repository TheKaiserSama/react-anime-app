export const formatString = (list) => {
  return list.map(({ name }) => name).join(',');
};
