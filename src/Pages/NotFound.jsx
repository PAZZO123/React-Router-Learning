import { Link, useLocation } from 'react-router-dom';
function PageBreadcrumb() {
 const location = useLocation();
 console.log(location)
 return (
 <div className='text-sm text-gray-500 px-6 py-2 bg-white border-b'>
 You are on: <span className='font-mono text-blue-700'>
 {location.pathname}
 </span>
 </div>
 );
}

function NotFound() {
    
 return (
 <div className='flex flex-col items-center justify-center min-h-[70vh]
 text-center px-4'>
 <h1 className='text-9xl font-black text-blue-800 leading-none'>
 404
 </h1>
 <p className='text-2xl font-semibold text-gray-700 mt-4'>
 Page Not Found
 </p>
 <p className='text-gray-500 mt-2 mb-8'>
 The page you are looking for does not exist.
 </p>
 <PageBreadcrumb/>
 <Link
 to='/'
 className='bg-blue-800 text-white px-6 py-3 rounded-lg
 font-semibold hover:bg-blue-700 transition-colors'
 >
 Back to Home
 </Link>
 </div>
 );
}
export default NotFound;
