# Chapter - 04 - Talk is cheap, show me the code

### Q: Is `JSX` mandatory for React?
A: No, `JSX` is not mandatory for React, but it is the recommended and widely used way of defining the structure of your user interfaces when working with React. React can be used without JSX, but JSX makes the process of defining and working with components in React much more convenient and readable.
We can write React components using plain JavaScript functions or classes, and create React elements using `React.createElement` function. However, this approach can be less intuitive and more verbose compared to JSX.
Here's an example of creating a React component and element without JSX:
```
const element = React.createElement('h1', null, 'Hello, React without JSX!');

class App extends React.Component {
  render() {
    return React.createElement('div', null, element);
  }
}
```
As you can see, it's less readable and more cumbersome compared to the JSX equivalent:

```
const element = <h1>Hello, React with JSX!</h1>;

class App extends React.Component {
  render() {
    return <div>{element}</div>;
  }
}
```
While JSX is not mandatory, it is highly recommended for most React development because it provides a more natural and expressive way to define the structure of your components and is widely adopted by the React community. JSX is also the approach you will find in most React documentation and tutorials.
---
### Q: Is ES6 mandatory for React?
A: `ES6 (ECMAScript 2015)` is not mandatory for React, but it is highly recommended and widely used in React development. React itself does not require ES6, and we can write React applications using older versions of JavaScript, such as ES5. 
However, using ES6 or a more recent version of JavaScript has several advantages:

`Enhanced Syntax` - ES6 introduces many features and syntactical improvements that make our code more concise and readable. Features like `arrow functions`, `template literals`, `destructuring`, and `classes` can significantly improve our code quality and maintainability.

`Module System` - ES6 introduced a standardized module system, allowing us to use `import` and `export` statements for better code organization and dependency management in React applications.

`Arrow Functions` - Arrow functions provide a more concise way to define functions, and they have lexical scoping, making it easier to work with this in React components.

`Class Syntax` - ES6 class syntax is commonly used for defining React components, providing a clear and more structured way to create components.

`Default Parameters` - ES6 allows us to set default parameter values for function arguments, which can make our code more robust.

`Spread and Rest Operators` - These operators are useful for working with arrays and objects, which are common in React applications.

`Template Literals` - Template literals provide a more convenient way to work with strings.

However, adopting ES6 and modern JavaScript practices is generally recommended for a more productive and maintainable React development experience.
---
