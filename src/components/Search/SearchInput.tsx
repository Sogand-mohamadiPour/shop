"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import debounce from "../../utils/debounce";

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamsRef = useRef(searchParams);

  const [value, setValue] = useState(searchParams.get("q") || "");

  useEffect(() => {
    searchParamsRef.current = searchParams;
    setValue(searchParams.get("q") || "");
  }, [searchParams]);

  const updateUrlRef = useRef(
    debounce((val: string) => {
      const params = new URLSearchParams(searchParamsRef.current.toString());

      if (val.trim()) {
        params.set("q", val);
      } else {
        params.delete("q");
      }
      params.set("page", "1");

      router.replace(`/?${params.toString()}`);
    }, 500),
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateUrlRef.current(e.target.value);
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
        focus:border-black
      "
    />
  );
}

export default SearchInput;
