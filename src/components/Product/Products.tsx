import { Product } from "@/src/types/product";
import ProductCard from "./ProductCard";

type ProductsProps = {
  products: Product[];
};

function Products({ products }: ProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
          <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
