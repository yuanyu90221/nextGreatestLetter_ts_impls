import { FindSmallestLetter } from "./smallestLetter";

describe('smallestLetter', () => {
  it('Example1', () => {
    expect(FindSmallestLetter(["c", "f", "j"], "a")).toEqual("c");
  });
  it('Example2', () => {
    expect(FindSmallestLetter(["c", "f", "j"], "c")).toEqual("f");
  });
  it('Example3', () => {
    expect(FindSmallestLetter(["c", "f", "j"], "d")).toEqual("f");
  });
  it('Example4', () => {
    expect(FindSmallestLetter(["c", "f", "j"], "j")).toEqual("c");
  });
  it('Example5', () => {
    expect(FindSmallestLetter(["c", "f", "j"], "k")).toEqual("c");
  });
});