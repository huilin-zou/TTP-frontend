import "./App.css";
import Add from "./components/Add";
import Search from "./components/Search";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Sub from "./components/Sub";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Add" element={<Add />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/Sub" element={<Sub />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
