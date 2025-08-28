import Image from "next/image";
import Link from "next/link";

const FullPageChat = () => {
  return (
    <section className="bg-minor-grey h-dvh flex justify-center items-center padding-x relative">
      <div className="xl:max-w-[1900px] padding-x mx-auto flex justify-end fixed h-fit inset-0 pt-4 md:pt-5">
        <div className="flex gap-x-5 items-center">
          <p className="font-helvetica underline md:text-lg">Hai, Faisal</p>

          <Link href="/">
            <button className="hover:ring-1 ring-amber-400 cursor-pointer h-9 w-9 md:w-10 md:h-10 lg:h-11 lg:w-11 overflow-hidden bg-red-600 relative rounded-full">
              <Image src="/images/profile-faisal.jpeg" alt="Profile" fill />
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl h-full overflow-y-auto py-20 xss:py-0  xl:max-w-4xl w-full flex flex-col gap-y-7 md:gap-y-8 lg:gap-y-10 justify-center items-center">
        <div className="flex gap-x-4 items-center mt-36 xss:mt-0">
          <div className="h-10 w-10 relative">
            <Image src="/icons/ask-ai/Subtract.svg" alt="Genvest Icon" fill />
          </div>
          <h2 className="font-helvetica text-base md:text-lg font-bold">
            ConsulGen.
          </h2>
        </div>

        <div className="space-y-4">
          <h1 className="text-style-headline !font-normal text-center">
            Selamat Pagi, Faisal
          </h1>
          <p className="text-style-subheadline text-center">
            Satu obrolan bisa bikin kamu lebih paham investasi. Yuk, mulai
            percakapan dan temukan jawabannya.
          </p>
        </div>

        {/* Field Chat and Generate Chat*/}
        <div className="space-y-2">
          <div className="h-fit w-full relative">
            {/* Icon Right Top */}
            <div className="flex gap-x-3 z-10 absolute right-4 top-4">
              <div className="p-2 rounded-md bg-primary-green cursor-pointer">
                <div className="h-5 w-5 relative">
                  <Image
                    src="/icons/ask-ai/link-alt.svg"
                    alt="Genvest Icon"
                    fill
                  />
                </div>
              </div>
              <div className="p-2 rounded-md bg-primary-green cursor-pointer">
                <div className="h-5 w-5 relative">
                  <Image
                    src="/icons/arrow-up-right.svg"
                    alt="Genvest Icon"
                    fill
                  />
                </div>
              </div>
            </div>

            <div
              contentEditable
              suppressContentEditableWarning
              className="h-[25vh] border overflow-y-auto w-full relative resize-none bg-white rounded-lg p-5 outline-none space-y-5 flex flex-col justify-between"
            >
              <p className="font-helvetica text-[15px] pt-10 md:text-base text-gray-700">
                Curhat atau konsultasi soal investasimu…
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 sm:flex-row">
            <div className="w-full cursor-pointer hover:scale-105 duration-500 p-4 rounded-lg flex items-center justify-start gap-x-4  border bg-white ">
              <div className="rounded-full h-fit w-fit p-2 bg-minor-grey">
                <div className="h-6 w-6 relative ">
                  <Image
                    src="/icons/ask-ai/generate-chat.svg"
                    alt="Genvest Icon"
                    fill
                  />
                </div>
              </div>
              <p className="font-helvetica text-[15px] md:text-base">
                Kalau harga saham turun, mending cut loss atau tahan?
              </p>
            </div>
            <div className="w-full cursor-pointer hover:scale-105 duration-500 p-4 rounded-lg flex items-center justify-start gap-x-4  border bg-white ">
              <div className="rounded-full h-fit w-fit p-2 bg-minor-grey">
                <div className="h-6 w-6 relative ">
                  <Image
                    src="/icons/ask-ai/generate-chat.svg"
                    alt="Genvest Icon"
                    fill
                  />
                </div>
              </div>
              <p className="font-helvetica text-[15px] md:text-base">
                Diversifikasi portofolio itu maksudnya apa sih?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FullPageChat;
