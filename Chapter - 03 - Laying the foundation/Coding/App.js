import React from 'react';
import { createRoot } from 'react-dom/client';

//JSX => HTML like syntax
const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>

//React element
const title = (
   <h1 className="heading">
        This is a React Element
   </h1>
);

//Functional component
const Heading1 = () => (
    <h1 className="heading">This is a heading component</h1>
);

//Functional component
const Heading = () => (
    <div id="container">
        {title} {/* React element */}
        {Heading1()} {/*method 1 - function call*/}
        <Heading1/> {/*method 2 - functional component*/}
        <Heading1></Heading1> {/*method 3 - functional component*/}
        <h2 className="heading">This is a Functional Component</h2>
        <h3>{200+400}</h3> {/* JavaScript */}
        {<span>This is javascript inside the component</span>}
    </div>
)

//Rendering react
const root = createRoot(document.getElementById("root"));

// root.render(jsxHeading);//rendering JSX
root.render(<Heading/>);//rendering the functional component
// root.render(title);//rendering the react element
