# Advanced Problem Solving with TypeScript & OOP

This repository contains solutions to several TypeScript problem-solving tasks along with two technical blog posts focused on important TypeScript concepts and best practices.

The project demonstrates the use of:

- TypeScript data types
- Interfaces and type aliases
- Functions and generics
- Array and object manipulation
- Type checking and narrowing
- Object-Oriented Programming (OOP)

---

# Project Structure

```bash
├── solutions.ts
├── blog-1.md
├── blog-2.md
└── README.md
```

| File Name      | Description                                           |
| -------------- | ----------------------------------------------------- |
| `solutions.ts` | Contains all TypeScript problem solutions             |
| `blog-1.md`    | Blog post about `any` vs `unknown` and type narrowing |
| `blog-2.md`    | Blog post about `Pick` and `Omit` utility types       |
| `README.md`    | Project overview and instructions                     |

---

# Problem Solving Guidelines

All TypeScript solutions were written following these rules:

- All solutions are placed inside a single file named `solutions.ts`
- Exact function names were used as specified
- Return values strictly match the required output format
- Meaningful variable and class names were used
- Clean and readable code structure maintained
- No unnecessary comments included

### Example

✅ Correct

```ts
return `Name: John Doe, Age: 30`;
```

❌ Incorrect

```ts
return `name: John Doe, age: 30`;
```

---

# Blog Topics

## Blog 1

### Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data?

This blog explains:

- The dangers of using `any`
- How `unknown` improves type safety
- Type narrowing concepts
- Safer handling of dynamic or external data
- Practical TypeScript examples

---

## Blog 2

### How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface?

This blog explains:

- The purpose of utility types
- Creating reusable interface structures
- Reducing duplicate code
- Maintaining DRY (Don't Repeat Yourself) principles
- Real-world TypeScript examples

---

# Technologies Used

- TypeScript
- Markdown

---

# Learning Goals

This assignment helped practice:

- Writing type-safe TypeScript code
- Understanding OOP concepts
- Using utility types effectively
- Improving problem-solving skills
- Writing technical documentation and blogs

---

# Author

Apu Saha
