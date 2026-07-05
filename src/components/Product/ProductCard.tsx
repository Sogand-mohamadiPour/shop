"use client";

import type { Product } from "../../types/product";
import CartControls from "../Cart/CartControls";
import { useRouter } from "next/navigation";
import SafeImage from "../Ui/SafeImage";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white cursor-pointer"
    >
      <div className="relative w-full h-40">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-lg border border-blue-200"
        />
      </div>

      <h2 className="mt-3 font-semibold text-lg text-gray-700">
        {product.name}
      </h2>

      <p className="text-gray-600">${product.price}</p>

      <div onClick={(e) => e.stopPropagation()} className="mt-3">
        <CartControls product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
