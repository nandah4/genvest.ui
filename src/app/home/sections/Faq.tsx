"use client";
import { faqData } from "@/data/dummy";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const SectionSevenHome = () => {
  const [faqActive, setFaqActive] = useState(0);

  const handleFaq = (index: number) => {
    setFaqActive((e) => (e != index ? index : e));
  };

  return (
    <section className="mt-20 py-14 border overflow-hidden bg-white relative">
      {/* Background Grid and Gradient White */}
      <div
        className="absolute z-0 left-0 top-0 right-0 h-[500px] w-full flex items-end"
        style={{
          backgroundImage: "url(/images/home/patter-faq.png)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-32 bg-gradient-to-t from-white to-white/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative lg:max-w-6xl xl:max-w-[1440px] duration-500 mx-auto px-4 md:px-5">
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
          className="text-style-headline md:mx-auto text-center md:w-[80%] xl:w-[70%] mb-[40px] md:mb-[50px] "
        >
          Pertanyaan Yang Sering Ditanyakan (FAQ)
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
          className="text-style-subheadline text-text-sub-headline text-center sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[60%] sm:mx-auto"
        >
          Temukan jawaban dari pertanyaan seputar investasi atau mungkin, Kamu
          belum menemukan jawaban yang kamu cari?
        </motion.p>

        <div className="mt-10 flex flex-col gap-y-[15px] sm:max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto">
          {/* Item Card */}
          {faqData.map((e, idx) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.25, 0.25, 0.75],
                  delay: 0.4,
                }}
                key={e.quest + idx}
                className={`flex gap-x-[15px] ${idx == faqActive ? "items-start" : "items-center"}  `}
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 duration-300 flex-shrink-0 bg-primary-green rounded-md flex justify-center items-center">
                  <Image
                    src={e.icon}
                    alt={`${idx + e.quest}`}
                    width={20}
                    height={20}
                    className="w-6 h-6 md:w-7 md:h-7 duration-300"
                  />
                </div>
                <div className="flex flex-col gap-y-[8px] w-full">
                  <div className="flex justify-between items-start">
                    <p className="font-helvetica text-base leading-7 md:text-lg pr-2">
                      {e.quest}
                    </p>
                    <div className="w-fit flex-shrink-0 flex items-center justify-between">
                      <Image
                        src="/icons/faq/angle-down.svg"
                        alt={`${idx + e.quest}`}
                        width={20}
                        height={20}
                        onClick={() => handleFaq(idx)}
                        className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 cursor-pointer duration-300 ${
                          faqActive == idx ? "rotate-0" : "-rotate-90"
                        }`}
                      />
                    </div>
                  </div>
                  {faqActive == idx && (
                    <motion.p
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, ease: easeIn }}
                      className="font-helvetica text-[15px] md:text-base font-light leading-7 text-black"
                    >
                      {e.answer}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionSevenHome;
