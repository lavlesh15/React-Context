import React, { useState } from 'react';
import userContext from './UserContext';


function UserContextProvider({ children }) {

  const [user, setUser] = useState("Lavlesh Singh")

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider