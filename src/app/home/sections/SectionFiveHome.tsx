"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SectionFiveHome = () => {
  const text = "Risk comes from not knowing what you are doing.";

  // Split text into words for word-by-word animation
  const words = text.split(" ");

  return (
    <>
      <section
        className="bg-minor-grey/40 py-24 md:py-28 overflow-hidden relative"
        style={{
          backgroundImage: "url(/images/home/patter-faq.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute h-[400px] w-[400px] md:h-[500px] md:w-[500px] xl:h-[700px] xl:w-[700px] duration-700  rounded-full bg-primary-green/80 bottom-[-50%] sm:bottom-[-65%] md:bottom-[-80%] xl:bottom-[-110%] right-1/2 translate-x-[50%] z-0 blur-3xl"></div>
        <div className="z-10 xl:max-w-[1900px] duration-500 sm:mx-auto padding-x ">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-[60px]">
            <div className="md:col-span-3  md:order-2 md:flex md:justify-end relative">
              <motion.h1
                className="font-helvetica w-[95%] mx-auto lg:w-[90%] uppercase text-[35px] leading-11 md:text-[40px] md:leading-14 lg:text-[45px] lg:leading-16 xl:text-[50px] xl:leading-[70px]  z-10 text-center md:text-start font-medium relative"
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
                      duration: 0.8,
                      ease: [0.25, 0.25, 0.25, 0.75],
                    }}
                    className="inline-block mr-3 last:mr-0"
                  >
                    {index == 2 ? (
                      <>
                        {" FR "}
                        <div className="inline-block h-9 w-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 relative flex-shrink-0">
                          <Image
                            alt="Icon Scanner"
                            src="/images/recommendation/gen-rec.png"
                            fill
                          />
                        </div>
                        {" M"}
                      </>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Card Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.3,
              }}
              className="z-20 flex justify-center md:justify-start items-center gap-x-5 md:col-span-2 md:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.25, 0.25, 0.75],
                  delay: 0.5,
                }}
                className="flex -space-x-7"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.75],
                    delay: 0.6,
                  }}
                  className="w-12 h-12 lg:w-14 lg:h-14 bg-white border-2 border-white rounded-full overflow-hidden relative"
                >
                  <Image
                    src="/images/home/wb-1.jpg"
                    alt="Warren Buffet Pict 1"
                    fill
                    className="w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.75],
                    delay: 0.7,
                  }}
                  className="w-12 h-12 lg:w-14 lg:h-14 border-2 border-white rounded-full overflow-hidden relative"
                >
                  <Image
                    src="/images/home/wb-2.jpg"
                    alt="Warren Buffet Pict 2"
                    fill
                    className="w-full object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.25, 0.25, 0.75],
                  delay: 0.8,
                }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    delay: 0.9,
                    duration: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.75],
                  }}
                  className="font-helvetica text-base font-normal lg:text-lg z-10"
                >
                  Warren Buffet
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    delay: 1.0,
                    duration: 0.5,
                    ease: [0.25, 0.25, 0.25, 0.75],
                  }}
                  className="font-helvetica text-sm lg:text-base font-light z-10"
                >
                  Investor dan Pengusaha
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFiveHome;

// {words.map((word, index) => (
//   <motion.span
//     key={index}
//     variants={{
//       hidden: {
//         opacity: 0,
//         scale: 0.3,
//         y: 20,
//       },
//       visible: {
//         opacity: 1,
//         scale: 1,
//         y: 0,
//       },
//     }}
//     transition={{
//       duration: 0.6,
//       ease: [0.25, 0.46, 0.45, 0.94],
//       type: "spring",
//       stiffness: 200,
//       damping: 20,
//     }}
//     className="inline-block mr-2"
//   >
//     {word}
//   </motion.span>
// ))}
