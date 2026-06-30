"use client";

import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { useCartStore } from "@/src/store/cartStore";

function Header() {
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/pic/header-icon.png"
            alt="Logo"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <button className="relative rounded-full p-2 text-gray-700 transition hover:bg-gray-100 hover:text-black cursor-pointer">
          <BsCart2 size={26} />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;