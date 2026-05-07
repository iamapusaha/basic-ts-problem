// problem 01
const filterEvenNumbers = (input: number[]): number[] => {
  return input.filter((e) => e % 2 === 0);
};

// console.log(filterEvenNumbers([1, 3, 8, 7, 5, 96, 12]));

//problem 02
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

// console.log(reverseString("typescript"));

//problem 03
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};
// console.log(checkType(null));
