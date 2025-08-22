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
    <section className="bg-white py-20 h-fit">
      <div className="lg:max-w-6xl xl:max-w-[1440px] h-full sm:mx-auto px-4 md:px-5 relative">
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
          Sesuaikan Investasimu dengan Waktu dan Target
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
              className="title-inner-card  md:text-start uppercase text-center"
            >
              Tahapan Waktu Investasi 
            </motion.h3>
            <div className="relative w-full">
              <div className="absolute top-6 left-0 right-0 h-[5px] md:h-2 bg-minor-grey rounded-full"></div>

              {/* Progres Line Yang Active */}
              <div
                className="absolute top-6 left-0 h-[5px] bg-primary-green rounded-full transition-all duration-500 ease-out"
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
                  transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring focus:ring-amber-200
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
              className="w-fit px-5 py-2 md:py-2.5 overflow-hidden rounded-md bg-primary-green mx-auto md:mx-0"
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
              className="title-inner-card  md:text-start uppercase text-center"
            >
              {dataTarget[selectedYear].title}
            </motion.h3>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              viewport={{ margin: "-50px", once: false }}
              className="text-style-subheadline text-center md:text-start"
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

// {dataTarget.map((e, idx) => {
//           return (
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 50,
//                 scale: 0.95,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               transition={{
//                 delay: 0.2,
//                 duration: 0.8,
//                 ease: [0.25, 0.46, 0.45, 0.94],
//               }}
//               viewport={{ margin: "-50px", once: false }}
//               key={idx + e.deadline}
//               className={`grid grid-cols-4 border-b py-5 sm:py-6 lg:py-7 ${
//                 idx == 0 ? "!pt-0" : ""
//               }`}
//             >
//               <div className="col-span-1 pr-2">
//                 <h3 className="font-helvetica font-normal sm:text-lg lg:text-[20px]  uppercase">
//                   {e.deadline}
//                 </h3>
//               </div>
//               <div className="col-span-3 pl-2 space-y-[10px]">
//                 <div className="flex justify-between items-start w-full">
//                   <h3 className="font-helvetica font-normal sm:text-lg lg:text-[20px] uppercase">
//                     {e.title}
//                   </h3>
//                   <div className="hidden sm:block rounded-md bg-primary-green p-1 ">
//                     <Image
//                       src="/icons/faq/angle-down.svg"
//                       alt={`${idx + e.title}`}
//                       width={20}
//                       height={20}
//                       onClick={() => handleSelected(idx)}
//                       className={`w-6 h-6 lg:w-7 lg:h-7 cursor-pointer duration-500 ${
//                         selected == idx ? "rotate-0" : "-rotate-90"
//                       }`}
//                     />
//                   </div>
//                 </div>
//                 <p className="font-helvetica text-[15px] sm:text-base lg:text-lg sm:w-[95%] font-light leading-6 sm:leading-7 lg:leading-8">
//                   {idx === selected ? (
//                     e.description.split("--").map((p, id) => (
//                       <span
//                         className={`block my-2 ${id == 1 ? "font-normal" : ""}`}
//                         key={p + id}
//                       >
//                         {p}
//                       </span>
//                     ))
//                   ) : (
//                     <>
//                       {e.description.slice(0, 100)}
//                       {"... "}
//                     </>
//                   )}
//                   {idx == selected ? (
//                     <span
//                       onClick={() => handleSelected(idx)}
//                       className="sm:hidden underline font-normal "
//                     >
//                       Baca Lebih Sedikit.
//                     </span>
//                   ) : (
//                     <span
//                       onClick={() => handleSelected(idx)}
//                       className="sm:hidden underline font-normal "
//                     >
//                       Baca Selengkapnya.
//                     </span>
//                   )}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
