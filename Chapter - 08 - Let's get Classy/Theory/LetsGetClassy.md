# Chapter 08 - Let's Get Classy

### Q: How do you `create Nested Routes react-router-dom configuration`?
A: In React applications using react-router-dom, we can create nested routes by nesting our `<Route>` components inside each other within the route configuration. 
This allows you to define routes and components hierarchically, making it easier to manage the routing structure of your application.

Here's a step-by-step guide on how to create nested routes using react-router-dom:

1 `Install react-router-dom if we haven't already`:
```
npm install react-router-dom
```

2 `Import the necessary components from react-router-dom in your application file`:
```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
```

3. Defining our route hierarchy by nesting <Route> components within each other. Typically, this is done within a component that acts as a layout or container for the nested routes. 
For example, if we have a layout component called Layout:

```
import React from 'react';
import { Route } from 'react-router-dom';

// Import your nested route components
import Home from './Home';
import About from './About';

function Layout() {
  return (
    <div>
      <h1>My App</h1>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default Layout;

```

4. In our main application file, wrap our entire application with the Router component, and use the <Switch> component to render only the first matching route:
```
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your Layout component that defines nested routes
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
```

Now we have a simple example of nested routes. In this case, the Layout component defines the `/home` and `/about` routes, and these nested routes can have their own components and nested routes as well.
We can continue to nest routes further by adding more `<Route>` components inside the Home and About components to create a more complex routing structure.
Remember that this is just a basic example, and we can customize our routing structure based on the requirements of our application. We can also use the exact prop on routes to ensure that only the exact path is matched if needed.

---

### Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
A: 

---

### Q: What is the `order of life cycle method calls in Class Based Components`?
A: `Constructor` - The constructor method is the first to be called when a component is created. It's where we typically initialize the component's state and bind event handlers.

`Render` - The render method is responsible for rendering the component's UI. It must return a React element (typically JSX) representing the component's structure.

`ComponentDidMount` - This method is called immediately after the component is inserted into the DOM. It's often used for making AJAX requests, setting up subscriptions, or other one-time initializations.

`ComponentDidUpdate` - This method is called after the component has been updated (re-rendered) due to changes in state or props. It's often used for side effects, like updating the DOM in response to state or prop changes.

`ComponentWillUnmount` - This method is called just before the component is removed from the DOM. It's used to clean up resources or perform any necessary cleanup.

For more reference [React-Lifecycle-methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

---
















