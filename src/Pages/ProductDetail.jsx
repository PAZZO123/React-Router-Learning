import { Link, useNavigate, useParams, } from "react-router-dom";
import { products } from '../data/products';

export default function ProductDetail(){
    const {productId}=useParams();
    const  navigate =useNavigate();
    alert(productId)

 //const {userId} =useParams()
    const product=products.find(p=>p.id==productId);
    if(!product){
        return (
            <div className='text-center py-20'>
                <p className='text-gray-500 text-lg mb-4'>Product not found.</p>
                <Link to='/products'
                className='text-blue-700 hover:underline font-semibold'>
                Back to Products
                </Link>
         </div>
        )
    }

   return (
 <div className='max-w-2xl mx-auto py-12 px-4'>
 <button
 onClick={() => navigate(-1)}
 className='flex items-center gap-1 text-sm text-gray-500
 hover:text-gray-700 mb-8 transition-colors'
 >
 ← Back
 </button>
 <div className='bg-white rounded-2xl shadow-md border border-gray-100 p-8'>
 <span className='text-xs uppercase tracking-wide text-blue-600
 font-semibold bg-blue-50 px-2 py-1 rounded-full'>
 {product.category}
 </span>
 <h1 className='text-4xl font-bold text-gray-800 mt-4 mb-2'>
 {product.name}
 </h1>
 <p className='text-gray-600 leading-relaxed mb-6'>
 {product.description}
 </p>
 <div className='flex items-center justify-between'>
 <span className='text-4xl font-black text-blue-800'>
 ${product.price}
 </span>
 <button className='bg-blue-800 text-white px-6 py-3 rounded-xl
 font-semibold hover:bg-blue-700 transition-colors'>
 Add to Cart
 </button>
 </div>
 </div>
 </div>
 );}