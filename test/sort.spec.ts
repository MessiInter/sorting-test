import mergeSort from '../src/utils/merge.js';
import quickSort from '../src/utils/quick.js';

import isSorted from '../src/tools/isSorted.js';

import Chance from 'chance';
const chance: Chance.Chance = new Chance();

describe('sorting test', () => {
  let arr: number[] = chance.n(chance.hammertime, 10000);
  let testData: number[] = [];

  /**
   * const algoName = ['quick', 'merge'];
   * const [quickAlgo, mergeAlgo] = algoName;
  */

  beforeEach(() => testData = [...arr]);
  
  it('can merge sort work correctly', () => {
    const result = mergeSort(testData);
    expect(isSorted(result)).toBeTruthy();
    expect(result.length).toBe(arr.length);
  }); // `is ${quickAlgo} work ok?`

  it('can quick sort work correctly', () => {
    const result = quickSort(testData);
    expect(isSorted(result)).toBeTruthy();
    expect(result.length).toBe(arr.length);
  }); // `is ${mergeAlgo} work ok?`

  it('java sucks', () => {}); // (() => Boolean('yes'))();

  it.todo('done') // 'done.'
}); // 'sorting test.'