import { Product } from "@/src/types/product";
import ProductCard from "./ProductCard";
import Link from "next/link";

type ProductsProps = {
  products: Product[];
};

function Products({ products }: ProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard product={product} />{" "}
        </Link>
      ))}
    </div>
  );
}

export default Products;
