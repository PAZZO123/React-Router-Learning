import { Link } from 'react-router-dom';
import { products } from '../data/products';
function Products() {
 return (
 <div className='max-w-6xl mx-auto py-12 px-4'>
 <h1 className='text-4xl font-bold text-gray-800 mb-8'>Products</h1>
 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
 {products.map(product => (
 <Link
 key={product.id}
 to={`/products/${product.id}`}
 className='block bg-white rounded-2xl shadow-sm border border-gray-100
 hover:shadow-md hover:-translate-y-0.5 transition-all'
 >
 <div className='p-6'>
 <span className='text-xs uppercase tracking-wide text-blue-600
 font-semibold bg-blue-50 px-2 py-1 rounded-full'>
 {product.category}
 </span>
 <h2 className='text-xl font-bold text-gray-800 mt-3'>
 {product.name}
 </h2>
 <p className='text-gray-500 text-sm mt-1 line-clamp-2'>
 {product.description}
 </p>
 <p className='text-2xl font-bold text-blue-800 mt-4'>
 ${product.price}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 );
}
export default Products;