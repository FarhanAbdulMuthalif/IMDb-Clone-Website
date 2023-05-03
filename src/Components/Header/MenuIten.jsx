import Link from "next/link";
import React from "react";

const MenuIten = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="flex m-4 lg:m-6 hover:text-red-600">
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
};

export default MenuIten;
