"use client";

import { investmentSteps } from "@/data/dummy";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";



const SectionFourEdu = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const handleSelected = (index: number) => {
    setSelectedCard((e) => (index == e ? e - 1 : index));
  };
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="xl:max-w-[1900px] padding-x  mx-auto px-4">
        <div className="space-y-7  mb-[40px] md:mb-[50px] lg:mb-20 ">
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            viewport={{ margin: "-50px", once: false }}
            className="w-fit px-5 md:px-6 py-2 md:py-2.5 overflow-hidden rounded-full bg-primary-green mx-auto"
          >
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              viewport={{ margin: "-50px", once: false }}
              className="text-style-subheadline lg:!text-base !font-normal"
            >
              Langkah Langkah
            </motion.p>
          </motion.div>
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
            className="text-style-headline md:mx-auto text-center md:w-[80%] xl:w-[70%]"
          >
            Langkah-Langkah Dalam Berinvestasi
          </motion.h1>
        </div>

        {/* Content When vw <= md */}
        <div className=" grid grid-cols-1 gap-y-2 md:grid-cols-3 md:max-w-4xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[82rem] md:mx-auto">
          {investmentSteps.map((e, idx) => (
            <React.Fragment key={idx + e.description}>
              <div className="hidden md:block md:col-span-1 pr-5">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1 + 0.3,
                  }}
                  viewport={{ once: false, margin: "-30px" }}
                  className="text-style-subheadline md:!text-base"
                >
                  {selectedCard >= idx
                    ? "Yeay, Kamu sudah melewati tahap ini 🎉"
                    : "Yahh, Kamu belum melewati tahap ini 😩"}
                </motion.p>
              </div>
              <motion.div
                key={idx + e.description}
                className="flex gap-x-5 md:gap-x-10 lg:gap-x-20 md:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: false, margin: "-30px" }}
              >
                <div className="items-center flex flex-col space-y-2">
                  <motion.button
                    onClick={() => handleSelected(idx)}
                    className={`rounded-full cursor-pointer hover:scale-105 duration-500 title-inner-card h-12 w-12 flex-shrink-0 ${
                      idx <= selectedCard
                        ? "bg-primary-green"
                        : "bg-white border"
                    }`}
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: idx * 0.1 + 0.4,
                      }}
                      viewport={{ once: false }}
                    >
                      {idx + 1}
                    </motion.span>
                  </motion.button>
                  {idx != investmentSteps.length - 1 ? (
                    <motion.div
                      className={`h-16 lg:h-20 xl:h-24 w-[2px] rounded-full ${
                        idx <= selectedCard
                          ? "bg-primary-green"
                          : "bg-minor-grey border border-minor-grey"
                      }`}
                      initial={{ scaleY: 0, originY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.1 + 0.3,
                      }}
                      viewport={{ once: false }}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <motion.div
                  className="flex flex-col items-start gap-y-1 lg:gap-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1 + 0.3,
                  }}
                  viewport={{ once: false, margin: "-30px" }}
                >
                  <p className="font-helvetica text-base  md:text-lg lg:text-xl">
                    Langkah {e.step}
                  </p>
                  <p className="text-style-subheadline">{e.description}</p>
                </motion.div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>

        {/* Content When vw >= md */}
        {/* <div className="hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          <div className="hidden lg:block"></div>

          <CardItem
            step={investmentSteps[0].step}
            title={investmentSteps[0].title}
            selected={selectedCard}
            setSelected={handleSelected}
          ></CardItem>

          <div className="hidden md:flex justify-center items-center">
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              viewport={{ margin: "-50px", once: false }}
              className="hidden lg:block w-fit px-5 md:px-6 py-2 md:py-2.5 overflow-hidden rounded-full bg-primary-green mx-auto"
            >
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                viewport={{ margin: "-50px", once: false }}
                className="text-style-subheadline lg:!text-base !font-normal"
              >
                Langkah Langkah
              </motion.p>
            </motion.div>
          </div>

          <CardItem
            step={investmentSteps[1].step}
            title={investmentSteps[1].title}
            selected={selectedCard}
            setSelected={handleSelected}
          ></CardItem>

          <div className="hidden md:block lg:hidden"></div>
          <CardItem
            step={investmentSteps[2].step}
            title={investmentSteps[2].title}
            selected={selectedCard}
            setSelected={handleSelected}
          ></CardItem>
          <div className="hidden lg:flex justify-center items-center col-span-2 ">
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
              className="hidden lg:block text-style-headline md:mx-auto text-center "
            >
              Langkah-Langkah Dalam Berinvestasi
            </motion.h1>
          </div>
          <CardItem
            step={investmentSteps[3].step}
            title={investmentSteps[3].title}
            selected={selectedCard}
            setSelected={handleSelected}
          ></CardItem>

          <CardItem
            step={investmentSteps[4].step}
            title={investmentSteps[4].title}
            selected={selectedCard}
            setSelected={handleSelected}
          ></CardItem>

          <CardItem
            step={investmentSteps[5].step}
            title={investmentSteps[5].title}
            selected={selectedCard}
            setSelected={handleSelected}
          ></CardItem>
          <div className="hidden lg:block"></div>
          <CardItem
            step={investmentSteps[6].step}
            title={investmentSteps[6].title}
            selected={selectedCard}
            setSelected={handleSelected}
          ></CardItem>
        </div> */}
      </div>
    </section>
  );
};

export default SectionFourEdu;
