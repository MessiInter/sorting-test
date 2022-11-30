function quickSort(arr: number[], left = 0, right = arr.length - 1): any {
  if (left >= right) {
    return;
  }

  const pivotIndex: number = partition(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

function partition(arr: number[], left: number, right: number): number {
  const pivotValue: number = arr[right];
  let partitionIndex: number = left;

  for (let i: number = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr: number[], first_idx: number, second_idx: number): void {
  [arr[first_idx], arr[second_idx]] = [arr[second_idx], arr[first_idx]];
}

export default quickSort;