import { NavLink, Outlet } from 'react-router-dom';
function sideLink({ isActive }) {
 return [
 'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transitioncolors',
 isActive
 ? 'bg-blue-700 text-white'
 : 'text-blue-100 hover:bg-blue-700/50',
 ].join(' ');
}
function DashboardLayout() {
 return (
 <div className='flex min-h-[calc(100vh-64px)]'>

 <aside className='w-56 bg-blue-800 text-white flex-shrink-0 p-4'>
 <p className='text-xs uppercase tracking-widest text-blue-300 mb-4 px-4'>
 Dashboard
 </p>
 <nav className='flex flex-col gap-1'>
 <NavLink to='/dashboard' end className={sideLink}>
 📊 Overview
 </NavLink>
 <NavLink to='/dashboard/analytics' className={sideLink}> 📈 Analytics</NavLink>

         
 <NavLink to='/dashboard/users' className={sideLink}>
 👥 Users
 </NavLink>
 <NavLink to='/dashboard/settings' className={sideLink}>
 ⚙️ Settings
 </NavLink>
 </nav>
 </aside>
 {/* Main content area — child route renders here */}
 <main className='flex-1 bg-gray-50 p-8 overflow-y-auto'>
 <Outlet />
 </main>
 </div>
 );
}
export default DashboardLayout;