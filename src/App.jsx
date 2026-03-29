 import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "./Pages/Load";

const DashboardLayout= lazy(() =>import( './layouts/DashboardLayout'))
const  About =lazy(()=> import("./Pages/About"))
const Analytics =lazy( ()=>import('./Pages/Analytics'))
const  DashboardHome = lazy(()=> import('./Pages/DashboardHome'))
const Home =lazy(()=>import( "./Pages/Home"))
const NotFound =lazy(()=>import ("./Pages/NotFound"))
// import ProductDetail from "./Pages/ProductDetail";
//import AuthProvider from "./context/AuthContext";
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
const Login=lazy(()=>import("./Pages/Login"))
const Products=lazy(()=>import("./Pages/Product"))
const ProductDetail =lazy(()=>import ("./Pages/ProductDetail"))
const AllProducts =lazy( ()=>import("./Pages/Search"))

export default function App() {
  return (
    <>
      <NavBar />

      <Suspense fallback={<PageLoader />}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<AllProducts />} />
          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* Always last */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </>
  )
}