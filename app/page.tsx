// import Image from "next/image";
// import Header from "@/src/components/Header/Header";

import Products from "@/src/components/Product/Products";
import SearchInput from "@/src/components/Search/SearchInput";
import { products } from "@/src/data/product";


export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl p-6">
         <SearchInput />
        <Products products={products} />
      </main>
    </>
  );
}
