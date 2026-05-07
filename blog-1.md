## Why any is Called a "Type Safety Hole" and Why unknown is Safer

Introduction: when learning TypeScript, i found two special types called 'any' and 'unknown'.At first they look similar, but actully they work very differenly.

## Why 'any' is Called a type safety hole

'any' disables TypeScript type checking.After using 'any',We can do anythings with the varable and TypeScript will not show errors.

```
let value: any = "Hello";

value.toUpperCase();
value.toFixed(2);
```
