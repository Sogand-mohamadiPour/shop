"use client";

import Image from "next/image";
import type { Product } from "../../types/product";
import { useCartStore } from "@/src/store/cartStore";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);

  const cartItem = items.find((i) => i.id === product.id);

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white cursor-pointer"
    >
      <div className="relative w-full h-40">
        <Image
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
        {!cartItem ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(product);
            }}
            className="mt-3 w-full bg-black text-white py-2 rounded"
          >
            Add to cart
          </button>
        ) : (
          <div className="mt-3 flex items-center justify-between border border-black rounded px-3 py-2">
            <button
              className="text-black cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                increase(product.id);
              }}
            >
              +
            </button>
            <span className="text-black">{cartItem.quantity}</span>
            <button
              className="text-black cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                decrease(product.id);
              }}
            >
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
