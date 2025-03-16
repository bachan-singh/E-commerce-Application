// import { useState } from 'react'
import { useContext } from 'react'
import './App.css'
import { AuthContext } from './context/auth'
import ProtectedRoutes from './routes/ProtectedRoutes';
import OpenRoutes from "./routes/OpenRoutes";

//  const AuthContext = createContext();

function App() {

  const {user} = useContext(AuthContext)

  return user ? <ProtectedRoutes /> : <OpenRoutes />
}

export default App
