import './App.css'
import Card from './Components/Card'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContext/UserContextProvider'

function App() {

  return (
    <>

      <UserContextProvider>

        <Profile />
        <Card/>

      </UserContextProvider>


    </>
  )
}

export default App
