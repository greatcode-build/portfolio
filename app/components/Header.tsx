import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-3xl flex flex-col justify-center gap-4 items-center text-center mx-auto h-screen w-11/12">
      <div>
        <Image
          src="/images/profile.jpg"
          alt="profile"
          height={128}
          width={128}
          className="rounded-full w-32 h-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi, I&apos;m Great Lucky👋
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Frontend Engineer based in Nigeria
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        I&apos;m a paragraph. Click here to add your own text and edit me.
        It&apos;s easy. Just click “Edit Text” or double click me to add your
        own content and make changes to the font. I&apos;m a great place for you
        to tell a story and let your users know a little more about you.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          contact me
          <Image
            src="/icons/arrow-right.svg"
            alt="contact"
            width={16}
            height={16}
            className="invert"
          />
        </Link>
        <Link
          href="/my-resume"
          className="px-10 py-3 rounded-full border-gray-500 border flex items-center gap-2"
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
      </div>
    </div>
  );
};

export { Header };
