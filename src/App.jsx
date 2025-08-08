import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Reservations from "./pages/reservations/Reservations";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";
import Gallery from "./pages/gallery/Gallery";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
    
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/reservations' element={<Reservations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
