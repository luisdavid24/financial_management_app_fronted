import { Route, Routes,Navigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getProtected } from './Login/api'
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
      {user && <Navbar user={user} setUser={setUser}/> }
      <Routes>
        <Route path="/" element={user ? <Navigate to="/Home" /> : <Login setUser={setUser} />} />
        <Route path="/Home" element={user ? <Home  /> : <Navigate to="/" />} />
        <Route path="/Budget" element={user ? <Budget />: <Navigate to="/" />} />
        <Route path="/Report" element={user ? <Report />: <Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
