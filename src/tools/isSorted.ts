function isSorted(arr: number[]): boolean {
  let sorted: boolean = true;

  for (let i: number = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      sorted = false;
    }
  }

  return sorted;
}

export default isSorted;