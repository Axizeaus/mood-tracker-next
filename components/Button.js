import { Fugaz_One } from "next/font/google";
import React from "react";

export default function Button(props) {
  const { text, dark, full, clickHandler } = props;

  return (
    <button
      onClick={clickHandler}
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border border-solid border-x-[#0D47A1] border-y-[#FFC107] " +
        (dark
          ? " text-white bg-[#6A1B9A] "
          : " textGradient from-[#FF8A80] to-[#4CAF50] ") +
        (full ? " grid place-items-center w-full " : " ")
      }
    >
      <p className="px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 font-fancy">
        {text}
      </p>
    </button>
  );
}
