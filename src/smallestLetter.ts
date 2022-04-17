export const FindSmallestLetter = (letters: string[], target: string): string => {
  const lastIdx = letters.length - 1;
  let lowerBound = 0;
  let upperBound = lastIdx;
  for (let mid = findMid(lowerBound, upperBound); upperBound >= lowerBound; mid = findMid(lowerBound, upperBound)) {
    if (target >= letters[mid]) {
      if (mid === lastIdx) {
        return letters[0];
      }
      lowerBound = mid + 1;
    } else if (target < letters[mid]) {
      if (mid === lastIdx) {
        return letters[mid];
      }
      upperBound = mid - 1;
    }
  }
  if (lowerBound >= lastIdx) {
    lowerBound = 0;
  }
  return letters[lowerBound];
}
const findMid = (first:number, second: number): number => {
  return Math.floor((first + second)/2);
}