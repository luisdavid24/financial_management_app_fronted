import { Route, Routes } from "react-router-dom";
import Home from "./Home/index";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
