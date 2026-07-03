"use client";

import { Product } from "@/src/types/product";
import { useCartStore } from "@/src/store/cartStore";

type Props = {
  product: Product;
};

export default function CartControls({ product }: Props) {
  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);

  const cartItem = items.find((i) => i.id === product.id);

  return (
    <div
      className="mt-3"
      onClick={(e) => e.stopPropagation()}
    >
      {!cartItem ? (
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-black text-white py-2 rounded cursor-pointer"
        >
          Add to cart
        </button>
      ) : (
        <div className="flex items-center justify-between border border-black rounded px-3 py-2">
          <button
            onClick={() => increase(product.id)}
            className="text-black text-xl cursor-pointer"
          >
            +
          </button>

          <span className="text-black font-medium">
            {cartItem.quantity}
          </span>

          <button
            onClick={() => decrease(product.id)}
            className="text-black text-xl cursor-pointer"
          >
            -
          </button>
        </div>
      )}
    </div>
  );
}