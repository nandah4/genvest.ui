"use client";

import Image from "next/image";
import Link from "next/link";

const CtaSectionHome = () => {
  return (
    <section className="w-full px-4 md:px-5 mb-10">
      {/* Overlay */}
      <div className=" lg:max-w-6xl xl:max-w-[1440px] sm:mx-auto bg-primary-green rounded-lg relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute z-0 -right-4 -bottom-0 h-fit w-fit">
          <div className="h-[200px] w-[150px] lg:h-[300px] lg:w-[200px] relative">
            <Image src="/images/home/fail.png" alt="Failed Pic" fill />
          </div>
        </div>
        <div className=" absolute z-0 -left-15 lg:-left-12 -bottom-8 lg:-bottom-14 h-fit w-fit">
          <div className="h-[250px] w-[350px] lg:h-[350px] lg:w-[500px] relative">
            <Image src="/images/home/icon-cta-2.png" alt="Failed Pic" fill />
          </div>
        </div>

        <div className="relative z-10 space-y-5 h-full lg:flex lg:flex-col items-center justify-center px-3">
          <h1 className="text-style-headline text-black text-center sm:w-[80%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto">
            Investasi Itu Perjalanan, Bukan Kejar-Kejaran.
          </h1>
          <p className="text-style-subheadline !font-normal text-black sm:w-[80%] md:w-[70%] lg:w-[50%] text-center mx-auto">
            Biar gak sekadar ikut tren doang, yuk kenali tips sampai resikonya.
          </p>

          <div className="flex flex-wrap gap-y-4 justify-center gap-x-4 md:gap-x-6">
            <Link href="/edukasi">
              <button className="group relative rounded-full bg-black px-6 py-3 lg:px-8 lg:py-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                <p className="relative cta-button-text !text-primary-green z-10">
                  Panduan Investasi
                </p>
              </button>
            </Link>

            <Link href="/rekomendasi">
              <button className="group relative lg:border border-black rounded-full bg-primary-green px-6 py-3 lg:px-8 lg:py-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                <p className="relative cta-button-text  z-10">
                  Rekomendasi & Deteksi
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSectionHome;
