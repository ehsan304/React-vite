
import './App.css'
import UserContexProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContexProvider>
     <h1>React with chai</h1>
     <Login/>
     <Profile/>
    </UserContexProvider>
  )
}

export default App
