import React from "react";
import UserContex from "./UserContext";
import { useState } from "react";

const UserContexProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <UserContex.Provider value = {{user, setUser}}>
            {children}
        </UserContex.Provider>
    )
}


export default UserContexProvider;