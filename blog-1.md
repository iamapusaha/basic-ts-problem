## Why any is Called a "Type Safety Hole" and Why unknown is Safer

Introduction: when learning TypeScript, i found two special types called 'any' and 'unknown'.At first they look similar, but actully they work very differenly.

## Why 'any' is Called a type safety hole

'any' disables TypeScript type checking.After using 'any',We can do anythings with the varable and TypeScript will not show errors.

```
let value: any = "Hello";

value.toUpperCase();
value.toFixed(2);
```

Here `toFixed()` is not a string method , but TypeScript still allows it beacuse of any.

that is why `any` **is called a type safer hole**.it's breaks the safety system of the TypeScript and can create runtime bugs.

## why `unknown` is safer

`unknown` is safer beacause typescript forces us to check the type before using the value.

```
let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

here we first check if the value is a string.then TypeScript allows string methods safely.

##what is Type Narrowing?
Type narrowing means checking a variable type and making it more specific.

```
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

in the example:

- inside the `if` block, TypeScript knows `value` is a string
- inside the `else` block, TypeScript knows `value`is a number
  This process is Called **type narrowing **

## Conclusion

`any` is dangerous because it removes type safety from TypeScript.On the other hand, `unknown` is safer because we must check the type before using it.

For better and safer TypeScript code, using `unknown` is usually a better choice than `any`.
