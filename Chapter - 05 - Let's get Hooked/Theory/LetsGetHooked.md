### Namaste React Course by Akshay Saini

# Chapter 05 - Let's get Hooked!

### Q: What is the difference between `Named export`, `Default export`, and `* as export`?
A: In JavaScript, when working with modules (ES6 modules), we can export values, functions, or objects from one module and import them into another. There are three common ways to export from a module: `named exports`, `default exports`, and `wildcard or namespace exports`. Here's an explanation of each:

1 `Named Exports` 
- It allows us to export multiple values, functions, or objects from a module by giving them names.
- We can export several items from a module using the export keyword followed by the export statement with a name.

**For example:**
```
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

To import these named exports in another module, we can specify the name in the import statement:
```
import { add, subtract } from './mathUtils';
```

2 `Default Exports`
- Default exports allow us to export a single value, function, or object as the default export of a module.
- We can use the export default syntax to specify the default export.

For example:
```
// main.js
const greeting = "Hello, world!";
export default greeting;
```
To import the default export, you can use any name you like, and it does not require curly braces:
```
import myGreeting from './main';
```

3 `Wildcard or Namespace Exports (* as)`
- Wildcard or namespace exports allow you to export all named exports from a module under a single namespace or object.
- To create a wildcard export, you use the export * syntax.

For example:
```
// utilities.js
export const funcA = () => { /* ... */ };
export const funcB = () => { /* ... */ };
```
To import all named exports using the wildcard or namespace syntax:
```
import * as utils from './utilities';
// You can then access them using utils.funcA, utils.funcB, etc.
```
`named exports` allow you to export multiple items with specific names, `default exports` let you export a single item, and `wildcard or namespace exports` enable you to bundle all named exports under a single object when importing. 
The choice between these export methods depends on our use case and coding style preferences.

---

### Q: What is the importance of `config.js` file?
