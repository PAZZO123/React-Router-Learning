import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import NavBar from "./Pages/NavBar";


export default function App() {
  return (
    <>
      <NavBar/>
      <div className="p-6">
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}