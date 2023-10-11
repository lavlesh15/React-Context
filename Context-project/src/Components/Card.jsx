import React, { useContext } from 'react';
import userContext from '../Context/UserContext/UserContext';


function Card() {

    const {user , setUser} = useContext(userContext)

    const handleChange = () => {
        setUser("Priya Singh");
    }

  return (
    <div>

        <h5>
            Card : {user}
        </h5>

        <button onClick={handleChange}>
            Card Button
        </button>

    </div>
  )
}

export default Card