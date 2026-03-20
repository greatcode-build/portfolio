"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <main>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center z-50 mt-2">
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

        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6 lg:gap-8 rounded-full px-6 py-3 font-ovo bg-white shadow-sm bg-opacity-50">
          <li>
            <Link href="#top">Home</Link>
          </li>
          <li>
            <Link href="#about">About me</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#work">My Work</Link>
          </li>
          <li>
            <Link href="#contact">Contact me</Link>
          </li>
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
        <li>
          <Link href="#top" onClick={() => setMenu(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" onClick={() => setMenu(false)}>
            About me
          </Link>
        </li>
        <li>
          <Link href="#services" onClick={() => setMenu(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#work" onClick={() => setMenu(false)}>
            My Work
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={() => setMenu(false)}>
            Contact me
          </Link>
        </li>
      </ul>
    </main>
  );
};

export { Navbar };
