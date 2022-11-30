function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  
  const mid = arr.length / 2;
  
  const left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left: number[], right: number[]): number[] {
  let arr: any[] = [];
  
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  
  return [...arr, ...left, ...right];
}

export default mergeSort;