export const uniqByLoop = (arr: Array<any>) => {
  return arr.filter((item, index, self) => self.indexOf(item) === index);
};

export const uniqBySet = (arr: Array<any>) => {
  return Array.from(new Set(arr));
};
