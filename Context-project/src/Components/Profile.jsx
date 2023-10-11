import React, { useContext, useEffect } from 'react'
import userContext from '../Context/UserContext/UserContext'


function Profile() {

    const {user , setUser} = useContext(userContext);

    const changeName = () => {
        setUser("Bachi Singh")
    }

  return (
    <>
    
    <div>UserName : {user}</div>
    <button onClick={changeName}>Click</button>
    
    </>
  )
}

export default Profile