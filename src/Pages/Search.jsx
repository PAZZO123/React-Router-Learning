import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
const CATEGORIES = ['all', 'shoes', 'clothes', 'accessories'];
const SORTS = [{ value: 'name', label: 'Name (A–Z)' },
 { value: 'price-asc', label: 'Price: Low → High' },
 { value: 'price-desc', label: 'Price: High → Low' },
];
export default function AllProducts() {
 const [searchParams, setSearchParams] = useSearchParams();
 const search = searchParams.get('search') || '';
 const category = searchParams.get('category') || 'all';
 const sort = searchParams.get('sort') || 'name';
 function setParam(key, value) {
 setSearchParams(prev => {
 const next = new URLSearchParams(prev);
 if (value) next.set(key, value); else next.delete(key);
 return next;
 });
 }
 let filtered = products.filter(p => {
 const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
 const matchCat = category === 'all' || p.category === category;
 return matchSearch && matchCat;
 });
 if (sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
 if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
 if (sort === 'name') filtered.sort((a,b) => a.name.localeCompare(b.name));
 return (
 <div className='max-w-6xl mx-auto py-10 px-4'>
 <h1 className='text-4xl font-bold text-gray-800 mb-8'>Products</h1>
 {/* Filter bar */}
 <div className='bg-white rounded-2xl shadow-sm border border-gray-100
 p-4 mb-8 flex flex-wrap gap-3 items-center'>
 <input
 type='text' placeholder='Search products...'
 value={search}
 onChange={e => setParam('search', e.target.value)}
 className='flex-1 min-w-48 border border-gray-200 rounded-lg px-4 py-2
 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm'
 />
 <div className='flex gap-2'>
 {CATEGORIES.map(cat => (
 <button key={cat}
 onClick={() => setParam('category', cat === 'all' ? '' : cat)}
 className={[
 'px-3 py-1.5 rounded-full text-xs font-semibold transition-colors capitalize',
 category === cat
 ? 'bg-blue-800 text-white'
 : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
 ].join(' ')}
 >
 {cat}
 </button>
 ))}
 </div>
 <select
 value={sort}
 onChange={e => setParam('sort', e.target.value)}
 className='border border-gray-200 rounded-lg px-3 py-2 text-sm
 focus:outline-none focus:ring-2 focus:ring-blue-500'
 >
 {SORTS.map(s => (
 <option key={s.value} value={s.value}>{s.label}</option>
 ))}
 </select>
 </div>
 {/* Results count */}
 <p className='text-sm text-gray-500 mb-4'>
 {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
 </p>
 {/* Product grid */}
 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
 {filtered.map(product => (
 <Link key={product.id} to={`/products/${product.id}`}
 className='block bg-white rounded-2xl shadow-sm border border-gray-100
 hover:shadow-md hover:-translate-y-0.5 transition-all'>
 <div className='p-6'>
 <p className='text-xl font-bold text-gray-800'>{product.name}</p>
 <p className='text-gray-500 text-sm mt-1'>{product.description}</p>
 <p className='text-2xl font-bold text-blue-800 mt4'>${product.price}</p>
 </div>
 </Link>
 ))}
 </div>
 {filtered.length === 0 && (
 <p className='text-center text-gray-400 py-16 text-lg'>
 No products match your filters.
 </p>
 )}
 </div>
 );
}

