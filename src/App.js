import { Route, Routes,Navigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { logout, getProtected } from './Login/api'
import Home from "./Home/index";
import Navbar from "./Navbar";
import Budget from "./Budget";
import Report from "./Report";
import Login from "./Login/";



function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getProtected()
      .then(setUser)
      .catch(() => setUser(null))
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/Home" /> : <Login setUser={setUser} />} />
        <Route path="/Home" element={user ? <Home  /> : <Navigate to="/" />} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/Report" element={<Report />} />
      </Routes>
      {user && <button onClick={() => { logout(); setUser(null) }}>Logout</button>}
    </>
  );
}

export default App;
