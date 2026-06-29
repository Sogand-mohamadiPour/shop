import Image from "next/image";
import type { Product } from "../../types/product";
// import type { Product } from "@/types/Product";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
      
      <div className="relative w-full h-40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h2 className="mt-3 font-semibold text-lg text-gray-700">
        {product.name}
      </h2>

      <p className="text-gray-600">
        ${product.price}
      </p>

      <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;