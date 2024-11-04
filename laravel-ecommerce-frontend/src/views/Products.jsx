// export default function Product(){
//     return(
//         <div>


//         <header className="bg-white shadow">
//         <div className="mx-auto max-w-full px-4 py-6 sm:px-6 lg:px-8">
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900">Products</h1>
//         </div>
//       </header>
//       <main>
//         <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//          Products
//         </div>
//       </main>

//       </div>
//     )
// }

// import React from 'react';

// // Mock data for 10 gift items
// const products = [

// ];

// const ProductPage = () => {
//     return (
//         <div className="flex flex-wrap justify-center p-6">
//             {products.map(product => (
//                 <div key={product.id} className="max-w-sm w-full m-4 p-4 border rounded-lg shadow-md">
//                     <img 
//                          src={product.image} 
//                         alt={product.name} 
//                         className="w-full h-48 object-cover mb-4 rounded-lg" 
//                     />
//                     <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//                     <p className="text-gray-700 mb-2">{product.description}</p>
//                     <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
//                         Add to Cart
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProductPage;

import React from 'react';
import { useStateContext } from "../context/ContextProvider";
import PageComponent from '../components/PageComponent';
import TButton from '../components/core/TButton';
import { Link } from 'react-router-dom';

export default function Products() {
    const { products } = useStateContext();

    return (
        <PageComponent title="Our Products">
            <div className="flex flex-wrap justify-center p-6">
                {products.map(product => (
                    <div key={product.id} className="max-w-sm w-full m-4 p-4 border rounded-lg shadow-md">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover mb-4 rounded-lg"
                        />
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-700 mb-2">{product.description}</p>
                        <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>

                        <div className="flex justify-between items-center">
                            <TButton onClick={() => alert(`${product.name} added to cart!`)}>Add to Cart</TButton>
                            <Link to={`/product/${product.id}`} className="text-blue-500 hover:text-blue-700 ml-4">
                                View
                            </Link>
                        </div>

                    </div>
                ))}
            </div>
        </PageComponent>
    );
}
