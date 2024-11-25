import React from "react";
import { NavbarMenu } from "../../mock_data/data";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import Hamburger from "./Hamburger";
import LoginButton from "../LoginButton/LoginButton";
import { useLocation } from "react-router-dom";

const Navbar = ({ isOpen, handleSubMenu }) => {
  const location = useLocation();

  return (
    <>
      <motion.nav
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container  fixed top-0 left-0 right-0 z-40 shadow-md backdrop-blur-lg bg-opacity-80"
      >
        <div className="container  mx-auto flex items-center justify-between px-4 py-3 bg-transparent">
          {/* Logo Section */}
          <div className="flex items-center gap-2 text-2xl font-bold text-primary">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-[100px] lg:w-[120px]"
            />
          </div>

          {/* Menu Section */}
          <div className="hidden lg:block z-50 w-fit">
            <ul className="flex items-center  justify-center gap-4 bg-black/70 rounded-full py-2 px-8 shadow-sm">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className={`text-sm xl:text-base font-semibold text-zinc-200 px-3 py-1 hover:text-tertiary-100 transition-all duration-300 ease-in-out ${
                      location.pathname === item.url
                        ? "border-b-2 border-tertiary-100 px-1 pr-2"
                        : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex justify-end">
            <LoginButton />
          </div>

          {/* Mobile Hamburger Menu */}
          <div
            className="lg:hidden flex items-center text-primary cursor-pointer"
            onClick={handleSubMenu}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Section */}
      <Hamburger isOpen={isOpen} handleSubMenu={handleSubMenu} />
    </>
  );
};

export default Navbar;
