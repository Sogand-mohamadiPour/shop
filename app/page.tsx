// import Image from "next/image";
// import Header from "@/src/components/Header/Header";

import Products from "@/src/components/Product/Products";
import { products } from "@/src/data/product";


export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl p-6">
        <Products products={products} />
      </main>
    </>
  );
}
