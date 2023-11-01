# Chapter 06 - Exploring the world

### Q: What is `Microservice`?
A: A `Microservice` is a software architectural style that structures an application as a collection of small, independent, and loosely coupled services. Each service in a microservices architecture is designed to perform a specific, well-defined function and can run as an independent process. These services communicate with each other through well-defined APIs (typically over HTTP or other lightweight protocols) and often make use of data storage systems and other infrastructure components.

Key characteristics of microservices include:

`Decomposition` - In a microservices architecture, a monolithic application is decomposed into multiple smaller services. Each service is responsible for a specific aspect of the application's functionality. For example, one service might handle user authentication, while another manages product catalog information.

`Independence` - Each microservice is independent and has its codebase, database, and often its technology stack. This independence allows teams to develop, deploy, and scale individual services without affecting the entire application.

`Loose Coupling` - Microservices communicate with each other through well-defined APIs or contracts, which enables loose coupling. This means that changes to one service should not impact other services as long as the API contract remains stable.

`Scalability` - Microservices can be scaled independently. Services that experience higher demand can be scaled out, while others can remain unchanged. This provides efficient resource allocation.

`Flexibility` - Microservices are well-suited for applications that require flexibility. Developers can use different technologies and programming languages for different services, allowing them to choose the best tool for the job.

`Resilience` - Microservices are designed to be resilient. If one service fails, it should not bring down the entire application. Redundancy and failover mechanisms can be implemented.

`Continuous Deployment` - Microservices make it easier to implement continuous integration and continuous deployment (CI/CD) practices, as individual services can be deployed and updated independently.

`Ownership` - Teams can take ownership of specific microservices, making it easier to assign responsibility for different parts of the application.

`Microservices` architectures are often used in large and complex applications, such as e-commerce platforms, social media networks, and financial systems, where the ability to scale and maintain individual parts of the system is crucial. However, they also introduce challenges, such as managing inter-service communication, data consistency, and the increased complexity of deployment and monitoring. Proper design, tooling, and best practices are essential to realizing the benefits of a microservices architecture while addressing its challenges.

---

### Q: What is `Monolith architecture`?
A: A `monolithic` architecture, also known as a monolithic application, is a traditional software architectural style in which an entire application is built as a single, self-contained unit. In a monolithic architecture, all components and functionalities of the application, such as user interfaces, business logic, and data access, are tightly integrated and packaged together. This contrasts with microservices architecture, where the application is decomposed into a collection of small, independent services.

Key characteristics of a monolithic architecture include:

`Single Codebase` - In a monolithic application, all the code for different application parts is typically written in the same codebase. This codebase can be organized into different modules or packages, but it's all part of the same project.

`Tight Coupling` - Components and modules within a monolithic application are tightly coupled, meaning they often depend on each other. Changes to one part of the application can have ripple effects on other parts, making it harder to isolate and maintain individual features.

`Single Deployment Unit` - The entire application is deployed as a single unit. When updates or changes are made, the entire monolith must be redeployed. This can lead to longer deployment cycles and increased risk.

`Scaling Challenges` - Scaling a monolithic application can be challenging. If one part of the application requires more resources to handle increased load, the entire application must be scaled, which can be inefficient.

`Technology Stack` - In a monolithic architecture, the entire application typically uses the same technology stack, programming language, and frameworks. This limits the flexibility to use different technologies for different parts of the application.

`Development Team Structure` - Monolithic applications often have development teams working on different features, but all within the same codebase. Teams need to coordinate closely to avoid conflicts and to ensure changes do not disrupt other parts of the application.

`Testing and Debugging` - Testing and debugging a monolithic application can be complex, as changes can impact various parts of the application. Comprehensive testing is required to ensure that updates do not introduce bugs or break existing functionality.

`Resource Allocation` - All resources, such as databases and servers, are shared among the components of the monolith, which can lead to resource contention and performance issues.

Monolithic architectures are a common choice for smaller applications and for projects where simplicity and speed of development are prioritized. However, as applications grow in complexity and scale, monolithic architectures can become less maintainable and harder to evolve. This has led to the adoption of alternative architectures like microservices, which decompose the application into smaller, more manageable components.

---

### Q: What is the difference between `Monolith` and `Microservice`?
A: 
| Characteristics | Monolithic Architecture | Microservice Architecture |
| :--- | :--- | ---: |
| Architecture | Single, self-contained application | Collection of small, independent services | 
| Codebase | Single codebase for the entire application | Multiple codebases for individual services | 
| Coupling	| Tight coupling between components | Loose coupling between services | 
| Deployment Unit | Single deployment unit | Individual service deployment |
| Scalability | Application scaled as a whole | Services scaled independently | 
| Technology Stack | Single technology stack for the entire application | Flexibility to use different technologies for each service | 
| Development Teams | Single development team working on the same codebase | Teams can own and develop individual services | 
| Testing and Debugging | Complex testing and debugging due to tight integration | Easier testing and debugging of isolated services |
| Resource Allocation | Shared resources among all components | More efficient resource allocation for individual services |
| Deployment | Slower deployment cycles due to the need to redeploy the entire monolith | Faster and more frequent deployments of individual services |
| Change Impact | Changes can impact other parts of the application | Changes are isolated and have limited impact |
| Complexity | Simpler for small applications but can become complex as the application grows | Suitable for complex applications but introduces its own challenges |

![image](https://github.com/ReddyDivya/rd-namaste-react-notes/assets/34181144/b0a72a0b-29f0-4f85-8b72-7f2e03608e4d)

---

### Q: Why do we need `useEffect Hook`?
A: The `useEffect` hook is an essential part of React, a popular JavaScript library for building user interfaces. `It's used to manage side effects in functional components`. Side effects are actions that occur outside the normal flow of a React component, such as `data fetching`, `DOM manipulation`, and `subscribing to external data sources`.

Here are several reasons why the useEffect hook is necessary:

`Data Fetching` - In many applications, we need to fetch data from external sources, like an API, when a component is rendered. The useEffect hook allows us to perform these data-fetching operations after the initial rendering.

`DOM Manipulation` - Sometimes, we may need to interact with the Document Object Model (DOM) directly. For instance, we might want to update the title of a webpage or manipulate the size and position of DOM elements. useEffect is used for these purposes.

`Subscriptions` - If our component needs to subscribe to external events, like `WebSocket connections` or `real-time updates from a server`, useEffect is a suitable place to `manage and clean up these subscriptions`.

`Lifecycle Events` - React components have lifecycles, and useEffect allows us to perform actions at specific points in a component's lifecycle. We can control when code is executed, such as when the component mounts, updates, or unmounts.

`Avoiding Memory Leaks` - Using useEffect, we can ensure that any `resources or event listeners we create in a component are cleaned up when the component is unmounted`. This helps prevent `memory leaks and ensures our application runs efficiently`.

`Conditional Effects` - We can use useEffect with dependencies to run code conditionally when certain values change. This allows us to react to changes in state or props and execute side effects accordingly.

`Separation of Concerns` - The useEffect hook promotes a more organized and maintainable code structure by separating the logic for side effects from the rendering logic within a component.

Here's a basic example of how useEffect is used to fetch data:

```
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This code will run after the component is mounted.
    // You can fetch data here and update the state when it's available.
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array means this effect runs once after the initial render.

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MyComponent;
```

In this example, the useEffect hook is used to fetch data when the component is mounted, ensuring that the side effect of data fetching occurs at the appropriate time in the component's lifecycle.

---

### Q: What is `Optional Chaining`?
A: `Optional chaining` is a feature in modern JavaScript that provides a concise and safe way to access properties and methods on potentially null or undefined objects without causing runtime errors. It's denoted by the `?.` syntax and is particularly useful when dealing with `deeply nested object structures` or when we're unsure if a property or method exists.

Here's how optional chaining works:

1 `Accessing Object Properties` - When we use optional chaining to access object properties, it checks if the property we're trying to access exists. If the property is present, it `returns its value; otherwise, it returns undefined`.
```
const person = {
  name: "John",
  address: {
    city: "New York",
  },
};

const city = person.address?.city; // "New York"
const country = person.address?.country; // undefined
```

2 `Invoking Object Methods - We can also use optional chaining to call methods on objects. It ensures the method is called only if it exists.
```
const car = {
  start: function () {
    console.log("Car started");
  },
};

car.start?.(); // "Car started"
car.stop?.(); // No error, nothing happens (undefined is returned)
```

3 `Handling Arrays` - Optional chaining can also be used with arrays to access elements by their index. It returns undefined if the index is out of bounds.
```
const numbers = [1, 2, 3, 4];

const firstNumber = numbers[0]; // 1
const fifthNumber = numbers[4]; // undefined
const lastNumber = numbers[4]?.(); // undefined (not a function)
```

Optional chaining is especially valuable when working with `API responses, user input, or any scenario where data might be missing or incomplete`. It helps us avoid common runtime errors like "TypeError: Cannot read property 'x' of undefined" and allows us to write more robust and concise code.

---

### Q: What is `Shimmer UI`?
A: A `Shimmer UI` is a user interface design technique used to indicate that `content is loading or placeholders are being displayed`. It involves creating a subtle animation or visual effect that gives the impression of activity or content rendering, even when the actual content has not yet loaded. Shimmer UIs are often used in applications, websites, or mobile apps to enhance the user experience during loading times.

The key characteristics of Shimmer UIs include:

`Animation` - Shimmer UIs typically involve a `gentle and repetitive animation that creates a shimmering or fading effect`, mimicking the appearance of content gradually appearing on the screen.

`Placeholder Content` - Instead of displaying empty or blank areas where content will eventually appear, a Shimmer UI shows placeholder content that resembles the expected content in terms of layout, structure, and style. This gives users a visual cue about the content that will load.

`Loading State` - Shimmer UIs are used to convey that the application or webpage is in a loading state. This is particularly useful when fetching data from a server, as it provides feedback to users that something is happening in the background.

`User Engagement` - By adding a Shimmer UI, users may feel more engaged and less frustrated during loading times because they receive visual feedback that the app is working to retrieve the data.

Here's a basic example of how a Shimmer UI might be implemented in a React component using CSS for styling:
```
import React from 'react';
import './Shimmer.css';

function ShimmerUI() {
  return (
    <div className="shimmer-container">
      <div className="shimmer-placeholder"></div>
      <div className="shimmer-placeholder"></div>
      <div className="shimmer-placeholder"></div>
    </div>
  );
}

export default ShimmerUI;
```

```
/* Shimmer.css */
.shimmer-container {
  display: flex;
  flex-direction: column;
}

.shimmer-placeholder {
  width: 100%;
  height: 20px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

In this example, the shimmer container holds placeholder elements (shimmer-placeholder) that animate with a shimmer effect, giving the appearance of content loading.

Shimmer UIs are an effective way to enhance the user experience during loading and can help reduce the perception of long wait times, making applications feel more responsive and engaging.

---

### Q: What is the difference between `JS expression` and `JS statement`?
A: `JavaScript Expression` - An expression is a piece of code that produces a value. It can be a single value, a variable, a function call, or a combination of values and operators that result in a value. Expressions can be used wherever a value is expected, such as in assignments, function arguments, and within other expressions.

**Examples of expressions:**
```
5 + 3       // Produces the value 8
"Hello"     // Produces the string value "Hello"
myVariable  // Produces the value stored in the variable myVariable
func(4)     // Calls a function and produces its return value
```

2 `JavaScript Statement` - A statement is a line of code that performs an action. It doesn't produce a value like an expression. Statements are often used to control the flow of a program, define functions, declare variables, and perform other tasks. Statements can include loops, conditionals, function declarations, and variable assignments.

**Examples of statements**:
```
if (x > 10) {
  // Conditional statement
  // Executes a block of code if x is greater than 10
}

for (let i = 0; i < 5; i++) {
  // Loop statement
  // Repeats a block of code five times
}

function greet(name) {
  // Function declaration statement
  console.log("Hello, " + name);
}

let y = 42;  // Variable assignment statement
```

In summary, expressions produce values and can be used within statements, while statements are used to `control the program's flow`, `define functions`, `declare variables`, and perform actions. Understanding the distinction between `expressions` and `statements` is important when writing JavaScript code because it affects how we structure our code and where we can use different constructs.

---

### Q: What is `Conditional Rendering`? explain with a code example.
A: `Conditional rendering` in a React application refers to the practice of displaying different content or components based on certain conditions or states. It allows us to control what is rendered in the user interface depending on the values of variables, props, or the application's current state. Conditional rendering is a fundamental concept in building dynamic and interactive user interfaces.

Here's an example of conditional rendering in a React component:
```
import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {isLoggedIn ? (
        <WelcomeUser />
      ) : (
        <Login />
      )}
    </div>
  );
}

function WelcomeUser() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <button>Log Out</button>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Please Log In</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
```

In this example, we have a simple React application with conditional rendering:

- We have a state variable isLoggedIn that determines whether a user is logged in or not. Initially, it's set to false.

- In the App component, we use a conditional rendering technique within the JSX to display different components based on the value of isLoggedIn.

- If isLoggedIn is true, the <WelcomeUser /> component is displayed, welcoming the user.
- If isLoggedIn is false, the <Login /> component is displayed, prompting the user to log in.
- The <WelcomeUser /> and <Login /> components represent different parts of the UI that are conditionally rendered based on the state. Depending on the user's login status, one of these components will be displayed.

Conditional rendering is a powerful technique for building responsive and interactive user interfaces in React. It allows us to show or hide content, components, or even entire sections of our application based on user actions, data, or other factors, providing a more personalized and dynamic user experience.

---

### Q What is `CORS`?
A: When a web page includes resources from different domains, it can introduce security and privacy concerns. Modern web browsers implement the same-origin policy, which restricts web pages from making requests to a different domain than the one that served the web page. This policy is designed to prevent malicious websites from accessing sensitive data from other domains without permission.

---

### Q What is `async` and `await`?
A: `async` and `await` are JavaScript features that simplify working with `asynchronous code` and `asynchronous operations`, such as making network requests, reading files, or waiting for timeouts. They were introduced in ECMAScript 2017 (ES8) and have become a fundamental part of modern JavaScript, making asynchronous code more readable and manageable.

Here's an overview of async and await:

`async` Function - The async keyword is used to define an asynchronous function. When a `function is declared as async, it always returns a promise`, which can resolve to a value or be rejected with an error.
Inside an async function, we can use the await keyword to pause the function's execution until a promise is resolved. This allows us to write asynchronous code in a more synchronous style.

```
async function fetchData() {
  // This function is asynchronous and returns a promise.
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return data;
}
```

2 `await` Operator - The `await keyword is used inside an async function to pause the execution of the function until a promise is resolved`. It can only be used within an async function. When an await statement is encountered, the function will pause at that point until the awaited promise is settled (resolved or rejected).

3 `Error Handling` - We can use try...catch blocks to handle errors when working with async and await. If an awaited promise is rejected, it will throw an exception that can be caught in a catch block.

```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
```

4 `Concise and Readable Code` - `async` and `await` make asynchronous code more concise and readable, as it resembles synchronous code flow. This can improve code maintainability and reduce callback hell or "Pyramid of Doom."

`async` and `await` are widely used in JavaScript for handling asynchronous operations, such as `fetching data from APIs`, `reading files`, `making database queries`, and performing other tasks that involve waiting for results. They provide a more structured and clean way to work with asynchronous code compared to using callbacks or promises directly.

---

### Q What is the use of `const json = await data.json();` in `getRestaurants()`?
A: The line `const json = await data.json();` is used in a function called `getRestaurants()` to convert the response data from a JSON API into a JavaScript object. Let me break down what this line of code does in the context of an asynchronous JavaScript function.

`data` represents the response object from a network request, typically obtained using a library like `fetch or axios`. This response object contains data in a raw format.

`.json()` is a method available on the response object that is used to `extract and parse JSON data` from the response body. It returns a promise that resolves to the parsed JavaScript object.

`await` is used within an async function to pause the execution of the function until the promise returned by data.json() is resolved. This ensures that the function won't proceed until the JSON data is ready to be used.

`const json = ...` declares a constant variable json to hold the parsed JSON data.

So, in the context of a function like getRestaurants(), this line of code waits for the JSON data to be parsed from the response object and assigns it to the json variable, which we can then work with as a JavaScript object. Here's an example:

```
async function getRestaurants() {
  try {
    const response = await fetch('https://api.example.com/restaurants');
    const data = await response.json(); // Parse the JSON response
    console.log(data); // You can now use the JSON data as a JavaScript object
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
  }
}

getRestaurants();
```

In this example, the data variable contains the parsed JSON data from the API response, and we can access and manipulate this data as needed within the getRestaurants() function.

---






