import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";

function Header() {
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

          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
            {0}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;