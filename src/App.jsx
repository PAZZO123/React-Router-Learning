import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-blue-600">Home Page</h1>
      <p className="mt-4 text-gray-600">Welcome to our app 🏡</p>
    </div>
  );
}

function About() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-green-600">About Page</h1>
      <p className="mt-4 text-gray-600">We build amazing apps !</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-purple-600">Contact Page</h1>
      <p className="mt-4 text-gray-600">Reach us anytime 📡</p>
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      
      <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyApp</h1>
        
        <div className="space-x-6">
          <Link className="hover:text-blue-400 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-blue-400 transition" to="/about">
            About
          </Link>
          <Link className="hover:text-blue-400 transition" to="/contact">
            Contact
          </Link>
        </div>
      </nav>

      
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}