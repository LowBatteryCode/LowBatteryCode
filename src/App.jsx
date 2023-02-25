import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Actualizaciones from "./pages/Actualizaciones";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Actualizaciones" element={<Actualizaciones />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
