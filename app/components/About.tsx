import Image from "next/image";
import { infoList, toolsList } from "../constants";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2 font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl">
          <Image
            src="/images/user.jpeg"
            alt="user"
            width={1000}
            height={1000}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="max-w-2xl mb-10 font-ovo">
            I&apos;m a paragraph. Click here to add your own text and edit me.
            It&apos;s easy. Just click “Edit Text” or double click me to add
            your own content and make changes to the font. I&apos;m a great
            place for you to tell a story and let your users know a little more
            about you.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]"
              >
                <Image
                  src={icon}
                  alt="info"
                  width={100}
                  height={100}
                  className="w-7 mt-8"
                />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-600 font-ovo">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsList.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image
                  src={tool}
                  alt="tools"
                  width={20}
                  height={20}
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { About };
