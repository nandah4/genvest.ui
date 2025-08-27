"use client";

import Image from "next/image";
import Link from "next/link";

const CtaSectionHome = () => {
  return (
    <section className="w-full padding-x mb-10">
      <div className=" xl:max-w-[1900px] sm:mx-auto bg-primary-green rounded-3xl relative py-24 2xl:py-40 overflow-hidden">
        <div className="hidden sm:block absolute z-0 -right-15 -bottom-25 h-fit w-fit">
          <div className=" h-[300px] w-[250px] relative">
            <Image src="/images/home/rocket.png" alt="Failed Pic" fill />
          </div>
        </div>
        <div className="lg:hidden absolute z-0 left-1/2 translate-x-[-50%] sm:-left-5 sm:translate-0  -bottom-2 h-fit w-fit">
          <div className="h-[250px] w-[390px] relative">
            <Image
              src="/images/home/ass-cta-home-left.png"
              alt="Failed Pic"
              fill
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-2">
          {/* Image */}
          <div className="hidden lg:block  col-span-1">
            <div className="absolute z-0 left-0 xl:left-10   -bottom-2 h-fit w-fit">
              <div className=" lg:h-[400px] lg:w-[540px] xl:h-[430px] xl:w-[560px] relative">
                <Image
                  src="/images/home/ass-cta-home-left.png"
                  alt="Failed Pic"
                  fill
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-1 relative z-10 h-full flex gap-y-8 px-2 flex-col items-center justify-center lg:items-start lg:pr-10">
            <h1 className="text-style-headline text-black uppercase !font-normal text-center lg:text-start sm:px-10 md:px-20 lg:px-0">
              Investasi Itu Perjalanan, Bukan Kejar-Kejaran‼️.
            </h1>
            <p className="px-1 rounded text-style-subheadline text-black text-center lg:text-start">
              Biar gak sekadar ikut tren doang, yuk kenali tips sampai
              resikonya.
            </p>

            <div className="flex flex-wrap gap-y-5 justify-center lg:justify-start gap-x-4 md:gap-x-6">
              <Link href="/edukasi">
                <button className="group relative rounded-full bg-black px-6 py-3 lg:px-8 lg:py-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <p className="relative cta-button-text !text-primary-green z-10">
                    Panduan Investasi
                  </p>
                </button>
              </Link>

              <Link href="/rekomendasi">
                <button className="group relative lg:hover:border border-black rounded-full bg-primary-green px-6 py-3 lg:px-8 lg:py-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <p className="relative cta-button-text  z-10">
                    Rekomendasi & Deteksi
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSectionHome;
