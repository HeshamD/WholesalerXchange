import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const navLinks = [
    { label: "Categories", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Blogs", href: "#" },
  ];
  return (
    <ul className="hidden h-full gap-12 lg:flex">
      {navLinks.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
