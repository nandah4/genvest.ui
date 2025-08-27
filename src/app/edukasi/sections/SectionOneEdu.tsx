"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SectionOneEdu = () => {
  const text = "Udah Tertarik, Mau Action.";

  // Split text into words for word-by-word animation
  const words = text.split(" ");
  return (
    <section
      className="bg-primary-green h-fit pt-32 lg:pt-0 pb-[75px] md:p-0 md:h-[500px] lg:h-[550px] xl:h-[480px] relative"
      style={{
        backgroundImage: "url(/images/home/patter-faq.png)",
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="xl:max-w-[1900px] padding-x h-full md:flex md:justify-center md:items-center sm:mx-auto">
        {/* Icon */}
        <div className="absolute left-3 bottom-8 md:left-[4%] md:bottom-[8%] z-0">
          <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px]  lg:w-[110px] lg:h-[110px] relative">
            <Image
              src="/icons/education/arrow-down.png"
              alt="Target"
              fill
              priority
            />
          </div>
        </div>

        {/* Icon 2*/}
        <div className="absolute right-3 top-20 md:right-[2%] md:top-[35%] lg:top-[30%] z-0">
          <div className="w-[70px] h-[70px] -rotate-90  md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px]  relative">
            <Image
              src="/icons/education/arrow-down.png"
              alt="Target"
              fill
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-y-[25px] items-center relative">
          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            viewport={{ margin: "-50px", once: false }}
            className="w-fit px-1 py-1  overflow-hidden flex items-center gap-x-3 shadow shadow-black/15 rounded-full bg-white mx-auto"
          >
            <div className="rounded-full bg-primary-green p-2">
              <Image
                src="/icons/education/book-open.svg"
                alt="Icon Book"
                width={25}
                height={25}
                className="w-6 h-6 rounded-icon-width"
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-style-headline !font-normal text-center "
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
            className="text-style-subheadline mx-auto text-black text-center"
          >
            Sebelum lompat, pastikan kamu tahu pijakannya. Edukasi ini bikin
            langkahmu lebih aman.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default SectionOneEdu;
