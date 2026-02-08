import React, { createContext, useState } from 'react'

export const CommonStateContext = createContext();
export default function CommonStateProvider({children}) {
    const [userName,setUserName]=useState("John Doe");
    const contextValue ={
        userName,
        setUserName
    }
  return (
<CommonStateContext.Provider  value ={contextValue}>
    {children}
</CommonStateContext.Provider>
  )
}
