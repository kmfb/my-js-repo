import flatten from "../flatten";

test("flatten array", () => {
  const testArr = [
    [[1, [1.1]], 2, 3],
    [4, 5],
  ];
  expect(flatten(testArr)).toStrictEqual([1, 1.1, 2, 3, 4, 5]);
});

test("flatten a empty array", () => {
  const testArr: any = [];
  expect(flatten(testArr)).toStrictEqual([]);
});
