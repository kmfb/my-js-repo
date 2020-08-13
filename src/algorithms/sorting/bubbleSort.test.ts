import bubbleSort from "./bubbleSort";

describe("bubbleSort", () => {
  it("sort a array with positive number", () => {
    const testArr = [0, 3, 4, 1, 3, 6, 2, 9];
    const res = [0, 1, 2, 3, 3, 4, 6, 9];

    expect(bubbleSort(testArr)).toStrictEqual(res);
  });

  it("sort a array with negative number", () => {
    const testArr = [0, 3, -4, 1, 3, -6, 2, 9];
    const res = [-6, -4, 0, 1, 2, 3, 3, 9];

    expect(bubbleSort(testArr)).toStrictEqual(res);
  });
  it("sort a empty array", () => {
    const testArr: any = [];
    const res: any = [];

    expect(bubbleSort(testArr)).toStrictEqual(res);
  });
});
