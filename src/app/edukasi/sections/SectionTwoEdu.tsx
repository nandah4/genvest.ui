"use client";
import { dataTarget } from "@/data/dummy";
import { motion } from "framer-motion";
import React, { useState } from "react";

const SectionTwoEdu = () => {
  const [selectedYear, setSelected] = useState(0);

  const goToStep = (stepIndex: number) => {
    setSelected(stepIndex);
  };

  return (
    <section className="bg-white padding-y !mt-10 lg:!mt-0 h-fit">
      <div className="xl:max-w-[1900px] padding-x h-full sm:mx-auto relative">
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
          className="text-style-headline md:mx-auto text-center md:w-[80%] xl:w-[60%] mb-[40px] "
        >
          Sesuaikan Investasimu Dengan Waktu Dan Target
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 h-fit ">
          <div className="mb-20 md:mb-10 flex flex-col justify-center gap-y-10 items-center h-full md:col-span-1 md:order-2 ">
            <motion.h3
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="title-inner-card !font-light md:text-start text-center"
            >
              Tahapan Waktu Investasi 
            </motion.h3>
            <div className="relative w-full">
              <div className="absolute top-6 md:top-7  left-0 right-0 h-1 bg-minor-grey rounded-full"></div>

              {/* Progres Line Yang Active */}
              <div
                className="absolute top-6 md:top-7 left-0 h-1 bg-primary-green rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${(selectedYear / (dataTarget.length - 1)) * 100}%`,
                }}
              ></div>
              {/* Label */}
              <div className="relative flex justify-between">
                {dataTarget.map((e, idx) => (
                  <div key={idx + e.title} className="flex flex-col">
                    <button
                      onClick={() => goToStep(idx)}
                      className={`
                  relative cursor-pointer z-10 w-12 h-12 md:w-14 md:h-14 text-style-subheadline !font-normal rounded-full border flex items-center justify-center
                  transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring focus:ring-primary-green
                  ${
                    idx <= selectedYear
                      ? "bg-primary-green border-white text-black shadow-md"
                      : "bg-white border-gray-300 text-gray-400"
                  }
                `}
                    >
                      {e.years}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6 md:col-span-1 md:order-1">
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              viewport={{ margin: "-50px", once: false }}
              className="w-fit px-5 py-2 md:py-2.5 overflow-hidden rounded-full bg-primary-green mx-auto md:mx-0"
            >
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                viewport={{ margin: "-50px", once: false }}
                className="text-style-subheadline lg:!text-base !font-normal"
              >
                🗓️ {dataTarget[selectedYear].deadline}
              </motion.p>
            </motion.div>
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              viewport={{ margin: "-50px", once: false }}
              className="title-inner-card  md:text-start text-center"
            >
              {dataTarget[selectedYear].title}
            </motion.h3>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              viewport={{ margin: "-50px", once: false }}
              className="text-style-subheadline text-center md:text-start md:pr-5 lg:pr-10"
            >
              {dataTarget[selectedYear].description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwoEdu;