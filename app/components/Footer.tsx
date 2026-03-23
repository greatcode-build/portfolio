import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="w-15 mx-auto mb-2 dark:invert"
        />
        <div className="w-max mx-auto flex items-center gap-2">
          <Image
            src="/icons/mail.svg"
            alt="logo"
            width={12}
            height={12}
            className="w-6 dark:invert"
          />
          greatl46@outlook.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>©2026 Great Lucky. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link href="https://github.com/greatcode-build" target="_blank">
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/greatlucky/"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link href="https://x.com/_itsgreat" target="_blank">
              X
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
