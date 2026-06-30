"use client";

import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createPageURL = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", String(page));

    return `/?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex gap-2 justify-center mt-10">
      <button
        disabled={currentPage <= 1}
        onClick={() => router.push(createPageURL(currentPage - 1))}
        className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;

        return (
          <button
            key={page}
            onClick={() => router.push(createPageURL(page))}
            className={`px-3 py-1 border rounded cursor-pointer ${
              page === currentPage ? "bg-black text-white" : ""
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        disabled={currentPage >= totalPages}
        onClick={() => router.push(createPageURL(currentPage + 1))}
        className="px-3 py-1 border rounded disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
