"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <main className="bg-minor-grey h-screen w-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex items-center gap-x-5">
          {/* <motion.div
            initial={{ opacity: 0, x: 250, scale: 0.9 }}
            animate={{
              scale: [0.9, 1, 1, 1],
              x: [200, 0, 0, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              times: [0, 0.25, 0.75, 1],
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Image
              src="/Logo-Genvest.svg"
              alt="Genvest Logo"
              width={60}
              height={60}
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: 250, scale: 0.9 }}
            animate={{
              scale: [0.9, 1, 1, 1],
              x: [200, 0, 0, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              times: [0, 0.25, 0.75, 1],
              delay: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="bg-black p-2 rounded-xl"
          >
            <div className=" h-10 w-10 relative ">
              <Image
                src="/Logo-Genvest.svg"
                alt="Genvest Logo"
                fill
                className=""
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 250, scale: 0.9 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [200, 0, 0, 0],
              scale: [1, 1, 1, 1],
            }}
            transition={{
              duration: 2,
              times: [0, 0.25, 0.75, 1],
              delay: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h1 className="font-poppins text-black text-[30px] font-medium">
              Genvest.
            </h1>
          </motion.div>
        </div>
      </div>
    </main>
  );
};
export default SplashScreen;
