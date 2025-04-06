// 'use client';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProductsFilterPage = () => {
//     type Category = {
//         slug: string;
//         name: string;
//       };
  
//       const [categories, setCategories] = useState<Category[]>([]);
//         const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch all categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get('https://dummyjson.com/products/categories');
//         setCategories(res.data);
//       } catch (error) {
//         console.error('Failed to fetch categories', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Fetch products based on selected categories
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         if (selectedCategories.length === 0) {
//           const res = await axios.get('https://dummyjson.com/products');
//           setProducts(res.data.products);
//         } else {
//           const requests = selectedCategories.map((cat) =>
//             axios.get(`https://dummyjson.com/products/category/${cat}`)
//           );
//           const responses = await Promise.all(requests);
//           const combined = responses.flatMap((r) => r.data.products);
//           setProducts(combined);
//         }
//       } catch (error) {
//         console.error('Failed to fetch products', error);
//       }
//       setLoading(false);
//     };

//     fetchProducts();
//   }, [selectedCategories]);

//   // Handle checkbox selection
//   const handleCategoryChange = (category: string) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
//     );
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Category Sidebar */}
//       <aside className="w-full md:w-64 p-4 border-r border-gray-300 bg-white">
//         <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
//         <div className="space-y-2">
//         {categories.map((categoryObj) => (
//   <label key={categoryObj.slug} className="flex items-center gap-2 capitalize">
//     <input
//       type="checkbox"
//       checked={selectedCategories.includes(categoryObj.slug)}
//       onChange={() => handleCategoryChange(categoryObj.slug)}
//       className="accent-blue-600"
//     />
//     {categoryObj.name}
//   </label>
// ))}

//         </div>
//       </aside>

//       {/* Products */}
//       <main className="flex-1 p-4">
//         {loading ? (
//           <p className="text-center text-lg">Loading products...</p>
//         ) : products.length === 0 ? (
//           <p className="text-center text-gray-500">No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white shadow rounded-lg overflow-hidden p-4"
//               >
//                 <img
//                   src={product.thumbnail}
//                   alt={product.title}
//                   className="w-full h-40 object-cover mb-2 rounded"
//                 />
//                 <h3 className="text-lg font-bold">{product.title}</h3>
//                 <p className="text-sm text-gray-600">{product.description.slice(0, 60)}...</p>
//                 <div className="mt-2 font-semibold text-blue-600">${product.price}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default ProductsFilterPage;



'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Header from '../components/header/Header';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance';



type Category = {
  slug: string;
  name: string;
};

const ProductsFilterPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
              try {
                const res = await axiosInstance.get('/products/categories');
                setCategories(res.data);
              } catch (error) {
                console.error('Failed to fetch categories', error);
              }
            };
    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        if (selectedCategories.length === 0) {
          const res = await axiosInstance.get('/products');
          setProducts(res.data.products);
        } else {
          const requests = selectedCategories.map((cat) =>
            axiosInstance.get(`/products/category/${cat}`)
          );
          const responses = await Promise.all(requests);
          const combined = responses.flatMap((r) => r.data.products);
          setProducts(combined);
        }
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [selectedCategories]);

  // Toggle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Handle Buy Now
  const handleBuyNow = (productTitle: string) => {
    alert(`You clicked Buy Now for: ${productTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 p-4 border-r border-gray-800 bg-[#121212]">
          <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
          <div className="space-y-3">
            {categories.map((categoryObj) => (
              <div key={categoryObj.slug} className="flex items-center gap-2">
                <Checkbox
                  id={categoryObj.slug}
                  checked={selectedCategories.includes(categoryObj.slug)}
                  onCheckedChange={() => handleCategoryChange(categoryObj.slug)}
                  className="border-gray-600 text-white"
                />
                <Label htmlFor={categoryObj.slug} className="capitalize text-sm">
                  {categoryObj.name}
                </Label>
              </div>
            ))}
          </div>
        </aside>

        {/* Products */}
        <main className="flex-1 p-6">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Skeleton key={idx} className="h-60 rounded-lg bg-gray-700" />
              ))}
            </div>
          ) : products.length === 0 ? (
            <p className="text-center text-gray-400">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="bg-[#2b2b2b] text-white border-gray-700">
                  <CardContent className="p-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-40 object-cover rounded mb-3"
                    />
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {product.description.slice(0, 60)}...
                    </p>
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold text-yellow-400">${product.price}</div>
                      <div className="text-lg text-yellow-400">
                      {"★".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}</div>
                    </div>
                    <Button
                     onClick={() => router.push(`/game/${product.id}`)}
                      className="w-full"
                    >
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsFilterPage;
