import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section className="h-dvh  bg-white w-full flex justify-center items-center">
      <div className=" w-full h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-5 w-full h-full">
          <div className="col-span-1 lg:col-span-2 flex items-center justify-center w-full px-5">
            <div className="gap-y-7 flex flex-col max-w-md w-full ">
              {/* Logo */}
              <div className="flex gap-x-4 items-center justify-center pl-3 md:pl-0">
                <div className="bg-black p-2 rounded-xl">
                  <div className=" h-7 w-7 relative ">
                    <Image src="/Logo-Genvest.svg" alt="Genvest Logo" fill />
                  </div>
                </div>

                <h2
                  className={`font-helvetica font-normal  text-xl sm:text-[22px] md:text-2xl `}
                >
                  Genvest.
                </h2>
              </div>

              {/* Headline */}
              <div className="flex flex-col gap-y-2 md:gap-y-3">
                <h3 className="font-helvetica text-lg lg:text-[23px] xl:text-[28px]  text-center">
                  Selamat Datang Kembali
                </h3>
                <p className="text-style-subheadline text-center">
                  Masuk untuk mencoba semua fitur di{" "}
                  <span className="!font-normal">Genvest</span>.
                </p>
              </div>

              <div className="flex flex-col gap-y-3 lg:gap-y-4 w-full">
                <div className="w-full">
                  <label className="label-style" htmlFor="email">
                    Email <span className="!text-red-600">*</span>
                  </label>
                  <input
                    className=" mt-3 input-form-text focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="faisalaja@gmail.com"
                  />
                </div>
                <div className="w-full">
                  <label className="label-style" htmlFor="pw">
                    Password <span className="!text-red-600">*</span>
                  </label>
                  <div className="mt-3 relative">
                    <input
                      className="  input-form-text focus:outline-none focus:shadow-outline"
                      id="pw"
                      type="text"
                      placeholder="********"
                    />

                    <div className="h-fit cursor-pointer w-fit absolute right-3 lg:right-5 translate-y-[-50%] top-1/2 z-10">
                      <div className="h-5 lg:w-6  w-5 lg:h-6 relative">
                        <Image
                          src="/icons/eye-slash.svg"
                          alt="Eye Slash"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="my-1 underline text-style-subheadline !font-normal lg:!text-base !text-end">
                  Lupa Password?
                </p>
                <Link href="/">
                  <button className="py-3 w-full cursor-pointer hover:scale-105 duration-500 shadow bg-primary-green text-style-subheadline lg:!text-base !font-normal rounded-full">
                    Masuk
                  </button>
                </Link>

                <p className="my-1 text-style-subheadline !font-normal lg:!text-base !text-center">
                  Atau
                </p>
                <button className="py-3 cursor-pointer hover:scale-105 duration-500 shadow w-full bg-primary-green text-style-subheadline lg:!text-base !font-normal rounded-full flex gap-x-3 items-center justify-center">
                  <div className=" h-6 w-6 relative ">
                    <Image src="/icons/google.svg" alt="Genvest Logo" fill />
                  </div>
                  Masuk Dengan Google
                </button>
                <p className="mt-3  text-style-subheadline lg:!text-base !font-normal !text-center">
                  Belum Punya Akun?{" "}
                  <span className="underline">Daftar Di Sini</span>
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-3 w-full p-5">
            <div className="w-full h-full  relative rounded-xl overflow-hidden">
              <div className="bg-black/70 z-10 absolute inset-0"></div>
              <div className="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] z-10 w-[400px] h-[220px] xl:w-[500px] xl:h-[320px] rotate-3">
                <Image src="/images/home-pic.png" alt="Bg Login" fill />
              </div>

              <div className="px-4 -rotate-3 py-3 w-fit blur-[2px] h-fit bg-white rounded-full z-10 absolute left-20 top-1/2 translate-y-[-50%]">
                <p className="font-helvetica text-xl">😁 Genvest Asik!</p>
              </div>
              <div className="px-4 py-3 w-fit blur-[2px] h-fit bg-white rounded-full z-10 absolute right-20 top-1/2 translate-y-[-0%]">
                <p className="font-helvetica text-xl">😎 Genvest Keren!</p>
              </div>
              <Image
                src="/images/login-asset.jpg"
                alt="Bg Login"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
