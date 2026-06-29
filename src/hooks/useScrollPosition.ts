"use client";

import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onChange = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onChange);
    onChange();

    return () => window.removeEventListener("scroll", onChange);
  }, []);

  return scrollY;
}
