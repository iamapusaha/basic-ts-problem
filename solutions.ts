// problem 01
const filterEvenNumbers = (input: number[]): number[] => {
  return input.filter((e) => e % 2 === 0);
};

console.log(filterEvenNumbers([1, 3, 8, 7, 5, 96, 12]));
