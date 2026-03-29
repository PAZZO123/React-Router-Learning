import { NavLink } from 'react-router-dom';
// Helper: returns classes based on isActive
function navClass({ isActive }) {
 return isActive
 ? 'text-sm font-semibold text-amber-300 border-b-2 border-amber-300 pb-0.5'
 : 'text-sm font-medium text-white hover:text-blue-200 transition-colors';
}
function NavBar() {
 return (
 <header className='bg-blue-800 text-white shadow-lg'>
 <div className='max-w-6xl mx-auto px-6 py-4
 flex items-center justify-between'>
 <NavLink to='/' className='text-2xl font-bold hover:text-blue-200'>
 MyApp
 </NavLink>
 <nav className='flex items-center gap-6'>
 <NavLink to='/' end className={navClass}>Home</NavLink>
 <NavLink to='/about' className={navClass}>About</NavLink>
 <NavLink to='/products' className={navClass}>Products</NavLink>
 <NavLink to='/login' className={navClass}>Login</NavLink>
  <NavLink to='/dashboard' className={navClass}>Dashboard</NavLink>
  <NavLink to='/dummy' className={navClass}>Not Found</NavLink>
  <NavLink to='/search' className={navClass}>Search</NavLink>
 </nav>
 </div>
 </header>
 );
}
export default NavBar;