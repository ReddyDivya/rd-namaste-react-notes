## Namaste React Course
# _Chapter 01 - Inception_

## Theory -
- What is `Emmet`?
- Difference between a `Library and Framework`?
- What is `CDN`? Why do we `use` it?
- Why is `React known as React`?
- What is `crossorigin in script tag`?
- What is difference between `React and ReactDOM`?
- What is difference between `react.development.js` and `react.production.js` files via CDN?
- What is `async and defer`?

## Coding -
- Set up all the `tools in your laptop`
    - `VS Code`
    - `Chrome`
    - `Extensions of Chrome`
- Create a `new Git repo`
- Build your `first Hello World` program using,
    - Using `just HTML`
    - Using `JS to manipulate the DOM`
    - Using `React`
        - use `CDN Links`
        - Create `an Element`
        - Create `nested React Elements`
        - Use `root.render`
- `Push code to Github` (Theory as well as code)
- Learn about `Arrow Functions` before the next class


## References:

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8

## Q: What is `Emmet`?
A: `Emmet` is a powerful toolkit for web developers and designers that greatly enhances their HTML and CSS workflow. It helps in writing code more quickly and efficiently by providing shortcuts for common HTML and CSS patterns. 
### **i) HTML Expansion**: Emmet allows us to quickly generate HTML code by using abbreviations.
For instance, `div>ul>li.item$*3`
```
<div>
    <ul>
        <li class="item1"></li>
        <li class="item2"></li>
        <li class="item3"></li>
    </ul>
</div>
```
### **ii) CSS Abbreviations**: Emmet also supports expanding CSS abbreviations
For instance, `m10`
```
margin: 10px;
```
### iii) Nested Elements: We can use > to nest elements within each other. 
For instance, `ul>li*3` would generate an unordered list with three list items.
```
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

### iv) Siblings: We can use + to create sibling elements. 
For instance, `div+p+bq` would create a div, followed by a p, and then a blockquote.
```
<div></div>
<p></p>
<blockquote></blockquote>
```

### v) Multiplication: We can use the * operator to create multiple elements. 
For instance, `ul>li*5` would generate an unordered list with five list items.
```
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

### vi) Numbering: Use $ to indicate a number that should be incremented in each subsequent item. 
For instance, `ul>li.item$*3` would create list items with classes item1, item2, and item3.
```
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
</ul>
```

### vii) Grouping: Parentheses can be used to group elements. 
For instance, `ul>(li.item$*2>a{Item $})*3` would generate a list with nested items and anchor tags.
```
<ul>
    <li class="item1">
        <a href="#">Item 1</a>
    </li>
    <li class="item2">
        <a href="#">Item 2</a>
    </li>
    <li class="item3">
        <a href="#">Item 3</a>
    </li>
</ul>
```

## Q: Difference between a `Library and Framework`?
A: A `Library` is a collection of pre-written code that provides specific functionalities or features. It is designed to be reused across different projects to save development time and effort.
- **Control**: When using a library, the developer maintains more control over the overall structure and flow of the application. The developer decides when and how to use the library's components and functions.
- **Usage**: Libraries are generally used to solve specific tasks or provide utilities. They are often "called" by the developer's code to perform specific actions or computations.
- **Inversion of Control**: In a library, the developer controls the flow of the application. The library doesn't dictate the overall structure or architecture of the application.

For instance, React.js is a JavaScript library developed by Facebook.
React is primarily concerned with rendering UI components and managing their state and updates. It can be integrated into different project setups and combined with other libraries to create complete applications.

A `Framework` is a structured, pre-designed architecture that provides a foundation for building an entire application. It dictates the overall structure, flow, and design patterns of the application.
- **Control**: When using a framework, the developer gives up some control over the application's structure and flow. The framework enforces certain conventions and rules that the developer must follow.
- **Usage**: Frameworks are used to build entire applications. They provide a foundation and a set of tools to handle various aspects of application development, such as routing, database interactions, user authentication, etc.
- **Inversion of Control**: In a framework, control is often inverted, meaning the framework controls parts of the application's flow. Developers extend or customize the framework's components to build the application's logic.

For instance, Angular is a front-end framework developed by Google.
Angular is used for building dynamic and feature-rich web applications, particularly single-page applications (SPAs).

## Q: What is `CDN`? Why do we `use` it?
A: `CDN` stands for Content Delivery Network. It is a network of distributed servers located in various data centers around the world.
The primary purpose of a CDN is to deliver web content, such as images, videos, scripts, stylesheets, and other static or dynamic resources, to users more efficiently and with higher performance.
A CDN solves this problem by replicating the website's content on multiple servers spread across various geographic locations. When a user requests a specific piece of content, the CDN automatically routes the request to the nearest server in its network. This way, the content is delivered from a server closer to the user, reducing latency and ensuring faster loading times.

### Key benefits of using a CDN include:
- **Improved website performance:** Faster load times and reduced latency leads to a better user experience, lower bounce rates, and higher engagement.
- **Scalability:** CDNs can handle large amounts of traffic and distribute it across their network, reducing the load on the origin server.

## Q: Why is `React known as React`?







