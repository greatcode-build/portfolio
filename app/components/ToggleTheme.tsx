"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Image
        src={resolvedTheme === "dark" ? "/icons/sun.svg" : "/icons/moon.svg"}
        alt="theme toggle"
        width={20}
        height={20}
        onClick={() => setTheme("light")}
        className={resolvedTheme === "dark" ? "invert" : ""}
      />
    </button>
  );
};

export { ToggleTheme };
