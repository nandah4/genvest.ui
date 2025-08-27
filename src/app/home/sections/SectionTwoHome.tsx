"use client";
import { services } from "@/data/dummy";
import { motion } from "framer-motion";
import Image from "next/image";
import { RefObject, useEffect, useRef, useState } from "react";

const SectionTwoHome = ({
  refScroll,
}: {
  refScroll?: RefObject<HTMLDivElement | null>;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const scrollProgress = scrollLeft / maxScroll;
    setProgress(scrollProgress);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      ref={refScroll}
      className="w-full h-fit md:h-[560px] bg-white pt-24 md:pt-0"
    >
      <div className="h-full xl:max-w-[1900px] duration-500 md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-[25px] h-full ">
          {/* Headline and Subheadline */}
          <div className="lg:col-span-2 h-full flex flex-col gap-y-[15px] md:gap-y-[20px] padding-x md:pr-5 md:pt-[150px] lg:pt-[120px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.3,
              }}
              className="text-style-headline text-center md:text-start"
            >
              Yuk, Lihat Apa Yang Kamu Dapatkan Di Sini
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.3,
              }}
              className="text-style-subheadline text-text-sub-headline text-center md:text-start md:pr-5 lg:pr-10"
            >
              Mulai dari pengenalan investasi, sampai kamu bisa langsung tanya
              ConsulGen (Chatbot Genvest) saat bingung dengan istilah atau
              konsep hingga melindungi dari jebakan investasi ilegal.
            </motion.p>
          </div>

          {/* Card */}
          <div className="lg:col-span-3 flex flex-col justify-end border-b">
            <div className="flex justify-center md:justify-end">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ margin: "-50px", once: false }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.25, 0.25, 0.7],
                  delay: 0.4,
                }}
                className=" flex items-center gap-x-5 padding-x"
              >
                <p className="font-helvetica text-sm text-text-sub-headline">
                  Scroll Ke {progress * 100 > 90 ? "Kiri" : "Kanan"} Untuk
                  Melihat Semua.
                </p>
                {/* Rounded Progress */}
                <div
                  className={` h-[50px] w-[50px] rounded-full bg-white border ${
                    progress * 100 > 90 && "border-primary-green"
                  }  overflow-hidden`}
                >
                  <div
                    style={{ height: `${progress * 100}%` }}
                    className={`w-full h-[${
                      progress * 100
                    }%] bg-black flex justify-center items-center overflow-hidden`}
                  >
                    <Image
                      src={"/icons/fire.svg"}
                      alt="Fire Icon"
                      width={10}
                      height={10}
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div
              ref={scrollRef}
              className=" overflow-x-auto overflow-y-hidden scrollbar-hide  flex items-end  "
            >
              <div className="min-w-max   translate-y-[20px]  flex gap-x-[20px] h-[260px] sm:h-[290px] overflow-y-hidden px-4 md:px-5">
                {services.map((e, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 0.25, 0.25, 0.75],
                      delay: idx * 0.15,
                    }}
                    tabIndex={0}
                    className="flex-shrink-0 focus:translate-y-[0px] shadow-md translate-y-[10px] lg:translate-y-[20px] hover:translate-y-[0px] duration-300 h-fit rounded-xl w-[380px] sm:w-[400px] md:w-[430px] lg:w-[450px] bg-primary-green p-[25px] pb-[150px]"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.5,
                        ease: [0.25, 0.25, 0.25, 0.75],
                        delay: idx * 0.15 + 0.2,
                      }}
                    >
                      <Image
                        src={e.icon}
                        alt={e.title}
                        width={20}
                        height={20}
                        className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.25, 0.25, 0.75],
                        delay: idx * 0.15 + 0.3,
                      }}
                      className="flex flex-col gap-y-[10px] mt-[15px]"
                    >
                      <h3 className="font-helvetica font-normal text-[18px] sm:text-[20px] text-black">
                        {e.title}
                      </h3>
                      <p className="font-helvetica font-light text-black text-[15px] sm:text-base">
                        {e.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style jsx global>{`
          .scrollbar-hide {
            -ms-overflow-style: none; /* Internet Explorer 10+ */
            scrollbar-width: none; /* Firefox */
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
        `}</style>
      </div>
    </section>
  );
};

export default SectionTwoHome;
