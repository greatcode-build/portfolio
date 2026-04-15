"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="max-w-3xl flex flex-col justify-center gap-4 items-center text-center mx-auto h-screen w-11/12">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.1, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/images/profile.jpg"
          alt="profile"
          height={128}
          width={128}
          className="rounded-full w-32 h-32"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo"
      >
        Hi, I&apos;m Great Lucky👋
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Frontend Engineer based in Nigeria
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I build clean, modern, and scalable interfaces with smooth interactions
        and strong user experience. I focus on performance, usability, and how
        every product feels in real use.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href="#contact"
            className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
          >
            contact me
            <Image
              src="/icons/arrow-right.svg"
              alt="contact"
              width={16}
              height={16}
              className="invert dark:invert"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link
            href="/my_resume.pdf"
            className="px-10 py-3 rounded-full bg-white dark:text-black border-gray-500 border flex items-center gap-2"
            download
          >
            my resume
            <Image
              src="/icons/download.svg"
              alt="download"
              width={16}
              height={16}
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export { Header };
