"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction, useEffect, useState } from "react";

const NavLink = ({
  setIsOpen,
  href,
  children,
}: {
  setIsOpen: React.Dispatch<SetStateAction<boolean>> | null;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      className="block"
      href={href}
      onClick={() => {
        if (setIsOpen) setIsOpen(false);
      }}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBg, setShowBg] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const scrollY = () => {
      if (window.scrollY > 20) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };
    window.addEventListener("scroll", scrollY);

    return () => window.removeEventListener("scroll", scrollY);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`p-[6px] md:py-1 md:px-0  ${
          showBg
            ? "md:bg-white sm:shadow-xs"
            : `${pathName === "/" ? "" : "md:bg-white"}`
        } fixed top-0 inset-x-0 z-50`}
      >
        {/* Div to manage maximum width of navbar */}
        <div className="xl:max-w-[1900px] md:px-6 lg:px-8 xl:px-10 duration-500 sm:mx-auto bg-white/95 backdrop-blur-lg md:backdrop-blur-none shadow-lg md:shadow-none md:bg-transparent rounded-lg md:rounded-none py-3.5 md:py-6 ">
          <div className="flex justify-between items-center relative">
            {/* Logo */}
            <div className="flex gap-x-4 items-center pl-3 md:pl-0">
              <div className="bg-black p-2 rounded-xl">
                <div className=" h-7 w-7 relative ">
                  <Image
                    src="/Logo-Genvest.svg"
                    alt="Genvest Logo"
                    fill
                    className=""
                  />
                </div>
              </div>

              <h2
                className={`font-helvetica font-normal ${
                  showBg
                    ? "text-black"
                    : pathName != "/"
                    ? "md:text-black"
                    : "md:text-white"
                } text-xl sm:text-[22px] md:text-2xl `}
              >
                Genvest.
              </h2>
            </div>

            {/* Bars Button of Phone Breapoint */}
            <div className="flex md:hidden pr-3">
              {isOpen ? (
                <Image
                  src="/icons/multiply.svg"
                  alt="Genvest Logo"
                  width={27}
                  height={27}
                  className="h-[26px] w-[26px] "
                  onClick={() => setIsOpen((e) => !e)}
                />
              ) : (
                <Image
                  src="/icons/align-right.svg"
                  alt="Genvest Logo"
                  width={27}
                  height={27}
                  className="h-[26px] w-[26px] "
                  onClick={() => setIsOpen((e) => !e)}
                />
              )}
            </div>

            {/* Navigation of Phone Breakpoint */}
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="md:hidden z-30 border rounded-lg bg-white absolute top-[62px] left-0 right-0"
                  >
                    <ul className="flex flex-col gap-y-3 p-5">
                      <li
                        className={`style-navbar-mobile-font style-navbar-mobile-bg ${
                          pathName === "/" ? "!text-text-sub-headline" : ""
                        }`}
                      >
                        <NavLink href="/" setIsOpen={setIsOpen}>
                          Beranda
                        </NavLink>
                      </li>
                      <li
                        className={`style-navbar-mobile-font style-navbar-mobile-bg ${
                          pathName === "/edukasi"
                            ? "!text-text-sub-headline"
                            : ""
                        }`}
                      >
                        <NavLink href="/edukasi" setIsOpen={setIsOpen}>
                          Panduan Investasi
                        </NavLink>
                      </li>
                      <li
                        className={`style-navbar-mobile-font style-navbar-mobile-bg ${
                          pathName === "/rekomendasi"
                            ? "!text-text-sub-headline"
                            : ""
                        }`}
                      >
                        <NavLink href="/rekomendasi" setIsOpen={setIsOpen}>
                          Deteksi & Rekomendasi
                        </NavLink>
                      </li>

                      <NavLink href="/ask-ai" setIsOpen={setIsOpen}>
                        <motion.li
                          whileTap={{ scale: 1.02 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-primary-green cursor-pointer py-3 rounded-md style-navbar-mobile-font"
                        >
                          ConsulGen
                        </motion.li>
                      </NavLink>

                      <NavLink href="/login" setIsOpen={setIsOpen}>
                        <motion.li
                          whileTap={{ scale: 1.02 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-primary-green cursor-pointer py-3 style-navbar-mobile-font rounded-md"
                        >
                          Login
                        </motion.li>
                      </NavLink>
                    </ul>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Navigation Bar in >= 640px */}
            <nav className="hidden md:block pr-3 md:pr-0">
              <ul className="flex gap-x-8 lg:gap-x-12 items-center">
                <li
                  className={`${
                    pathName === "/"
                      ? `${showBg ? "!text-text-sub-headline" : "!text-white"}`
                      : "!text-black"
                  } style-navbar-mobile-font hidden lg:block`}
                >
                  <NavLink setIsOpen={null} href="/">
                    Beranda
                  </NavLink>
                </li>
                <li
                  className={`${
                    pathName === "/edukasi"
                      ? "!text-text-sub-headline"
                      : `${
                          showBg
                            ? "!text-black"
                            : `${
                                pathName === "/" ? "!text-white" : "!text-black"
                              }`
                        }`
                  } style-navbar-mobile-font hidden lg:block`}
                >
                  <NavLink setIsOpen={null} href="/edukasi">
                    Panduan Investasi
                  </NavLink>
                </li>
                <li
                  className={`${
                    pathName === "/rekomendasi"
                      ? "!text-text-sub-headline"
                      : `${
                          showBg
                            ? "!text-black"
                            : `${
                                pathName === "/" ? "!text-white" : "!text-black"
                              }`
                        }`
                  } style-navbar-mobile-font hidden lg:block`}
                >
                  <NavLink setIsOpen={null} href="/rekomendasi">
                    Deteksi & Rekomendasi
                  </NavLink>
                </li>
                <li className="flex gap-x-3 lg:gap-x-5">
                  <NavLink href="/ask-ai" setIsOpen={setIsOpen}>
                    <motion.div
                      whileTap={{ scale: 1.02 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-primary-green duration-300 cursor-pointer  py-1.5 lg:py-2 px-5 flex justify-center items-center gap-x-5 rounded-md style-navbar-mobile-font"
                    >
                      ConsulGen
                    </motion.div>
                  </NavLink>

                  <NavLink href="/login" setIsOpen={setIsOpen}>
                    <motion.div
                      whileTap={{ scale: 1.02 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-primary-green  cursor-pointer py-2 px-5 lg:px-7 style-navbar-mobile-font rounded-md"
                    >
                      Login
                    </motion.div>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full hidden md:block lg:hidden pt-4">
            <ul className="flex gap-x-8 lg:gap-x-15 items-center justify-start">
              <li
                className={`${
                  pathName === "/"
                    ? `${showBg ? "!text-text-sub-headline" : "!text-white"}`
                    : "!text-black"
                } style-navbar-mobile-font`}
              >
                <NavLink setIsOpen={null} href="/">
                  Beranda
                </NavLink>
              </li>
              <li
                className={`${
                  pathName === "/edukasi"
                    ? "!text-text-sub-headline"
                    : `${
                        showBg
                          ? "!text-black"
                          : `${
                              pathName === "/" ? "!text-white" : "!text-black"
                            }`
                      }`
                } style-navbar-mobile-font`}
              >
                <NavLink setIsOpen={null} href="/edukasi">
                  Panduan Investasi
                </NavLink>
              </li>
              <li
                className={`${
                  pathName === "/rekomendasi"
                    ? "!text-text-sub-headline"
                    : `${
                        showBg
                          ? "!text-black"
                          : `${
                              pathName === "/" ? "!text-white" : "!text-black"
                            }`
                      }`
                } style-navbar-mobile-font `}
              >
                <NavLink setIsOpen={null} href="/rekomendasi">
                  Deteksi & Rekomendasi
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 bg-black/30 z-40 select-none backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
