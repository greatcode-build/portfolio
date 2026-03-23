"use client";

import Image from "next/image";
import { servicesList } from "../constants";
import Link from "next/link";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg mb-2 font-ovo"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-ovo"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center mx-auto mt-5 max-w-2xl mb-12 font-ovo"
      >
        I&apos;m a paragraph. Click here to add your own text and edit me.
        It&apos;s easy. Just click “Edit Text” or double click me to add your
        own content and make changes to the font.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 my-10"
      >
        {servicesList.map(({ icon, title, description, link }) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={title}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image
              src={icon}
              alt="services"
              height={40}
              width={40}
              className="w-10"
            />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/50">
              {description}
            </p>
            <Link href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow-right"
                height={16}
                width={16}
                className="w-4 dark:invert"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export { Services };
