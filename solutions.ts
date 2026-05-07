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

// problem 04

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// const user = { id: 1, name: "john doe", age: 21 };
// console.log(getProperty(user, "id"));

//problem 05
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (input: Book): Book & { isRead: true } => {
  return {
    ...input,
    isRead: true,
  };
};

// const myBook = {
//   title: "TypeScript Guide",
//   apple: "156",
//   author: "Jane Doe",
//   publishedYear: 2024,
// };
// console.log(toggleReadStatus(myBook));
