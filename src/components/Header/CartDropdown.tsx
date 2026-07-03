"use client";

import { useCartStore } from "@/src/store/cartStore";
import Image from "next/image";

type Props = {
  isOpen: boolean;
};

export default function CartDropdown({ isOpen }: Props) {
  const items = useCartStore((state) => state.items);

  if (!isOpen) return null;

  return (
    <div className="absolute left-0 mt-2 w-80 rounded-lg border bg-white shadow-lg">
      <div className="border-b p-4 font-semibold text-black">
        Shopping Cart
      </div>

      {items.length === 0 ? (
        <p className="p-4 text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <div className="max-h-80 overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 border-b p-4"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="h-12 w-12 rounded object-cover"
                width={100}
                height={100}
              />

              <div className="flex-1">
                <p className="font-medium text-gray-800">{item.name}</p>

                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}