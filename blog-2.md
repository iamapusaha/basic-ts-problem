# how `Pick` and `Omit` help keep code dry in TypeScript

## Introduction

When learning TypeScript, I Found sometimes we need different version of the same interface.writing multiple similer interfaces again and again can make code messy and repetitive

TypeScript provides utility types like `pick` and `omit` to solve this problem and keep code DRY (Don't Repeat Yourself)

# What is `pick`?

`pick` is used to create a new type by selecting only some properties from a main interface.

Example:

```
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserProfile = Pick<User, "name" | "email">;
```

Now `userProfile` only contains `name` and `email`.
we do not need to write a new interface again.

# what is `omit`?

omit works opposite of `pick`. it removes specific properties from an interface.

```
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
```

Now `publicUser` contains everythings except `password`

## Hoe they prevent code duplication

Without `pick` and `omit`,we may write many similar interdaces manually.

```
interface UserProfile {
  name: string;
  email: string;
}
```

This creates duplicate code because these properties already exist in `User`.
If later we change the orginal interface.we may also need to update all copied interfaces.This can create bus and waste time.

Using `pick` and `omit`,all types stay connected with master interface.

# How it keeps code DRY

DRY means "Don't Repeat Youeself".
`pick` and `omit` help us reuse existing interdaces instead of rewriting the same properties many times.

Benefits:

- Less repeated code
- Easier to manage
- Cleaner project structure
- Lower chance of bugs
- Faster development

## Conclusion

`pick` and `omit` are very utility type in TypeScript.They help create smaller specialized "slices" from a master interface without rewritind code again.

BeCause of this, code stays more DRY, clean and easier to maintain.
