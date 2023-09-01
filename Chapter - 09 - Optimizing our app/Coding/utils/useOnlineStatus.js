import { useState, useEffect } from "react";

//This custom hook is responsible for check if there's internet or not  which is a single responsible.
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    //calls only once after the initial component render
    useEffect(() => {
        //check if offline
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        //check if online
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, []);

    return onlineStatus;
};//useOnlineStatus

export default useOnlineStatus;