const bubbleSort = (arr: Array<Number>) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const testArr = [8, 2, 3, 4, 1, 9, 4];

const res = bubbleSort(testArr);

res;
