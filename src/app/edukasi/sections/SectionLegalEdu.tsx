"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SectionLegalEdu = () => {
  const investList = [
    {
      type: "legal",
      id: "1",
      desc: "Terdaftar resmi di OJK, BEI, atau otoritas terkait.",
    },
    {
      type: "legal",
      id: "2",
      desc: "Return yang dijanjikan realistis dan masuk akal.",
    },
    {
      type: "legal",
      id: "3",
      desc: "Perusahaan transparan: ada alamat, tim, dan izin jelas.",
    },
    {
      type: "ilegal",
      id: "1",
      desc: "Menjanjikan profit besar, cepat, tanpa risiko.",
    },
    {
      type: "ilegal",
      id: "2",
      desc: "Pakai skema ajak teman/bonus seperti MLM atau ponzi.",
    },
    {
      type: "ilegal",
      id: "3",
      desc: "Tidak terdaftar di OJK/BEI, susah dicek legalitasnya.",
    },
  ];

  return (
    <section className="py-20 bg-white ">
      <div className="lg:max-w-6xl xl:max-w-[1440px] mx-auto px-4 md:px-5">
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
          className="text-style-headline mx-auto text-center md:w-[80%] xl:w-[70%] mb-[20px] "
        >
          Legal atau Ilegal? Yuk, Bedain Dulu!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.25, 0.25, 0.75],
            delay: 0.1,
          }}
          className="text-style-subheadline text-text-sub-headline text-center mx-auto lg:w-[85%] xl:w-[75%] mb-[20px] md:mb-[30px]"
        >
          Sebelum naruh duit, pastiin dulu investasinya beneran aman. Ini cara
          gampang buat ngecek.
        </motion.p>

        <div className=" hidden sm:block lg:hidden overflow-hidden order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.25, 0.25, 0.75],
              delay: 0.3,
            }}
            className="relative w-full xss:w-[300px] h-[350px] md:w-[350px]  md:h-[400px] mx-auto"
          >
            <Image
              src="/images/education/ilegal-asset.png"
              alt="Minvest"
              fill
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-5">
          <div className=" sm:col-span-1 order-2 sm:order-none mt-5 space-y-[10px] md:space-y-5">
            <motion.h5
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.1,
              }}
              className="title-inner-card text-center"
            >
              Ilegal
            </motion.h5>
            <ul className="space-y-5">
              {investList.map((e, idx) => {
                if (e.type == "ilegal") {
                  return (
                    <motion.li
                      key={e.type + idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.7,
                        ease: [0.25, 0.25, 0.25, 0.75],
                        delay: 0.2,
                      }}
                      className="flex hover:scale-105 duration-500 cursor-pointer gap-x-[15px] items-center py-1 bg-minor-grey rounded-full p-1.5 lg:p-2"
                    >
                      <div className="rounded-full flex-shrink-0 bg-red-600 h-10 w-10 md:h-11 md:w-11 flex justify-center items-center">
                        <span className="font-helvetica text-white font-bold">
                          {e.id}
                        </span>
                      </div>
                      <p className="desc-inner-card !text-black !leading-6">
                        {e.desc}
                      </p>
                    </motion.li>
                  );
                }
              })}
            </ul>
          </div>

          {/* Image */}
          <div className=" sm:hidden lg:block lg:col-span-1 order-1 sm:order-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              className="relative w-full xss:w-[300px] h-[350px] md:w-[350px] md:h-[400px] xl:w-[400px]  xl:h-[450px]  mx-auto"
            >
              <Image
                src="/images/education/ilegal-asset.png"
                alt="Minvest"
                fill
              />
            </motion.div>
          </div>

          <div className=" sm:col-span-1 order-3 sm:order-none mt-5 space-y-[10px] md:space-y-5">
            <motion.h5
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.1,
              }}
              className="title-inner-card text-center"
            >
              Legal
            </motion.h5>
            <ul className="space-y-5">
              {investList.map((e, idx) => {
                if (e.type == "legal") {
                  return (
                    <motion.li
                      key={e.type + idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.7,
                        ease: [0.25, 0.25, 0.25, 0.75],
                        delay: 0.2,
                      }}
                      className="flex hover:scale-105 duration-500 cursor-pointer gap-x-[15px] items-center py-1 bg-minor-grey rounded-full p-1.5 lg:p-2"
                    >
                      <div className="rounded-full flex-shrink-0 bg-green-600 h-10 w-10 md:h-11 md:w-11 flex justify-center items-center">
                        <span className="font-helvetica text-white font-bold">
                          {e.id}
                        </span>
                      </div>
                      <p className="desc-inner-card !text-black !leading-6">
                        {e.desc}
                      </p>
                    </motion.li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLegalEdu;
