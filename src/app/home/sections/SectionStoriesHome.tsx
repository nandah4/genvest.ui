"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const SectionStoriesHome = () => {
  const [selectStory, setStory] = useState<number>(-1);
  const [overlay, setOverlay] = useState<boolean>(false);

  const [isQuest, setIsQuest] = useState(false);

  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlay]);

  const stories = [
    {
      image: "/images/home/logia.png",
      title: "Karina - Investasi dengan Pemahaman",
      shortDesc:
        "Karina, 23 tahun, memilih belajar investasi dulu sebelum menaruh uangnya.",
      story: [
        "Karina adalah seorang mahasiswi akhir yang juga bekerja part-time di sebuah coffee shop. Dari gajinya yang tidak seberapa, ia selalu menyisihkan 20% untuk tabungan dan mencoba berinvestasi. Namun sebelum benar-benar menaruh uang, Karina meluangkan waktu mengikuti kelas online, membaca artikel finansial, hingga berdiskusi dengan mentor mengenai saham, reksa dana, dan risiko tiap instrumen. Ia sadar bahwa pemahaman dasar lebih penting daripada sekadar ikut-ikutan tren.",
        "Setelah mengetahui profil risikonya yang cenderung moderat, Karina memutuskan berinvestasi di reksa dana pasar uang dan sebagian kecil di saham blue-chip. Dalam dua tahun, portofolionya tumbuh stabil hingga 12% tanpa membuatnya panik ketika harga saham sesekali turun. Dari proses ini, Karina belajar bahwa investasi bukan sekadar mengejar return tinggi, melainkan membangun kebiasaan sehat, punya strategi jangka panjang, dan tetap tenang menghadapi fluktuasi.",
      ],
      quiz: [
        {
          quest:
            "Mengapa strategi Karina bisa memberikan hasil yang stabil meskipun ia bukan investor berpengalaman?",
          answerOptions: [
            "Karena ia fokus pada edukasi dan memilih instrumen sesuai profil risikonya",
            "Karena ia mengikuti rekomendasi teman dan tren media sosial",
            "Karena ia menaruh seluruh uangnya di aset berisiko tinggi",
          ],
        },
        {
          quest:
            "Apa pelajaran utama yang bisa diambil dari pengalaman Karina bagi investor pemula?",
          answerOptions: [
            "Pentingnya memahami dasar investasi dan tujuan finansial sebelum mulai",
            "Semakin cepat ikut tren, semakin besar peluang cuan",
            "Hasil besar selalu datang dari investasi berisiko tinggi",
          ],
        },
      ],
    },
    {
      image: "/images/home/fomo.png",
      title: "Dimas - Investasi karena FOMO",
      shortDesc:
        "Dimas, 22 tahun, ikut-ikutan investasi karena tren teman-temannya.",
      story: [
        "Dimas adalah fresh graduate yang baru mendapat pekerjaan pertamanya. Saat melihat grup WhatsApp temannya membicarakan crypto yang sedang 'to the moon', ia merasa ketinggalan. Tanpa pertimbangan matang, ia mengalokasikan seluruh tabungan Rp10 juta untuk membeli token yang sedang viral. Keputusan itu bukan karena riset, melainkan rasa takut kehilangan kesempatan (FOMO).",
        "Awalnya ia sempat merasakan keuntungan singkat, namun tak lama harga token jatuh hingga ia kehilangan 70% modalnya. Dimas panik dan menyesal, karena tidak memikirkan kebutuhan lain seperti dana darurat atau tujuan finansial jangka panjang. Dari pengalaman pahit ini, ia belajar bahwa mengikuti tren tanpa pemahaman justru bisa membuat seseorang kehilangan uang, dan bahwa edukasi adalah pondasi terpenting sebelum berinvestasi.",
      ],
      quiz: [
        {
          quest:
            "Apa risiko terbesar dari keputusan Dimas menginvestasikan seluruh tabungannya di aset hype?",
          answerOptions: [
            "Tidak ada diversifikasi sehingga risiko kerugian sangat tinggi",
            "Ia memilih produk yang terlalu aman dan lambat berkembang",
            "Ia mengikuti mentor profesional yang salah memberi saran",
          ],
        },
        {
          quest:
            "Jika Dimas ingin memperbaiki strategi investasinya ke depan, apa langkah paling bijak yang seharusnya ia lakukan?",
          answerOptions: [
            "Belajar memahami instrumen investasi sebelum masuk dan mulai dari yang risikonya rendah",
            "Menunggu tren berikutnya dan segera masuk agar tidak tertinggal lagi",
            "Menginvestasikan kembali seluruh gajinya ke aset yang sedang naik",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 my-20 bg-white">
      <div className="lg:max-w-6xl xl:max-w-[1440px] mx-auto padding-x">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.25, 0.25, 0.75],
            delay: 0.3,
          }}
          className="text-style-headline text-center  md:w-[80%] xl:w-[65%] mx-auto mb-[20px]"
        >
          Paham vs FOMO: Kisah Dua Investor Pemula.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.25, 0.25, 0.75],
            delay: 0.3,
          }}
          className="text-style-subheadline text-text-sub-headline text-center mx-auto w-[85%] xl:w-[75%] mb-[40px] md:mb-[50px]"
        >
          Klik untuk membaca cerita, ambil pelajaran, dan uji dirimu lewat quiz.
        </motion.p>

        <div className="flex flex-col gap-y-5">
          {stories.map((e, idx) => {
            if (idx == 0) {
              return (
                <motion.div
                  key={e.shortDesc + idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="grid grid-cols-1 gap-x-5 md:grid-cols-5"
                >
                  {/* Image Column - Large on Desktop */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="md:col-span-3 w-full h-[380px] md:h-[420px] rounded-md p-3 flex items-end relative overflow-hidden"
                  >
                    <Image
                      src={e.image}
                      alt="image"
                      fill
                      className="z-0 object-cover"
                    />
                    <div className="md:hidden absolute z-10 bg-black/40 inset-0"></div>

                    {/* Mobile Content Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="z-10 md:hidden w-full bg-primary-green p-4 sm:p-5 rounded-md space-y-[10px]"
                    >
                      <h5 className="font-helvetica text-lg text-black">
                        {e.title}
                      </h5>
                      <p className="font-helvetica font-light text-[15px] text-black">
                        {e.shortDesc}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setOverlay(true);
                          setStory(idx);
                        }}
                        className="mt-[5px] cursor-pointer rounded-full bg-black px-6 py-2.5 font-helvetica font-normal text-sm text-primary-green transition-colors duration-200 "
                      >
                        Baca Kisahnya
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* Text Column - Desktop Only */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="hidden md:flex flex-col justify-center items-start md:col-span-2 p-3 gap-y-5"
                  >
                    <h5 className="title-inner-card text-black">{e.title}</h5>
                    <p className="desc-inner-card text-black">{e.shortDesc}</p>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setOverlay(true);
                        setStory(idx);
                      }}
                      className="mt-[5px] cursor-pointer hover:scale-105 rounded-full bg-primary-green px-7 py-3 cta-button-text transition-all duration-500 hover:shadow-md"
                    >
                      Baca Kisahnya
                    </motion.button>
                  </motion.div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={e.shortDesc + idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  }}
                  className="grid grid-cols-1 gap-x-5 md:grid-cols-5"
                >
                  {/* Text Column - First on Desktop */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="md:col-span-2 w-full h-[380px] md:h-[420px] rounded-md p-3 flex items-end relative overflow-hidden"
                  >
                    {/* Mobile Image Background */}
                    <Image
                      src={e.image}
                      alt="image"
                      fill
                      className="z-0 md:hidden object-cover"
                    />
                    <div className="md:hidden absolute z-10 bg-black/40 inset-0"></div>

                    {/* Mobile Content Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                      className="z-20 md:hidden w-full bg-primary-green p-4 sm:p-5 rounded-md space-y-[10px]"
                    >
                      <h5 className="font-helvetica text-lg text-black">
                        {e.title}
                      </h5>
                      <p className="font-helvetica font-light text-[15px] text-black">
                        {e.shortDesc}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setOverlay(true);
                          setStory(idx);
                        }}
                        className="mt-[5px] rounded-full bg-black px-6 py-2.5 font-helvetica font-normal text-[15px] text-primary-green transition-colors duration-200 cursor-pointer "
                      >
                        Baca Kisahnya
                      </motion.button>
                    </motion.div>

                    {/* Desktop Text Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="hidden h-full md:flex flex-col justify-center items-end p-3 gap-y-5"
                    >
                      <h5 className="title-inner-card text-black !text-end">{e.title}</h5>
                      <p className="desc-inner-card text-black !text-end">
                        {e.shortDesc}
                      </p>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setOverlay(true);
                          setStory(idx);
                        }}
                        className="mt-[5px] cursor-pointer hover:scale-105 rounded-full bg-primary-green px-7 py-3 cta-button-text transition-all duration-500 hover:shadow-md"
                      >
                        Baca Kisahnya
                      </motion.button>
                    </motion.div>
                  </motion.div>

                  {/* Image Column - Large on Desktop */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      backgroundImage: `url(${e.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="hidden md:flex rounded-md md:col-span-3 transition-transform duration-300"
                  ></motion.div>
                </motion.div>
              );
            }
          })}
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {overlay && (
          <div
            onClick={() => setOverlay(false)}
            className="z-50 fixed inset-0 bg-black/60 flex items-center justify-center px-4 sm:px-5"
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white h-[65vh] md:h-[50vh] px-5 lg:px-7 py-8 lg:py-9 md:max-w-3xl rounded-xl overflow-hidden relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setOverlay(false)}
                className="absolute rounded-full p-1 z-10 top-3 right-3  lg:top-4 lg:right-4"
              >
                <Image
                  src="/icons/multiply.svg"
                  alt="button"
                  height={20}
                  width={20}
                  className="w-5 h-5 lg:h-6 lg:w-6 cursor-pointer"
                />
              </button>

              <div className="absolute shadow-md bottom-0 inset-x-0 flex w-full">
                <button
                  onClick={() => setIsQuest(false)}
                  className={`w-full cursor-pointer  border-r hover:bg-primary-green  ${
                    isQuest ? "bg-white" : "bg-primary-green"
                  } duration-500 cta-button-text py-3`}
                >
                  Cerita
                </button>
                <button
                  onClick={() => setIsQuest(true)}
                  className={`w-full cursor-pointer hover:bg-primary-green duration-500 ${
                    isQuest ? "bg-primary-green" : "bg-white"
                  }  py-3 cta-button-text `}
                >
                  Kerjain Soal
                </button>
              </div>

              <div className="flex flex-col h-full overflow-y-auto">
                {/* Content */}
                <div className=" space-y-[10px] md:overflow-y-auto  md:col-span-1">
                  {isQuest ? (
                    <>
                      <div className="md:overflow-y-auto  ">
                        {stories[selectStory].quiz.map((e, idx) => (
                          <div key={idx} className="pb-5">
                            <h5 className="title-inner-card !text-base text-justify lg:!text-lg xl:!text-[20px] !font-normal">
                              {e.quest}
                            </h5>
                            <ul className="space-y-3 md:space-y-5 mt-[15px]">
                              {e.answerOptions.map((opt, i) => (
                                <li
                                  key={i}
                                  className="flex gap-x-4 items-center text-style-subheadline xl:!text-base !text-black"
                                >
                                  <input type="checkbox" className="w-5 h-5 accent-primary-green" />
                                  {opt}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        <button
                        onClick={() => setOverlay(false)}
                          className={`mt-[5px] mb-[30px] cursor-pointer duration-500 w-full md:w-fit md:px-10 rounded-full py-3 bg-primary-green rounded-text-style`}
                        >
                          Submit
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h5 className="title-inner-card !font-normal lg:!text-lg xl:!text-[20px]  !text-black ">
                        {stories[selectStory].title}
                      </h5>
                      <div className="space-y-3 mb-[30px]">
                        {stories[selectStory].story.map((e, idx) => (
                          <p
                            key={e + idx}
                            className="text-style-subheadline xl:!text-base text-justify"
                          >
                            {e}
                          </p>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default SectionStoriesHome;
