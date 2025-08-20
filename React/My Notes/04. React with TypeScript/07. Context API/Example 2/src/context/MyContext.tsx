import { createContext, useState, type FC, type ReactNode } from "react";

// Define a type for your context data
type MyContextData = {
    value:string;
    setValue: (newValue:string) => void;
}

// Create a context with an initial value
const MyContext = createContext<MyContextData | undefined>(undefined);

// Create a type for provider component
type MyContextProviderProps = {
    children: ReactNode;
}

// creating provider
export const MyContextProvider:FC<MyContextProviderProps> = ({children}) =>{
    const [value,setValue] = useState<string>("");

    const contextValue:MyContextData = {
        value,
        setValue,
    };
    return (
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    );
};

export default MyContext;