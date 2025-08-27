import Image from "next/image";
import Link from "next/link";

const FullPageChat = () => {
  return (
    <section className="bg-minor-grey h-dvh flex justify-center items-center px-4 md:px-5 relative">
      <div className="xl:max-w-[1900px] padding-x mx-auto flex justify-end absolute h-fit inset-0 py-4 md:py-5">
        <div className="flex gap-x-5 items-center">
          <p className="font-helvetica underline md:text-lg">Hai, Faisal</p>

          <Link href="/">
            <button className="cursor-pointer h-8 w-8 md:w-9 md:h-9 lg:h-10 lg:w-10 overflow-hidden bg-red-600 relative rounded-full">
              <Image src="/images/profile-faisal.jpeg" alt="Profile" fill />
            </button>
          </Link>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-2xl xl:max-w-4xl w-full flex flex-col gap-y-5 md:gap-y-7 lg:gap-y-10 justify-center items-center">
        <div className="flex gap-x-4 items-center">
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

        {/* Field Chat */}
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
            className="h-[35vh] overflow-y-auto w-full relative resize-none bg-white rounded-lg p-5 outline-none space-y-5 flex flex-col justify-between"
          >
            <p className="font-helvetica text-[15px] pt-10 md:text-base text-gray-700">
              Curhat atau konsultasi soal investasimu…
            </p>
          </div>

          <div className="absolute bottom-4 inset-x-4 flex  gap-x-4 gap-y-2 items-start">
            <div className="w-full shadow cursor-pointer hover:scale-105 duration-500 p-4 flex items-center justify-start gap-x-4  rounded-full bg-primary-green">
              <div className="h-5 w-5  relative">
                <Image
                  src="/icons/ask-ai/generate-chat.svg"
                  alt="Genvest Icon"
                  fill
                />
              </div>
              <p className="font-helvetica text-sm md:text-base">
                Arti istilah capital gain?
              </p>
            </div>

            <div className="w-full shadow cursor-pointer hover:scale-105 duration-500 p-4 hidden sm:flex items-center justify-start gap-x-4  rounded-full bg-primary-green">
              <div className="h-5 w-5  relative">
                <Image
                  src="/icons/ask-ai/generate-chat.svg"
                  alt="Genvest Icon"
                  fill
                />
              </div>
              <p className="font-helvetica text-sm md:text-base">
                Kenapa diversifikasi itu penting?
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-fit">
          <p className="text-style-subheadline text-center md:!text-start !font-normal">
            Riwayat Chat
          </p>
        </div>
      </div>
    </section>
  );
};
export default FullPageChat;
