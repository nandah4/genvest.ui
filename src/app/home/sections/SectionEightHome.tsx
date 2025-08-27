"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/effect/marquee";
import { motion } from "framer-motion";
import Image from "next/image";
import { reviews } from "@/data/dummy";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  username,
  body,
  image,
}: {
  name: string;
  username: string;
  body: string;
  image: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[330px] sm:w-[350px] xl:w-[400px]  overflow-hidden rounded-xl border p-5",
        // light styles
        "border-gray-950/[.1] ",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="mb-5 h-11 w-11 md:w-12 md:h-12 border border-primary-green flex overflow-hidden justify-center items-center rounded-full bg-primary-green relative">
        <Image src={image} alt={name + " Pic"} fill  className="object-cover"/>
      </div>
      <blockquote className="font-helvetica font-light mb-3 text-[15px] md:text-base">
        {body}
      </blockquote>
      <div className="flex flex-row items-center gap-x-4">
        <div className="flex flex-col">
          <figcaption className="font-helvetica text-sm md:text-base font-normal dark:text-white">
            {name} -{" "}
            <span className="font-helvetica text-sm  dark:text-white/40">
              {username}
            </span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
};
const SectionEightHome = () => {
  return (
    <section className="py-20 md:py-28">
      <div>
        {/* Headline */}
        <div className="space-y-5  px-4 md:px-5">
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
              Testimoni 👨‍💻
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
            className="text-style-headline md:mx-auto text-center lg:w-[70%] xl:w-[60%] mb-[40px] md:mb-[50px] "
          >
            Kata Mereka Yang Sudah Memulai
          </motion.h1>
        </div>

        {/* Card Testimonies */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee className="[--duration:25s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:25s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
};
export default SectionEightHome;
