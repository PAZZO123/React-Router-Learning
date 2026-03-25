 import { Route, Routes } from "react-router-dom";
import DashboardLayout from './layouts/DashboardLayout';
import About from "./Pages/About";
import Analytics from './Pages/Analytics';
import Contact from "./Pages/Contact";
import DashboardHome from './Pages/DashboardHome';
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
// import ProductDetail from "./Pages/ProductDetail";
import NavBar from "./Pages/NavBar";



// export default function App() {
//   return (
//     <>
     
//       <div className="p-6">
//         <Routes>
//           <Route path=""
//          
//               <Route path='*' element={<NotFound />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

//import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";

export default function App() {
  return (<>
    <NavBar/>

      <Routes>


        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/products/:productId" element={<ProductDetail />} />
         <Route path='/' element={<Home />} />
             {/* Nested Routes */}
             <Route path='/dashboard' element={<DashboardLayout />}>
             <Route index element={<DashboardHome />} />
              <Route path='analytics' element={<Analytics />} />
             
              </Route>

      </Routes>
      </>
    
  )
}