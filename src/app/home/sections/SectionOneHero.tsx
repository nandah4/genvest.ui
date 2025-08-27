"use client";
import { NumberTicker } from "@/components/effect/number-ticker";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SectionOneHero = ({
  onScrollNextSection,
}: {
  onScrollNextSection: () => void;
}) => {
  const [tickerKey, setTickerKey] = useState(0);
  const refHero = useRef(null);

  const isHeroInView = useInView(refHero, {
    margin: "-50px",
    once: false,
  });

  useEffect(() => {
    if (isHeroInView) {
      setTickerKey((prv) => prv + 1);
    }
  }, [isHeroInView]);

  const headline =
    "PAHAMI DULU, KENALI RESIKONYA, MULAI PERJALANAN INVESTASI MU.";
  const words = headline.split(" ");

  return (
    <section
      ref={refHero}
      className="w-full h-fit lg:h-[900px] bg-gray-400 overflow-hidden"
      style={{
        backgroundImage: "url(/images/home/bg-hero.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full relative">
        <div className="bg-black/65 absolute inset-0 z-0"></div>
        <div className="relative h-full z-10 duration-500 sm:mx-auto pt-28 md:pt-40 lg:py-0 pb-14 md:pb-16 xl:max-w-[1900px]  padding-x">
          {/* Icon Chart Down */}
          <span className="absolute left-[8%] bottom-[8%] -z-10">
            <Image
              src="/icons/chart-down.svg"
              alt="Target"
              width={10}
              height={10}
              className="w-[50px] h-[50px] md:w-[68px] md:h-[68px]"
              priority
            />
          </span>

          <span className="absolute right-[15%] top-[10%] -z-10 -rotate-90">
            <Image
              src="/icons/chart-down.svg"
              alt="Target"
              width={10}
              height={10}
              className="w-[50px] h-[50px] md:w-[68px] md:h-[68px]"
              priority
            />
          </span>

          <div className="h-full grid grid-cols-1 lg:grid-cols-5">
            <div className="order-2 lg:order-none col-span-3 lg:flex lg:items-center">
              {/* Headline */}
              <div className="flex flex-col gap-y-[25px] lg:gap-y-[35px] ">
                <motion.h1
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
                  className="font-helvetica text-[35px] sm:text-[40px] lg:w-[90%] md:text-[45px] lg:text-[55px] xl:text-[60px] text-white font-normal leading-10 sm:leading-12 md:leading-14 lg:leading-20  text-center md:text-start"
                >
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.3,
                          y: 20,
                        },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                        },
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                      className="inline-block mr-2"
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
                    delay: 0.3,
                  }}
                  className="text-style-subheadline lg:w-[80%] text-white text-center md:text-start"
                >
                  Investasi bukan cuma beli-jual random. Pelajari tips and
                  tricknya dan cara mengendalikan FOMO supaya investasi kamu
                  lebih terarah dan profitable.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-30px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.25, 0.25, 0.7],
                    delay: 0.4,
                  }}
                  onClick={onScrollNextSection}
                  className="hover:scale-105 duration-300 cursor-pointer rounded-full p-1.5 bg-primary-green flex w-fit mx-auto md:mx-0 gap-x-[13px] lg:gap-x-[15px] items-center"
                >
                  <div className="bg-white p-2 rounded-full">
                    <Image
                      src="/icons/arrow-up-right.svg"
                      alt="Target"
                      width={10}
                      height={10}
                      className="w-[20px] h-[20px] sm:w-[23px] sm:h-[23px] lg:w-[26px] lg:h-[26px] rotate-45"
                    />
                  </div>
                  <p className="cta-button-text  pr-3 lg:pr-4">Lihat Program</p>
                </motion.div>
              </div>
            </div>

            <div className="order-1  lg:pb-[45px] col-span-2 mb-[30px] lg:mb-0 lg:order-none lg:flex lg:justify-end">
              <div className=" flex flex-col lg:justify-end lg:w-[80%] xl:w-[75%] gap-y-[25px]">
                {/* Mission Title */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.25, 0.25, 0.75],
                    delay: 0.1,
                  }}
                  className="font-helvetica text-[20px] md:text-2xl font-normal text-white uppercase text-center md:text-start"
                >
                  Seberapa Jauh Genvest Sudah Melangkah.
                </motion.p>

                {/* Statistik */}
                <div className="flex lg:flex-col gap-x-[10px] lg:gap-y-[15px]">
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 0.25, 0.25, 0.75],
                      delay: 0.2,
                    }}
                    className="bg-primary-green rounded md:rounded-md lg:rounded-lg p-[15px] flex flex-col gap-y-2 w-full"
                  >
                    <Image
                      src="/icons/focus-target.svg"
                      alt="Target"
                      width={10}
                      height={10}
                      className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                    />
                    <div className="flex flex-col gap-y-[5px]">
                      <span className="font-helvetica font-regular text-[25px] sm:text-[30px] md:text-[35px] lg:md:text-[40px] xl:md:text-[45px]">
                        <NumberTicker
                          key={tickerKey}
                          value={950}
                          decimalPlaces={0}
                          className="whitespace-pre-wrap tracking-tighter text-black"
                        />
                        <span className="text-base md:text-xl px-1">+</span>
                      </span>

                      <p className="font-helvetica font-light text-[13px] md:text-[15px] lg:text-base text-black">
                        Orang terbantu dalam memulai investasi lebih terarah.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-30px" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 0.25, 0.25, 0.75],
                      delay: 0.4,
                    }}
                    className="bg-minor-grey rounded md:rounded-md lg:rounded-lg p-[15px] flex flex-col gap-y-2 w-full"
                  >
                    <Image
                      src="/icons/focus-target.svg"
                      alt="Target"
                      width={10}
                      height={10}
                      className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px]"
                    />
                    <div className="flex flex-col gap-y-[5px]">
                      <span className="font-helvetica font-regular text-[25px] sm:text-[30px] md:text-[35px] lg:md:text-[40px] xl:md:text-[45px]">
                        <NumberTicker
                          key={tickerKey}
                          value={850}
                          decimalPlaces={0}
                          className="whitespace-pre-wrap tracking-tighter text-black"
                        />
                        <span className="text-base md:text-xl px-1">+</span>
                      </span>

                      <p className="font-helvetica font-light text-[13px] md:text-[15px] lg:text-base text-black">
                        Berhasil Terhindar dari Investasi Ilegal.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOneHero;
