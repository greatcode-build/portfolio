"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center z-50 mt-2 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        <div className="shrink-0">
          <Link href="#top">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={35}
              height={35}
              className="cursor-pointer"
            />
          </Link>
        </div>

        <ul
          className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6 lg:gap-8 rounded-full px-6 py-3 font-ovo ${isScroll ? "" : "bg-white/50 shadow-sm"}`}
        >
          {navLinks.map(({ path, label }) => (
            <li key={label}>
              <Link href={path} onClick={() => setMenu(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-4">
          <button>
            <Image
              src="/icons/moon.svg"
              alt="moon-icon"
              width={20}
              height={20}
            />
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full font-ovo"
          >
            Contact
            <Image
              src="/icons/move-up-right.svg"
              alt="contact"
              width={20}
              height={20}
            />
          </Link>
          <button className="block md:hidden" onClick={() => setMenu(true)}>
            <Image
              src="/icons/menu.svg"
              alt="menu-icon"
              width={20}
              height={20}
            />
          </button>
        </div>
      </nav>
      <ul
        className={`flex flex-col md:hidden items-center gap-4 px-6 py-20 h-screen bg-rose-50 w-64 fixed top-0 right-0 z-50 transition-transform duration-500 ${menu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="absolute right-6 top-6">
          <Image
            src="/icons/x.svg"
            alt="cancel-icon"
            width={20}
            height={20}
            className="cursor-pointer"
            onClick={() => setMenu(false)}
          />
        </div>
        {navLinks.map(({ path, label }) => (
          <li key={label}>
            <Link href={path} onClick={() => setMenu(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export { Navbar };
