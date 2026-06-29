"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import debounce from "../../utils/debounce"

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("q") || "");

  const updateUrl = useMemo(
    () =>
      debounce((val: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (val) {
          params.set("q", val);
        } else {
          params.delete("q");
        }

        router.push(`?${params.toString()}`);
      }, 500),
    [router, searchParams]
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateUrl(e.target.value);
  };

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder="Search products..."
      className="
        w-full max-w-md
        rounded-xl border
        px-4 py-2
        shadow-sm
        outline-none
        focus:border-black
      "
    />
  );
}

export default SearchInput;