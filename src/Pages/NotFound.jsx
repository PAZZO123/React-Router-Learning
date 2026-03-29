import { Link, useNavigate } from 'react-router-dom';
function NotFound() {
 const navigate = useNavigate();
 return (
 <div className='min-h-[80vh] flex flex-col items-center justify-center
 text-center px-4'>
 <p className='text-8xl font-black text-blue-100 select-none leading-none'>
 404
 </p>
 <h1 className='text-3xl font-bold text-gray-800 -mt-4'>Page Not Found</h1>
 <p className='text-gray-500 mt-3 mb-8 max-w-sm'>
 The page you are looking for does not exist or has been moved.
 </p>
 <div className='flex gap-3'>
 <button
 onClick={() => navigate(-1)}
 className='border border-gray-300 text-gray-700 px-5 py-2.5
 rounded-lg font-medium hover:bg-gray-50 transition-colors'
 >
 ← Go Back
 </button>
 <Link to='/'
 className='bg-blue-800 text-white px-5 py-2.5 rounded-lg font-medium
 hover:bg-blue-700 transition-colors'
 >
 Home
 </Link>
 </div>
 </div>
 );
}
export default NotFound;
