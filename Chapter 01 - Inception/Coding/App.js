//React.createElement is a JS Object
const heading = React.createElement(
    "div", //Which element is to be created?
    {id : "parent"}, //Setting attributes to the element created
    React.createElement("div", {id : "child"}, 
    //Siblings in an array
    [React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag")])
);//what to display?

//Rendering react
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
render() => renders a JS object(heading) and 
creates the element which the browser understands and puts it up in the DOM.
*/
root.render(heading);
