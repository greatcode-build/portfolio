"use client";

import Image from "next/image";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_FORM_ACCESS_KEY!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
    form.reset();
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center text-lg mb-2 font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>
      <p className="text-center mx-auto mt-5 max-w-2xl mb-12 font-ovo">
        I&apos;m a paragraph. Click here to add your own text and edit me.
        It&apos;s easy. Just click “Edit Text” or double click me to add your
        own content and make changes to the font.
      </p>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows={6}
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="w-max py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white mx-auto rounded-full hover:bg-black duration-500"
        >
          Submit now
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right icon"
            width={16}
            height={16}
            className="w-4 invert"
          />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export { Contact };
