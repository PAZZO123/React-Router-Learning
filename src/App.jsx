import { Route, Routes } from "react-router-dom";
//import About from "./Pages/About";
//import Contact from "./Pages/Contact";
import DashboardLayout from './layouts/DashboardLayout';
import Analytics from './Pages/Analytics';
import DashboardHome from './Pages/DashboardHome';
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";


export default function App() {
  return (
    <>
     
      <div className="p-6">
        <Routes>
          <Route path='/' element={<Home />} />
              {/* Parent route = layout; children = pages */}
              <Route path='/dashboard' element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path='analytics' element={<Analytics />} />
             
              </Route>
              <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}