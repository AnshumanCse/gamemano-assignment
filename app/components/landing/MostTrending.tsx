// "use client";

// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// const games = [
//   {
//     title: "World of Warcraft",
//     rating: 4,
//     tags: ["10k+ Players", "Action", "Adventure"],
//     release: "10th August 2022",
//     price: 48,
//   },
//   {
//     title: "The Witcher",
//     rating: 3,
//     tags: ["10k+ Players", "Action", "Adventure"],
//     release: "10th August 2022",
//     price: 48,
//   },
//   {
//     title: "Horizon",
//     rating: 5,
//     tags: ["10k+ Players", "Action", "Adventure"],
//     release: "10th August 2022",
//     price: 48,
//   },
//   {
//     title: "Valorant",
//     rating: 4,
//     tags: ["10k+ Players", "Action", "Adventure"],
//     release: "10th August 2022",
//     price: 48,
//   },
// ];

// const MostTrending = () => {
//   return (
//     <section className="border-l border-gray-500 bg-[#342e24] text-white  py-10 pl-6 pr-4">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-4xl font-bold font-mono tracking-wider text-[#DAB785]">MOST TRENDING</h2>
//         <Link href="/gamestore" className="text-sm hover:underline flex items-center gap-1 mr-5">
//           GO TO GAME STORE →
//         </Link>
//       </div>

//       <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
//         <div className="flex gap-4">
//           {games.map((game, idx) => (
//             <Card
//               key={idx}
//               className="inline-block w-64 shrink-0 bg-[#fff1c4] text-black rounded-xl shadow-md"
//             >
//               <CardContent className="p-4">
//                 <div className="flex items-center text-xs mb-2">
//                   <span className="h-2 w-2 rounded-full bg-green-500 mr-1" />
//                   <span>1200 Online</span>
//                 </div>

//                 <h3 className="text-lg font-semibold mb-1">{game.title}</h3>

//                 <div className="text-orange-400 text-sm mb-1 mt-5">
//                   {"★".repeat(game.rating)}
//                   {"☆".repeat(5 - game.rating)}
//                 </div>

//                 <div className="text-xs text-red-500 font-semibold mb-1">
//                   {game.tags.map((tag, i) => (
//                     <span key={i}>
//                       {tag}
//                       {i < game.tags.length - 1 && " • "}
//                     </span>
//                   ))}
//                 </div>

//                 <p className="text-xs text-gray-700 mb-4">
//                   Released {game.release}
//                 </p>

//                 <div className="flex justify-between items-center">
//                   <span className="font-bold text-lg">${game.price}</span>
//                   <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-lg text-sm cursor-pointer min-w-[150px]">
//                     Buy Now
//                   </button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MostTrending;
"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import axiosInstance from "@/utils/axiosInstance";

const MostTrending = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Loading state
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/products?limit=10");
        setProducts(res.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); // <-- Done loading
      }
    };

    fetchProducts();
  }, []);

  const renderSkeletonCards = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Card
        key={index}
        className="inline-block w-64 shrink-0 bg-gray-400 rounded-xl shadow-md"
      >
        <CardContent className="p-4 space-y-3">
          <Skeleton className="h-3 w-1/4 rounded-full" />
          <Skeleton className="h-4 w-3/4 rounded-md" />
          <Skeleton className="h-3 w-full rounded-md" />
          <Skeleton className="h-3 w-full rounded-md" />
          <Skeleton className="h-3 w-1/2 rounded-md" />
          <div className="flex justify-between items-center pt-2">
            <Skeleton className="h-6 w-12 rounded-md" />
            <Skeleton className="h-8 w-24 rounded-md" />
          </div>
        </CardContent>
      </Card>
    ));
  };

  return (
    <section className="border-l border-gray-500 bg-[#342e24] text-white py-10 pl-6 pr-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold font-mono tracking-wider text-[#DAB785]">
          MOST TRENDING
        </h2>
        <Link
          href="/gamestore"
          className="text-sm hover:underline flex items-center gap-1 mr-5"
        >
          GO TO GAME STORE →
        </Link>
      </div>

      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-4">
          {loading
            ? renderSkeletonCards()
            : products.slice(0, 5).map((product: any) => (
                <Card
                  key={product.id}
                  className="inline-block w-64 shrink-0 bg-[#fff1c4] text-black rounded-xl shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center text-xs mb-2">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-1" />
                      <span>
                        {product.stock > 0
                          ? `${product.stock * 100} Online`
                          : "Out of Stock"}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-1">
                      {product.title}
                    </h3>

                    <div className="text-orange-400 text-sm mb-1 mt-5">
                      {"★".repeat(Math.round(product.rating))}
                      {"☆".repeat(5 - Math.round(product.rating))}
                    </div>

                    <div className="text-xs text-red-500 font-semibold mb-1">
                      {product.tags?.map((tag: string, i: number) => (
                        <span key={i}>
                          {tag}
                          {i < product.tags.length - 1 && " • "}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-gray-700 mb-4">
                      Brand: {product.brand}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">
                        ${product.price}
                      </span>
                      <button
                        onClick={() => router.push(`/game/${product.id}`)}
                        className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-lg text-sm cursor-pointer min-w-[150px]"
                      >
                        Buy Now
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  );
};

export default MostTrending;
