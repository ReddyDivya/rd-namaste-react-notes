import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("1. Parent's constructor.");
    }

    componentDidMount(){
        console.log("6. Parent's did mount.");
    }

    componentWillUnmount(){
        //called when we're leaving the component
        console.log(`8. Parent's will unmount.`);
    }//componentWillUnmount


    render(){
        console.log("2. Parent's render.");

        return( 
            <>
                <h2 className="font-bold text-slate-700 m-4">ABOUT US</h2>
                <User/>
            </>
            )
    }//render
}

export default About;

/*
---- Mounting Phase ----
1. Parent's constructor.
2. Parent's render.
3. First Child's constructors
4. First Child's render
	
	----- Component did mount is called after first render -----
5. First Child's did mount.
6. Parent's did mount.

---- Updating Phase is called after every render after first render ----
4. First Child's render
7. First Child's did update.

----- Component unwill mount phase -----
8. First Child's will unmount.
9. Parent's will unmount.
*/
