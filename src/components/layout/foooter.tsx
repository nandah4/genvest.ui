import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-green py-14">
      <div className="xl:max-w-[1900px] padding-x duration-500 mx-auto">
        <div className="flex flex-col gap-y-[30px]  lg:gap-y-12">
          {/* Logo */}
          <div className="flex justify-center  gap-x-4 items-center">
            <div className="bg-black p-2 rounded-xl">
              <div className=" h-9 w-9 relative ">
                <Image
                  src="/Logo-Genvest.svg"
                  alt="Genvest Logo"
                  fill
                  className=""
                />
              </div>
            </div>

            <h2
              className={`font-helvetica font-normal text-xl sm:text-[24px] md:text-[28px] `}
            >
              Genvest.
            </h2>
          </div>

          {/* Main Content */}
          <div className="">
            <p className="font-helvetica text-base md:text-lg xl:text-xl font-light leading-7 lg:leading-8 sm:w-[70%] sm:mx-auto text-center">
              Genvest sebagai Platform Edukasi investasi untuk Gen Z: simpel,
              anti-FOMO, dan bebas investasi ilegal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5">

            <div className="flex justify-center lg:justify-evenly flex-wrap sm:col-span-1">
              <ul className="flex justify-center items-center flex-col gap-y-2">
                <li className="footer-text-headsub mb-2">Navigasi</li>
                <li className="footer-text-sub hover:underline">
                  <Link href="/">Beranda</Link>
                </li>
                <li className="footer-text-sub hover:underline">
                  <Link href="/edukasi">Panduan Investasi</Link>
                </li>
                <li className="footer-text-sub hover:underline">
                  <Link href="/rekomendasi">Deteksi & Rekomendasi</Link>
                </li>
                <li className="footer-text-sub hover:underline">
                  <Link href="/ask-ai">ConsulGen</Link>
                </li>
              </ul>
            </div>

            <div className="flex justify-center lg:justify-evenly flex-wrap md:col-span-1 ">
              <ul className="flex flex-col items-center gap-y-2">
                <li className="footer-text-headsub mb-2">Akses Akun</li>
                <li className="footer-text-sub hover:underline">
                  <Link href="/login">Login</Link>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-1 gap-y-2 flex flex-col items-ceter ">
              <p className="footer-text-headsub text-center mb-2">Sosial Media</p>
              <ul className="flex justify-center gap-x-5">
                <li>
                  <div className="w-6 h-6 lg:h-8 lg:w-8 relative">
                    <Image alt="Facebook Icon" src="/icons/facebook.svg" fill />
                  </div>
                </li>
                <li>
                  <div className="w-6 h-6 lg:h-8 lg:w-8 relative">
                    <Image alt="Facebook Icon" src="/icons/youtube.svg" fill />
                  </div>
                </li>
                <li>
                  <div className="w-6 h-6 lg:h-8 lg:w-8 relative">
                    <Image
                      alt="Facebook Icon"
                      src="/icons/instagram-alt.svg"
                      fill
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-black/20 pt-10">
            <p className="font-helvetica text-base md:text-lg  text-center font-normal">
              © Genvest 2025. Website ini dibuat sebagai bagian dari kompetisi
              Web Design INTECH 2025.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
