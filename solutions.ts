// problem 01
const filterEvenNumbers = (input: number[]): number[] => {
  return input.filter((e) => e % 2 === 0);
};

//problem 02
const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

//problem 03
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// problem 04

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

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

// problem 06
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// problem 07
const getIntersection = (input1: number[], input2: number[]): number[] => {
  return input1.filter((e) => input2.includes(e));
};
