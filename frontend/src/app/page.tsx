"use client";
import { Hero } from "@/components/home";
import { ProductCard, FeaturedProductCard } from "@/components/product-card";
import { Product } from "@/lib/types";
import { apiUrl } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";

interface ProductResponse {
  products: Product[];
}

// const getProductData = async () => {
//   try {
//     const response = await axios.get<ProductRespons>(`${apiUrl}/products`);
//     return response.data.products;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw new Error("Failed to fetch data");
//   }
// };

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const getProductData = async () => {
    try {
      const response = await axios.get(`${apiUrl}products`);
      if (response.status === 200) {
        setProducts(response.data.products);
        console.log("data from be", response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // throw new Error("Failed to fetch data");
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  // const products = await getProductData();
  console.log("PROD", products);
  return (
    <main>
      <Hero />
      <section className="mt-6 mb-24 max-w-[1100px] mx-auto grid grid-cols-4 gap-y-12 gap-x-5">
        {products.map((product, index) => {
          return (
            <>
              {index === 6 || index === 7 ? (
                <FeaturedProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  images={product.images}
                  discount={product.discount}
                  _id={product._id}
                />
              ) : (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  images={product.images}
                  discount={product.discount}
                  _id={product._id}
                />
              )}
            </>
          );
        })}
      </section>
    </main>
  );
}

// "use client";
// import { Hero } from "@/components/home";
// import { ProductCard, FeaturedProductCard } from "@/components/product-card";
// import { Product } from "@/lib/types";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <section className="mt-6 mb-24 max-w-[1100px] mx-auto grid grid-cols-4 gap-y-12 gap-x-5">
//         {products.map((product, index) => {
//           return (
//             <>
//               {index === 6 || index === 7 ? (
//                 <FeaturedProductCard
//                   key={index}
//                   name={product.name}
//                   price={product.price}
//                   images={product.images}
//                   discount={product.discount}
//                 />
//               ) : (
//                 <ProductCard
//                   key={index}
//                   name={product.name}
//                   price={product.price}
//                   images={product.images}
//                   discount={product.discount}
//                 />
//               )}
//             </>
//           );
//         })}
//       </section>
//     </main>
//   );
// }
