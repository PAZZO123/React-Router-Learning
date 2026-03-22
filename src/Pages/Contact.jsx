export default 

function Contact() {
  return (
<div className='max-w-lg mx-auto py-16 px-4'>
 <h1 className='text-4xl font-bold text-blue-800 mb-6'>Contact Page</h1>
 <div className='bg-white rounded-2xl shadow-md shadow-blue-800 p-8'>
 <p className='text-gray-600 mb-4'>Reach us at:</p>
 <a
 href='mailto:hello@example.com'
 className='text-blue-600 font-semibold hover:underline text-lg'
 >
 hello@example.com ✉️
 </a>
 </div>
 </div>
  );
}