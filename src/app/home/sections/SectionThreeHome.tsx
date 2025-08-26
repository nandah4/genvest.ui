"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SectionThreeHome = () => {
  return (
    <section className="py-24 my-20 bg-white">
      <div className="lg:max-w-6xl xl:max-w-[1440px] mx-auto px-4 md:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-10 gap-y-8">
          {/* Column Headline */}
          <div className="col-span-1 flex flex-col gap-y-5 xl:gap-y-7 order-1 xl:order-none">
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              viewport={{ margin: "-50px", once: false }}
              className="w-fit px-5 md:px-6 py-2 md:py-2.5 overflow-hidden rounded-full bg-primary-green mx-auto lg:mx-0 mt-5"
            >
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                viewport={{ margin: "-50px", once: false }}
                className="text-style-subheadline lg:!text-base !font-normal"
              >
                30 Detik Mengenal Investasi 💰
              </motion.p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.35,
              }}
              className="text-center lg:text-start text-style-headline text-black"
            >
              Apa Itu <span className="bg-primary-green rounded-md  px-2">Investasi</span>
            </motion.h1>

            <div className="hidden lg:flex xl:hidden flex-col lg:gap-y-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.35,
              }}
              className="text-style-subheadline text-center md:text-start "
            >
              <span className="font-normal text-text-sub-headline">
                Investasi adalah cara mengalokasikan uang atau aset ke dalam
                suatu instrumen—seperti saham, reksadana, atau emas-dengan
                harapan nilainya akan bertambah di masa depan
              </span>
              . Tujuan utamanya? Tentu untuk dapat cuan, baik dari bunga,
              dividen, maupun kenaikan nilai aset itu sendiri.
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
              kemampuan dan tujuan kamu. Investasi itu bukan buat kaya mendadak,
              tapi untuk bantu masa depan kamu lebih aman.
            </motion.p>
          </div>
          </div>

          {/* Column Text */}

          <div className="space-y-[10px] sm:flex lg:hidden xl:flex xl:flex-col sm:gap-x-14 xl:pr-4 order-3 xl:order-none ">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.35,
              }}
              className="text-style-subheadline text-center  sm:text-start "
            >
              <span className="font-normal text-black selection:bg-primary-green">
                Investasi adalah cara mengalokasikan uang atau aset ke dalam
                suatu instrumen—seperti saham, reksadana, atau emas-dengan
                harapan nilainya akan bertambah di masa depan
              </span>
              . Tujuan utamanya? Tentu untuk dapat cuan, baik dari bunga,
              dividen, maupun kenaikan nilai aset itu sendiri.
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
              className="text-style-subheadline text-center sm:text-start"
            >
              Menurut Otoritas Jasa Keuangan (OJK), investasi berarti
              menempatkan dana ke dalam produk keuangan tertentu untuk
              mendapatkan imbal hasil. Tapi tenang, kamu nggak harus langsung
              paham semuanya kok. Yang penting, mulai dulu dari yang sesuai
              kemampuan dan tujuan kamu. Investasi itu bukan buat kaya mendadak,
              tapi untuk bantu masa depan kamu lebih aman.
            </motion.p>
          </div>

          {/* Column Image */}
          <div className="h-full w-full order-2 xl:order-none lg:col-span-1 lg:flex lg:items-center xl:items-start xl:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.25, 0.25, 0.75],
                delay: 0.15,
              }}
              className="relative h-[330px] w-full xss:w-[290px] md:h-[360px] md:w-[310px] lg:h-[430px] lg:w-[380px] xl:h-[440px]   mx-auto xl:mx-0"
            >
              <Image src="/images/home/asset-3.png" alt="Minvest Pic" fill />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThreeHome;
