import { Route, Routes } from "react-router-dom";
import Home from "./Home/index";
import Navbar from "./Navbar";
import Login from "./Login";
import Budget from "./Budget";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Budget" element={<Budget />} />
      </Routes>
    </>
  );
}

export default App;
