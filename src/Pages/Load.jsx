function PageLoader() {
 return (
 <div className='flex flex-col items-center justify-center min-h-[60vh] gap-4'>
 {/* Spinning ring */}
 <div className='w-12 h-12 rounded-full border-4 border-gray-200
 border-t-blue-700 animate-spin' />
 <p className='text-sm text-gray-400 font-medium'>Loading page...</p>
 </div>
 );
}
export default PageLoader;