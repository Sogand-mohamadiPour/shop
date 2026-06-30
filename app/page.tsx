// import Image from "next/image";
// import Header from "@/src/components/Header/Header";

import Products from "@/src/components/Product/Products";
import SearchInput from "@/src/components/Search/SearchInput";
import { products } from "@/src/data/product";

type HomeProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q = "" } = await searchParams;

  const query = q.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-8 flex justify-center">
        <SearchInput />
      </div>
      {filteredProducts.length > 0 ? (
        <Products products={filteredProducts} />
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </main>
  );
}
