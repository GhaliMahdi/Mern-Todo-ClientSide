import './App.css'
import Register from './pages/Register'
import Welcome from './pages/Welcome'
import { Routes, Route } from "react-router-dom"
import React, { useState } from "react"
import Login from './pages/Login'

export const Credntials = React.createContext()
function App() {
  const credentialsState = useState({
    username: "test",
    password: "test"
  })
  
  return (
    <div className="App">
        <Credntials.Provider value={credentialsState}>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/register" element={ <Register /> } />
            <Route exact path="/login" element={ <Login />} />
          </Routes>
        </Credntials.Provider>
    </div>
  )
}

export default App
