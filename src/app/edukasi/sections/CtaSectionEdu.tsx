"use client";
import Image from "next/image";
import Link from "next/link";

const CtaSectionEdu = () => {
  return (
    <section
      className="w-full relative px-4 md:px-5 mb-10"
     
    >
      {/* Overlay */}
      <div className=" lg:max-w-6xl xl:max-w-[1440px] sm:mx-auto rounded-2xl  h-full relative py-20 lg:py-32 overflow-hidden bg-primary-green">
        <div className=" absolute z-0 -right-5 lg:left-55 -bottom-10 lg:-bottom-12 h-fit w-fit">
          <div className="h-[240px] w-[170px] md:h-[280px] md:w-[170px] lg:h-[340px] lg:w-[220px]  relative">
            <Image src="/images/education/woman.png" alt="Failed Pic" fill />
          </div>
        </div>
        <div className=" absolute z-0 -left-15 lg:left-0 -bottom-3 lg:-bottom-3 h-fit w-fit">
          <div className="h-[280px] w-[220px] md:h-[300px] md:w-[200px] lg:h-[400px] lg:w-[300px] relative">
            <Image src="/images/education/man.png" alt="Failed Pic" fill />
          </div>
        </div>
        <div className="grid lg:grid-cols-5 h-full">
          <div className="lg:col-span-2"></div>

          <div className="lg:col-span-3 relative z-10 space-y-5 h-full lg:flex lg:flex-col items-center justify-center lg:items-start px-3">
            <h1 className="text-style-headline text-black text-center sm:w-[80%] md:w-full mx-auto  lg:text-start">
              Yuk, Pilih Investasi Sesuai Gayamu 🚀
            </h1>
            <p className="text-style-subheadline  !font-normal text-black w-[90%] sm:w-[80%] md:w-[70%] lg:w-full text-center lg:text-start mx-auto">
              Temukan rekomendasi investasi yang sesuai tujuanmu, plus cek
              legalitas biar nggak ketipu.
            </p>

            <div className="flex flex-wrap gap-y-4 justify-center gap-x-4 md:gap-x-6 px-5 lg:p-0">
              <Link href="/rekomendasi">
                <button className="group relative rounded-full bg-black px-6 py-3 lg:px-7 lg:py-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <p className="relative cta-button-text z-10 !text-primary-green">
                    Deteksi & Rekomendasi
                  </p>
                </button>
              </Link>

              <Link href="/ask-ai">
                <button className="group relative lg:border border-black rounded-full bg-primary-green px-6 py-3 lg:px-7 lg:py-4 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <p className="relative cta-button-text  z-10">ConsulGen</p>
                </button>
              </Link>

              {/* Secondary Button */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSectionEdu;
