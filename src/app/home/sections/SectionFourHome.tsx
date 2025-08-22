"use client";
import { dataSectionThree } from "@/data/dummy";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const SectionFourHome = () => {
  return (
    <section className="w-full">
      <div className="lg:max-w-6xl xl:max-w-[1440px] sm:mx-auto px-4 md:px-5">
        <div className="flex justify-center mb-[40px] md:mb-[50px] lg:mb-[60px]">
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
            className="text-style-headline text-center md:w-[80%] xl:w-[70%]"
          >
            Kenapa Lebih Baik Mulai Investasi Dari Sekarang, Bukan Nanti?
          </motion.h1>
        </div>
        <CardExpandedMain />
      </div>
    </section>
  );
};

const CardExpandedMain = () => {
  const [isPickedPoint, setPickedPoint] = useState(0);

  const handlePickedPoint = (index: number) => {
    setPickedPoint((prev) => (prev !== index ? index : 0));
  };

  return (
    <div className="w-full max-w-full">
      {/* Mobile piewwwport */}
      <div className="sm:hidden space-y-[20px]">
        {dataSectionThree.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ margin: "-50px", once: false }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`${
              index === isPickedPoint ? "h-[280px]" : "h-[190px]"
            } w-full rounded-md relative overflow-hidden cursor-pointer shadow-md`}
          >
            <Image
              src={value.image}
              alt={value.title}
              fill
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />

            {/* Mobile Content Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="absolute inset-0 w-full h-full bg-black/60"
            >
              <div className="relative w-full h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  className="absolute bottom-6 inset-x-5"
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    className="font-helvetica text-[20px] text-white"
                  >
                    {value.title}
                  </motion.h2>
                  {isPickedPoint === index ? (
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + index * 0.1, duration: 0.5 }}
                      className="font-helvetica font-light text-[15px] text-white mt-[10px]"
                    >
                      {value.description}
                    </motion.p>
                  ) : (
                    <>
                      <p className="font-helvetica font-light text-[15px] text-white mt-[10px]">
                        {value.description.slice(0, 50)}...
                      </p>
                      <div className="flex justify-between items-end">
                        <p
                          className="underline font-helvetica text-[15px] text-white mt-[20px]"
                          onClick={() => setPickedPoint(index)}
                        >
                          Klik Untuk Baca Selengkapnya
                        </p>
                        <div
                          className="bg-primary-green rounded-full h-fit p-1"
                          onClick={() => setPickedPoint(index)}
                        >
                          <Image
                            src={"/icons/arrow-up-right.svg"}
                            alt="Arrow"
                            width={36}
                            height={36}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="hidden sm:flex h-[400px] md:h-[450px] lg:h-[500px] gap-x-5">
        {dataSectionThree.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 50,
            }}
            animate={{
              width: isPickedPoint === index ? "60%" : "20%",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ margin: "-100px", once: false }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              layout: { duration: 0.6, ease: "easeInOut" },
            }}
            layout
            className="h-full rounded-2xl relative overflow-hidden shadow-lg"
            whileHover={{
              scale: isPickedPoint === index ? 1 : 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isPickedPoint === index ? "hover:scale-110" : "hover:scale-105"
              }`}
            />

            {/* Expanded Card Content */}
            <AnimatePresence>
              {isPickedPoint === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  // bg-gradient-to-t from-background-second/90 to-transparent
                  className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/90 to bg-black/30"
                >
                  <div className="relative w-full h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute bottom-6 lg:bottom-10 inset-x-5 lg:inset-x-9"
                    >
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="font-helvetica text-[25px] lg:text-[30px] text-white text-justify mb-5"
                      >
                        {card.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="font-helvetica font-light text-[15px] leading-6 lg:text-base  lg:leading-7 text-white"
                      >
                        {card.description}
                      </motion.p>
                      <motion.div
                        onClick={() => handlePickedPoint(index)}
                        initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.8,
                          duration: 0.6,
                          ease: "backOut",
                        }}
                        className="mt-5 h-12 w-12 rounded-full rotate-45 bg-primary-green flex justify-center items-center cursor-pointer"
                      >
                        <Image
                          src={"/icons/arrow-up-right.svg"}
                          alt="Arrow"
                          width={36}
                          height={36}
                          className="w-7 h-7"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* cccollapsed Card Content */}
            <AnimatePresence>
              {isPickedPoint !== index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/75 to bg-background-first/10"
                >
                  <div className="relative w-full h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="absolute left-1/2 translate-x-[-50%] bottom-6 lg:w-full md:translate-x-0 md:left-6"
                    >
                      <p className="font-helvetica w-[80%] text-base md:text-lg lg:text-[20px] text-white mb-4">
                        {card.title}
                      </p>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 15,
                          transition: { duration: 0.3 },
                        }}
                        onClick={() => handlePickedPoint(index)}
                        className=" flex h-12 w-12 rounded-full bg-primary-green  justify-center items-center cursor-pointer"
                      >
                        <Image
                          src={"/icons/arrow-up-right.svg"}
                          alt="Arrow"
                          width={32}
                          height={32}
                          className="w-7 h-7"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionFourHome;
