"use client";

import { motion } from "framer-motion";

export const FlipNav = () => {
  return (
    <nav className="px-2 md:px-8 py-2 md:py-4 hidden md:flex items-center justify-center relative">
      <NavLeft />
    </nav>
  );
};


const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <NavLink href="#manifesto" text="Il manifesto" />
      <NavLink href="#chi-siamo" text="Chi siamo" />
      <NavLink href="#cosa-facciamo" text="Cosa facciamo" />
      <NavLink href="https://ko-fi.com/bresciapride" isExternal text="Supportaci" />
    </div>
  );
};

const NavLink = ({ text, href, isExternal }: { text: string, href: string, isExternal?: boolean}) => {
  return (
    <a
      href={href}
      rel="nofollow"
      target={isExternal ? "_blank" : undefined}
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-green">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

