import isSorted from './isSorted.js';

function runIt(algo: Function, testData: number[], resultsArr: object[]): void {
  const dataCopy: number[] = [...testData];
  const startTime: number = performance.now();

  const result = algo(dataCopy);
  resultsArr.push({
    name: algo.name,
    time: performance.now() - startTime,
  });
  
  if (!isSorted(result)) {
    console.error(`Error: ${algo.name} - Sorting failed!`);
  }

  if (result.length !== testData.length) {
    console.error(`Error: ${algo.name} - Length mismatch!`)
  }
}

export default runIt;