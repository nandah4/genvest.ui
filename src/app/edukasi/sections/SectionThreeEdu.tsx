"use client";
import { instrumentData } from "@/data/dummy";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const SectionThreeEdu = () => {
  const [modals, setIsModals] = useState(-1);
  const [overlayOpen, setOverlay] = useState(false);

  useEffect(() => {
    if (overlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlayOpen]);

  return (
    <section className=" bg-white relative">
      <div className="xl:max-w-[1900px] padding-x sm:mx-auto w-full ">
        {/* Headline */}
        <div className="mb-[40px] lg:mb-[50px] gap-y-5 md:gap-0 ">
          <div className="space-y-[15px] ">
            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ margin: "-50px", once: false }}
              className="text-style-headline text-center  md:w-[80%] xl:w-[60%] mx-auto"
            >
              Jenis Instrumen Dalam Investasi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.3,
              }}
              className="text-style-subheadline text-text-sub-headline text-center mx-auto w-[85%] xl:w-[70%]"
            >
              Dari resiko yang bikin santai sampai yang bikin deg-degan, Tapi
              tenang tinggal klik untuk ketahui resikonya.
            </motion.p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[15px] sm:gap-x-4 sm:gap-y-4">
          {instrumentData.map((e, idx) => {
            return (
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ margin: "-50px", once: false }}
                transition={{
                  delay: 0.1,
                  duration: 0.7,
                  ease: [0.25, 0.25, 0.25, 0.7],
                }}
                key={idx + e.shortDesc}
                onClick={() => {
                  setOverlay(true);
                  setIsModals(idx);
                }}
                className="bg-primary-green cursor-pointer shadow-xs rounded-lg overflow-hidden flex items-center flex-row"
              >
                <div className="h-full w-[100px] overflow-hidden flex items-center">
                  <Image
                    src={e.icon}
                    alt={e.title}
                    height={20}
                    width={20}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24  translate-x-[-20px]"
                  />
                </div>
                <div className="py-4 md:py-5 px-3 lg:px-6 space-y-1 w-full">
                  <h3 className="title-inner-card  text-black">
                    {e.title}
                  </h3>
                  <p className="text-style-subheadline text-black">
                    {e.shortDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {overlayOpen && (
          <>
            <div
              onClick={() => setOverlay(false)}
              className="z-50 fixed inset-0 bg-black/60 flex items-center justify-center padding-x"
            >
              <motion.div
                initial={{ y: 30, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white md:max-w-3xl lg:max-w-4xl rounded-xl overflow-hidden"
              >
                <motion.div
                  className="px-5 lg:px-7 py-6 lg:py-8  space-y-5 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.25, duration: 0.3 },
                  }}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setOverlay(false)}
                    className="absolute top-3 right-3  lg:top-4 lg:right-4"
                  >
                    <Image
                      src="/icons/multiply.svg"
                      alt={
                        instrumentData[modals].title +
                        instrumentData[modals].shortDesc.length
                      }
                      height={20}
                      width={20}
                      className="w-5 h-5 lg:h-6 lg:w-6 cursor-pointer"
                    />
                  </button>
                  {/* Icon Display */}

                  <motion.div
                    className="absolute z-0 -right-3 -bottom-5"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.15,
                      duration: 0.3,
                      ease: "easeIn",
                    }}
                  >
                    <Image
                      src={instrumentData[modals].icon}
                      alt={
                        instrumentData[modals].title +
                        instrumentData[modals].shortDesc.length
                      }
                      height={20}
                      width={20}
                      className="w-16 h-16 md:w-20 md:h-20  -rotate-45"
                    />
                  </motion.div>

                  <div className="space-y-[15px] relative z-10">
                    <h4 className="title-inner-card text-black">
                      {instrumentData[modals].title}
                    </h4>

                    <p className="text-style-subheadline  text-black">
                      {instrumentData[modals].description}
                    </p>
                    <ul className="flex gap-x-3 gap-y-3 flex-wrap mt-5 md:mt-7">
                      {instrumentData[modals].points.map((e, idx) => (
                        <li
                          key={e + idx}
                          className=" bg-primary-green rounded-full px-4 md:px-5 md:py-2 py-1.5 flex-shrink-0 .text-style-subheadline  text-black"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SectionThreeEdu;
