const flatten = (arr: any[]): any[] => {
  if (!Array.isArray(arr)) {
    throw new Error("the value is not Array");
  }

  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
};

export default flatten;
