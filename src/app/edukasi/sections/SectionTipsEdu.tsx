"use client";
import { dataDoAndDont } from "@/data/dummy";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const SectionTipsEdu = () => {
  const [isActive, setIsActive] = useState([
    { idx: 0, isAct: true },
    { idx: 1, isAct: false },
    { idx: 2, isAct: true },
  ]);

  const handleToggle = (idx: number, isActParams: boolean) => {
    setIsActive((prev) =>
      prev.map((e) => (e.idx == idx ? { ...e, isAct: isActParams } : e))
    );
  };

  return (
    <section className="my-20 bg-white py-5 ">
      <div className="lg:max-w-6xl xl:max-w-[1440px]  duration-500 sm:mx-auto px-4 md:px-5">
        <div className="flex flex-col">
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
            className="text-style-headline md:mx-auto text-center md:w-[80%] xl:w-[70%] mb-10 md:mb-[50px] "
          >
            Do & Don&apos;t Memulai Investasi
          </motion.h1>

          {/* Content When Viewport < md */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeIn" }}
            viewport={{ margin: "-50px", once: false }}
            className=" md:hidden"
          >
            {dataDoAndDont.map((e, idx) => {
              const active = isActive[idx]?.isAct;
              return (
                <div
                  key={e.do + e.do.length * 10}
                  className="grid grid-cols-4 "
                >
                  <div
                    className={`border-b border-r py-8 pr-2 ${
                      isActive[idx].idx == idx && active == true
                        ? "col-span-3"
                        : "col-span-1"
                    }`}
                  >
                    {isActive[idx].idx == idx && active == true ? (
                      <>
                        <div className="flex gap-x-[5px] items-start">
                          <Image
                            src="/icons/check.svg"
                            alt="Check"
                            width={100}
                            height={100}
                            className="w-6 h-6 sm:w-7 sm:h-7"
                          />
                          <p className="font-helvetica text-base sm:text-lg font-normal mb-[10px] text-black">
                            Boleh Dilakukan
                          </p>
                        </div>

                        <p className="font-helvetica text-[15px] sm:text-base font-light text-black">
                          {e.do}
                        </p>
                      </>
                    ) : (
                      <div className="w-full h-full flex justify-center items-center">
                        <Image
                          onClick={() => handleToggle(idx, true)}
                          src="/icons/check.svg"
                          alt="Check"
                          width={100}
                          height={100}
                          className="w-9 h-9 sm:w-10 sm:h-10"
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className={`border-b  py-8 ${
                      isActive[idx].idx == idx && active == false
                        ? "col-span-3 px-4"
                        : "col-span-1 px-2"
                    }`}
                  >
                    {isActive[idx].idx == idx && active == false ? (
                      <>
                        <div className="flex gap-x-[5px] items-start">
                          <Image
                            src="/icons/multiply-red.svg"
                            alt="Check"
                            width={100}
                            height={100}
                            className="w-5 h-5 sm:w-6 sm:h-6 translate-y-[2px]"
                          />
                          <p className="font-helvetica text-base sm:text-lg font-normal mb-[10px] text-black">
                            Tidak Boleh Dilakukan
                          </p>
                        </div>

                        <p className="font-helvetica text-[15px] sm:text-base  font-light text-black">
                          {e.dont}
                        </p>
                      </>
                    ) : (
                      <div className="w-full h-full flex justify-center items-center">
                        <Image
                          onClick={() => handleToggle(idx, false)}
                          src="/icons/multiply-red.svg"
                          alt="Check"
                          width={100}
                          height={100}
                          className="w-8 h-8 sm:w-9 sm:h-9 translate-y-[2px]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Content When Viewport >= md */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.25, 0.25, 0.75],
              staggerChildren: 0.1,
            }}
            className="hidden md:block"
          >
            <div className="grid grid-cols-2">
              {/* Header of Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.25, 0.25, 0.75],
                  delay: 0.1,
                }}
                className="col-span-1 py-10 px-5 lg:px-10 flex justify-center gap-x-5"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.75],
                    delay: 0.2,
                  }}
                >
                  <Image
                    src="/icons/check.svg"
                    alt="Check"
                    width={100}
                    height={100}
                    className="w-6 h-6 lg:w-7 lg:h-7"
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.25, 0.25, 0.75],
                    delay: 0.25,
                  }}
                  className="title-inner-card font-normal text-center text-black"
                >
                  Do (Boleh Dilakukan)
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.25, 0.25, 0.75],
                  delay: 0.2,
                }}
                className="col-span-1 py-10 px-5 lg:px-10 flex justify-center gap-x-5"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.75],
                    delay: 0.2,
                  }}
                >
                  <Image
                    src="/icons/multiply-red.svg"
                    alt="Don't"
                    width={100}
                    height={100}
                    className="w-5 h-5 lg:w-6 lg:h-6 translate-y-[3px]"
                  />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.25, 0.25, 0.75],
                    delay: 0.25,
                  }}
                  className="title-inner-card font-normal text-center text-black"
                >
                  Don&apos;t (Tidak Boleh Dilakukan)
                </motion.p>
              </motion.div>

              {/* Grid Content Cards */}
              {dataDoAndDont.map((e, idx) => {
                return (
                  <React.Fragment key={idx + e.do.length * 3 + e.do}>
                    {/* Do Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, margin: "-30px" }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.25, 0.25, 0.75],
                        delay: 0.3 + idx * 0.1,
                      }}
                      className="col-span-1 py-10 px-5 lg:px-10 border-b border-r hover:scale-105 hover:shadow duration-500 bg-white"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-30px" }}
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 0.25, 0.25, 0.75],
                          delay: 0.35 + idx * 0.1,
                        }}
                        className="text-style-subheadline text-center text-black"
                      >
                        {e.do}
                      </motion.p>
                    </motion.div>

                    {/* Don't Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, margin: "-30px" }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.25, 0.25, 0.75],
                        delay: 0.4 + idx * 0.1,
                      }}
                      className="col-span-1 py-10 px-5 lg:px-10 border-b hover:border-l hover:shadow hover:scale-105 duration-500 bg-white"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-30px" }}
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 0.25, 0.25, 0.75],
                          delay: 0.45 + idx * 0.1,
                        }}
                        className="text-style-subheadline text-center text-black"
                      >
                        {e.dont}
                      </motion.p>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionTipsEdu;
