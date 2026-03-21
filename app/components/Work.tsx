import Image from "next/image";
import { workList } from "../constants";
import Link from "next/link";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2 font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center mx-auto mt-5 max-w-2xl mb-12 font-ovo">
        I&apos;m a paragraph. Click here to add your own text and edit me.
        It&apos;s easy. Just click “Edit Text” or double click me to add your
        own content and make changes to the font.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-10 gap-5">
        {workList.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.backgroundImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border border-black rounded-full aspect-square flex items-center justify-center w-9 shadow-[2px_2px_0_#00] group-hover:bg-lime-300 transition">
                <Image
                  src="/icons/send.svg"
                  alt="send icon"
                  width={20}
                  height={20}
                  className="w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 mx-auto hover:bg-lightHover duration-500"
      >
        Show more
        <Image
          src="/icons/arrow-right.svg"
          width={16}
          height={16}
          alt="show more icon"
          className="w-4"
        />
      </Link>
    </div>
  );
};

export { Work };
