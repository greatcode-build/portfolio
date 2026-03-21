import Image from "next/image";
import { servicesList } from "../constants";
import Link from "next/link";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2 font-ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center mx-auto mt-5 max-w-2xl mb-12 font-ovo">
        I&apos;m a paragraph. Click here to add your own text and edit me.
        It&apos;s easy. Just click “Edit Text” or double click me to add your
        own content and make changes to the font.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 my-10">
        {servicesList.map(({ icon, title, description, link }) => (
          <div
            key={title}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image
              src={icon}
              alt="services"
              height={40}
              width={40}
              className="w-10"
            />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <Link href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image
                src="/icons/arrow-right.svg"
                alt="arrow-right"
                height={16}
                width={16}
                className="w-4"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Services };
