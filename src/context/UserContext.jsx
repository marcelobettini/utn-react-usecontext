import { createContext, useState } from "react";
const initValue = {
    name: "Marcelo Eduardo",
    lastName: "Bettini Michiels",
    email: "marcelobettini@yahoo.com.ar",
};

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(initValue)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}