import type { Product } from "@/src/types/product";
import Products from "@/src/components/Product/Products";
import SearchInput from "@/src/components/Search/SearchInput";
import Pagination from "@/src/components/Pagination/Pagination";

type HomeProps = {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const { q = "", page = "1" } = await searchParams;
  const query = q.trim().toLowerCase();

  const currentPage = Number(page) || 1;

  const apiParams = new URLSearchParams({
    _page: String(Math.max(1, currentPage)),
    _per_page: "8",
  });

  if (query) {
    apiParams.set("name:contains", query);
  }

  const response = await fetch(
    `http://localhost:4000/products?${apiParams.toString()}`,
    { cache: "no-store" },
  );

  const data = await response.json();

  const products: Product[] = data.data;
  const totalPages: number = data.pages;
  const displayPage = Math.min(Math.max(1, currentPage), totalPages || 1);

  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="mb-8 flex justify-center">
        <SearchInput />
      </div>

      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      {totalPages > 1 && (
        <Pagination currentPage={displayPage} totalPages={totalPages} />
      )}
    </main>
  );
}
