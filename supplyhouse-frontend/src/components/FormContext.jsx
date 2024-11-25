import { Children, createContext, useState } from "react";

export const FormContext=createContext();

export const FormContextProvide=({children})=>{
    const[isFormVisible,setIsFormVisible]=useState(false)
    return (<FormContext.Provider value={[isFormVisible,setIsFormVisible]}>{children}</FormContext.Provider>)
}
