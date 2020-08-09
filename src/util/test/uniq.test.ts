import { uniqByLoop, uniqBySet } from "../uniq";

describe("uniq", () => {
  test("uniq array", () => {
    const testArr = [
      1,
      2,
      3,
      3,
      4,
      4,
      "4",
      "4",
      5,
      6,
      7,
      8,
      8,
      9,
      true,
      true,
      false,
      false,
    ];
    const res = [1, 2, 3, 4, "4", 5, 6, 7, 8, 9, true, false];
    expect(uniqByLoop(testArr)).toStrictEqual(res);
    expect(uniqBySet(testArr)).toStrictEqual(res);
  });

  test("flatten a empty array", () => {
    const testArr: any = [];
    const res: any = [];
    expect(uniqByLoop(testArr)).toStrictEqual(res);
    expect(uniqBySet(testArr)).toStrictEqual(res);
  });
});
