import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <main>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50">
        <Link href="/">
          <Image
            src="/logo"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer mr-14"
          />
        </Link>
        <ul>
          <Link href="#top">
            <li>Home</li>
          </Link>
          <Link href="#about">
            <li>About me</li>
          </Link>
          <Link href="#services">
            <li>Services</li>
          </Link>
          <Link href="#work">
            <li>My Work</li>
          </Link>
          <Link href="#contact">
            <li>Contact me</li>
          </Link>
        </ul>
        <div>
          <Link href="#contact">
            Contact{" "}
            <Image src="/contact" alt="contact" width={35} height={35} />
          </Link>
        </div>
      </nav>
    </main>
  );
};

export { Navbar };
