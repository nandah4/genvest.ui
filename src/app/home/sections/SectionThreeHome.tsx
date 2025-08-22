"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SectionThreeHome = () => {
  return (
    <section className="py-20 my-20 bg-white">
      <div className="lg:max-w-6xl xl:max-w-[1440px] mx-auto px-4 md:px-5">
        <div className="grid gap-x-5 grid-cols-1 md:grid-cols-2 md:gap-x-12 space-y-10 md:space-y-0">
          <div className="w-full h-full md:col-span-1 md:order-2 flex justify-center items-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.3,
              }}
              className="relative h-[300px] w-full xss:w-[400px] lg:h-[380px] lg:w-[440px] xl:h-[430px]    xl:w-[490px]"
            >
              <Image src="/images/home/asset-sec3-home.png" alt="Minvest Pic" fill />
            </motion.div>
          </div>

          <div className="space-y-5 md:space-y-7 md:col-span-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.3,
              }}
              className="text-center md:text-start text-style-headline text-black"
            >
              Apa itu Investasi
            </motion.h1>
            <div className="space-y-[10px] lg:pl-[60px] lg:border-l-2  border-primary-green">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.25, 0.25, 0.75],
                  delay: 0.3,
                }}
                className="text-style-subheadline text-center md:text-start "
              >
                <span className="font-normal text-text-sub-headline">Investasi adalah cara mengalokasikan uang atau aset ke dalam
                suatu instrumen—seperti saham, reksadana, atau emas-dengan
                harapan nilainya akan bertambah di masa depan</span>. Tujuan utamanya?
                Tentu untuk dapat cuan, baik dari bunga, dividen, maupun
                kenaikan nilai aset itu sendiri.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: false }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="text-style-subheadline text-center md:text-start"
              >
                Menurut Otoritas Jasa Keuangan (OJK), investasi berarti
                menempatkan dana ke dalam produk keuangan tertentu untuk
                mendapatkan imbal hasil. Tapi tenang, kamu nggak harus langsung
                paham semuanya kok. Yang penting, mulai dulu dari yang sesuai
                kemampuan dan tujuan kamu. Investasi itu bukan buat kaya
                mendadak, tapi untuk bantu masa depan kamu lebih aman.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThreeHome;
