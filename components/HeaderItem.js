import React from "react";
import Link from "next/link";

const HeaderItem = ({ title, Icon, to }) => {
  return (
    <Link
      href={to}
      className="flex flex-col items-center cursor-pointer w-12 group sm:w-20 hover:text-white"
    >
      <Icon className="mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </Link>
  );
};

export default HeaderItem;
