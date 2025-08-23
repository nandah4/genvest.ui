"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SectionOneRec = () => {
  const text = "Instrumenmu, Tepat.";

  // Split text into words for word-by-word animation
  const words = text.split(" ");
  return (
    <section
      className="bg-primary-green h-fit pt-24 pb-[75px] md:p-0 md:h-[400px] lg:h-[450px] xl:h-[480px] overflow-hidden relative"
      style={{
        backgroundImage: "url(/images/home/patter-faq.png)",
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative lg:max-w-6xl xl:max-w-[1440px] h-full md:flex flex-col space-y-[25px] md:justify-center md:items-center sm:mx-auto px-4 md:px-5">
        <motion.div
          initial={{ y: 100, scale: 0.9, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: false, margin: "-30px" }}
          className="absolute -left-14 -bottom-32 md:-bottom-16 h-fit w-fit"
        >
          <div className="relative w-[160px] h-[160px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] -rotate-12">
            <Image
              src="/images/recommendation/search-2.png"
              alt="Find Icon"
              fill
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, scale: 0.9, opacity: 0 }}
          whileInView={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: false, margin: "-30px" }}
          className="absolute -right-16 -bottom-36 md:-bottom-20 h-fit w-fit"
        >
          <div className="relative w-[170px] h-[170px]  md:w-[270px] md:h-[270px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]">
            <Image
              src="/images/recommendation/btc-g.png"
              alt="Find Icon"
              fill
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-style-headline !font-normal md:mt-10 text-center w-[90%] md:w-[70%] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          transition={{ staggerChildren: 0.12, delayChildren: 0.4 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  filter: "blur(4px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              className="inline-block mr-3 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.25, 0.25, 0.75],
            delay: 0.65,
          }}
          className="text-style-subheadline w-[80%] md:w-[60%] mx-auto text-black text-center"
        >
          Temukan Instrumen Investasimu, dan Hindari Investasi Ilegal dengan
          Scam Detector.
        </motion.p>
      </div>
    </section>
  );
};

export default SectionOneRec;
