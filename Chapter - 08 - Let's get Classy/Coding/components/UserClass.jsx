import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //print "Namaste React" for every second
        this.timer = setInterval(() => {
            console.log("Namaste React");
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return ( 
        <div>
            <h3>User class</h3>
        </div>)
    }
}

export default UserClass;

/*
This is an issue
-----------------
About's constructor.
About's render.
About's did mount.
Namaste React - prints 13+
About's will unmount. 

---- navigated to other component, still the set interval is running and another interval is created -----
Namaste React  - prints 20+

to fix this issue clean up is important, componentWillUnmount
*/
