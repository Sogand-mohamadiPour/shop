// import type { Product } from "@/types/Product"; ????
import type { Product } from "../../types/Product";
import ProductCard from "./ProductCard";

type ProductsProps = {
  products: Product[];
};

function Products({ products }: ProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
