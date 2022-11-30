import runIt from './tools/runIt.js';

import mergeSort from './utils/merge.js';
import quickSort from './utils/quick.js';

import Chance from 'chance';

const chance: Chance.Chance = new Chance();

const testData: number[] = chance.n(chance.hammertime, 10000);
let results: any[] = [];

const algorithms: Function[] = [
  mergeSort,
  quickSort
]
algorithms.forEach(algorithm => {
  runIt(algorithm as Function, testData, results);
})

console.table(results.sort((first: any, second: any) => first.time - second.time));