import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Actualizaciones from "./pages/Actualizaciones";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer/Footer";

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

        <Footer version='0.4' />
      </BrowserRouter>
    </>
  );
}

export default App;
