"use client";

import { useState } from "react";
import Image from "next/image";

const SectionCardRec = () => {
  const [isDetection, setDetection] = useState(false);
  const [resultDetection, setResultDetection] = useState(false);

  const [resulttMobile, setResultMobile] = useState(false);

  return (
    <section className="translate-y-[-45px] md:translate-y-[-65px] lg:translate-y-[-100px]  duration-500   ">
      <div className="lg:max-w-6xl xl:max-w-[1440px] sm:mx-auto w-full px-4 md:px-5 ">
        <div className="bg-white shadow rounded-2xl md:rounded-4xl p-4 md:p-5 lg:p-7 overflow-hidden ">
          {/* Button  */}
          <div className="flex bg-black relative rounded-lg sm:rounded-full sm:w-fit  sm:mx-auto ">
            <button
              onClick={() => setDetection(false)}
              className="!text-white cta-button-text w-full cursor-pointer sm:w-fit py-3 sm:py-4 sm:px-12"
            >
              Rekomendasi
            </button>
            <button
              onClick={() => setDetection(true)}
              className="!text-white cta-button-text w-full cursor-pointer sm:w-fit py-3 sm:py-4  sm:px-12"
            >
              Deteksi Scam
            </button>
            <span className="h-7 w-7 bg-white rounded-full absolute left-1/2 translate-x-[-50%] -top-4"></span>
            <span className="h-7 w-7 bg-white rounded-full absolute left-1/2 translate-x-[-50%] -bottom-4"></span>
          </div>

          {/* Content */}
          {isDetection ? (
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-16">
              <div className="col-span-1 lg:col-span-3 space-y-3 md:space-y-5 mt-[25px] lg:mt-10">
                <div className="space-y-[10px] mb-[15px] lg:mb-5">
                  <div className="flex headline-form items-center gap-x-[10px] justify-center lg:justify-start">
                    Scanner Platform Investasi
                    <div className="h-9 w-9 lg:w-10 lg:h-10 relative flex-shrink-0">
                      <Image
                        alt="Icon Scanner"
                        src="/images/recommendation/gen-rec.png"
                        fill
                      />
                    </div>
                    Aman.
                  </div>
                  <p className="subheadline-form">
                    Cukup input data{" "}
                    <span className="!font-normal">Platform</span> yang
                    menurutmu meragukan, dan Kami berikan kepastiannya.
                  </p>
                </div>

                {resultDetection ? (
                  <div className="lg:hidden">
                    <ResultScamDetector />
                  </div>
                ) : (
                  <div className="lg:hidden">
                    <FormScamDetector />
                  </div>
                )}
                <div className="hidden lg:block">
                  <FormScamDetector />
                </div>

                <button
                  onClick={() => setResultDetection((e) => !e)}
                  className="lg:hidden rounded-full font-helvetica text-sm hover:scale-105 duration-500 px-6 py-3 border border-primary-green  bg-primary-green cursor-pointer w-fit mt-3"
                >
                  {resultDetection ? "Balik Lagi" : "Cek Sekarang"}
                </button>

                <button className="hidden lg:block cta-button-text hover:scale-105 duration-500 rounded-full font-helvetica text-sm px-7 py-3 border border-primary-green  bg-primary-green cursor-pointer w-fit mt-6">
                  Cek Sekarang
                </button>
              </div>
              <div className="hidden lg:block lg:col-span-2 mt-[30px]">
                <ResultScamDetector />
              </div>
            </div>
          ) : (
            <SlideRecommendationInstrumen
              resultMobile={resulttMobile}
              setResultMobile={setResultMobile}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionCardRec;

const FormScamDetector = () => {
  return (
    <div className="space-y-5">
      {/* Row 1 */}
      <div>
        {/* Headline */}
        <div className="flex items-center gap-x-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-600"></div>
          <h4 className=" uppercase desc-inner-card !font-bold !text-black">
            Informasi Dasar
          </h4>
        </div>

        <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-x-7">
          <div className="w-full">
            <label className="label-style" htmlFor="companyName">
              Nama Platform/Perusahaan
            </label>
            <input
              className="mt-3 input-form-text focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="..."
            />
          </div>

          <div className="w-full">
            <label className="label-style" htmlFor="webUrl">
              Website URL
            </label>
            <input
              className="mt-3 input-form-text focus:outline-none focus:shadow-outline"
              id="webUrl"
              type="text"
              placeholder="http://.."
            />
          </div>

          <div className="mw-full">
            <label className="label-style" htmlFor="numLic">
              Nomor Lisensi
            </label>
            <input
              className="mt-3 input-form-text focus:outline-none focus:shadow-outline"
              id="numLic"
              type="text"
              placeholder="B881.."
            />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div>
        <div className="flex items-center gap-x-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-600"></div>
          <h4 className="uppercase desc-inner-card !font-bold !text-black">
            Detail Platform Investasi
          </h4>
        </div>

        <div className="flex flex-col md:flex-row gap-3  md:gap-x-7 items-end">
          <div className="w-full">
            <label className="label-style" htmlFor="investType">
              Tipe Investasi
            </label>
            <select
              id="investType"
              className="w-full text-gray-400 mt-3 input-form-text focus:outline-none focus:shadow-outline"
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Tipe Investasi
              </option>
              <option value="reksadana">Reksadana</option>
              <option value="saham">Saham</option>
              <option value="digital">Digital</option>
            </select>
          </div>

          <div className="w-full">
            <label className="label-style" htmlFor="minimumInv">
              Minimal Investasi
            </label>
            <input
              className="mt-3 input-form-text focus:outline-none focus:shadow-outline"
              id="minimumInv"
              type="text"
              placeholder="Rp. 1.000.000"
            />
          </div>
          <div className="w-full">
            <label className="label-style" htmlFor="minimumInv">
              Return Yang Dijanjikan
            </label>
            <input
              className="mt-3 input-form-text focus:outline-none focus:shadow-outline"
              id="minimumInv"
              type="text"
              placeholder="Rp. 1.000.000"
            />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="">
        <div className="flex flex-col md:flex-row gap-3 md:items-start  md:gap-x-7 items-end">
          <div className="flex w-full items-center gap-x-3 md:gap-x-5">
            <input
              id="promiseRet"
              type="checkbox"
              className="w-5 h-5 accent-primary-green cursor-pointer "
            />
            <label className="label-style" htmlFor="promiseRet">
              Menjanjikan keuntungan pasti.
            </label>
          </div>

          <div className="flex w-full items-center gap-x-3 md:gap-x-5">
            <input
              id="bonusInv"
              type="checkbox"
              className="w-5 h-5 accent-primary-green cursor-pointer "
            />
            <label className="label-style" htmlFor="bonusInv">
              Sistem bonus dari mengajak orang lain.
            </label>
          </div>

          <div className="flex w-full items-center gap-x-3 md:gap-x-5">
            <input
              id="pressure"
              type="checkbox"
              className="w-5 h-5 accent-primary-green cursor-pointer "
            />
            <label className="label-style" htmlFor="pressure">
              Ada tekanan untuk segera investasi.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultScamDetector = () => {
  const resikoSkor: number = 85;
  const legitimasiSkor: number = 15;

  const getRiskColor = (score: number) => {
    if (score >= 70) return "#f59e0b";
    if (score >= 40) return "#eab308";
    return "#22c55e";
  };
  const getLegitimasiColor = (score: number) => {
    if (score <= 30) return "#ef4444";
    if (score <= 60) return "#f59e0b";
    return "#22c55e";
  };

  const ProgressChart = ({
    score,
    maxScore = 100,
    color,
    label,
    category,
  }: {
    score: number;
    maxScore?: number;

    color: string;
    label: string;
    category: string;
  }) => {
    return (
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between items-center">
          <p className="label-style">{label}</p>
          <p className="label-style">{category}</p>
        </div>

        <div className="h-3 w-full rounded-full bg-minor-grey relative overflow-hidden">
          <div
            className={`absolute inset-y-0 z-10 rounded-full`}
            style={{
              width: `${(score / maxScore) * 100}% `,
              backgroundColor: color,
            }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="label-style">{score}</p>
          <p className="label-style ">{maxScore}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full border-t lg:border-none lg:mt-0 mt-3 pt-3 space-y-4">
      <p className="font-helvetica text-[15px] lg:text-lg md:text-base font-bold">
        ⚠️ Dashboard Skor Resiko
      </p>

      <div className="flex flex-col gap-y-5">
        <ProgressChart
          score={resikoSkor}
          color={getRiskColor(resikoSkor)}
          label="Resiko Skor"
          category="Tinggi"
        />
        <ProgressChart
          score={legitimasiSkor}
          color={getLegitimasiColor(legitimasiSkor)}
          label="Legitimasi Skor"
          category="Sangat Rendah"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
        <div className="p-4 bg-minor-grey rounded-xl border">
          <p className="label-style !text-black !font-bold mb-2">
            🚩 Red Flag Terdeteksi
          </p>
          <ul className="flex flex-col gap-y-1.5">
            <li className="label-style !text-black ">
              {"-"} Tidak memiliki izin regulasi yang valid.
            </li>
            <li className="label-style !text-black ">
              {"-"} Menjanjikan return pasti 30% per bulan
            </li>
          </ul>
        </div>
        <div className="p-4 bg-green-600 rounded-xl  ">
          <p className="label-style !text-white !font-bold mb-2">
            💡 Platform Legal Alternatif
          </p>
          <ul className="flex flex-col gap-y-1.5">
            <li className="label-style !text-white ">
              {"-"} Bibit (Reksa Dana)
            </li>
            <li className="label-style !text-white ">{"-"} Stockbit (Saham)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// FOR INSTRUMENT RECOMMENDATIONS
const SlideRecommendationInstrumen = ({
  resultMobile,
  setResultMobile,
}: {
  resultMobile: boolean;
  setResultMobile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14">
      <div className="col-span-1 lg:col-span-1 space-y-3 md:space-y-5 mt-[25px] lg:mt-10">
        {/* Headline */}
        <div className="space-y-[10px] mb-[15px] lg:mb-5">
          <div className="flex headline-form items-center gap-x-[10px] justify-center lg:justify-start">
            Temukan
            <div className="h-9 w-9 lg:w-10 lg:h-10 relative flex-shrink-0">
              <Image
                alt="Icon Scanner"
                src="/images/recommendation/gen-rec.png"
                fill
              />
            </div>
            Instrumen Investasimu.
          </div>
          <p className="subheadline-form">
            Cukup input data <span className="!font-normal">Investasi</span>{" "}
            Kamu, dan Kami akan berikan rekomendasi Instrumen yang tepat.
          </p>
        </div>

        {resultMobile ? (
          <div className="lg:hidden">
            <ResultInstrumentComponen />
          </div>
        ) : (
          <div className="lg:hidden">
            <FormInstrumentComponent />
          </div>
        )}
        <div className="hidden lg:block">
          <FormInstrumentComponent />
        </div>

        <button
          onClick={() => setResultMobile((e) => !e)}
          className="lg:hidden rounded-full font-helvetica text-sm hover:scale-105 duration-500 px-6 py-3 border border-primary-green  bg-primary-green cursor-pointer w-fit mt-3"
        >
          {resultMobile ? "Balik Lagi" : " Lihat Rekomendasi"}
        </button>

        <button className="hidden lg:block cta-button-text hover:scale-105 duration-500 rounded-full font-helvetica text-sm px-7 py-3 border border-primary-green  bg-primary-green cursor-pointer w-fit mt-6">
          Lihat Rekomendasi
        </button>
      </div>

      <div className="hidden lg:block lg:col-span-1 mt-[30px]">
        <ResultInstrumentComponen />
      </div>
    </div>
  );
};

const FormInstrumentComponent = () => {
  const [years, setYears] = useState(5);
  return (
    <div className="space-y-5">
      {/* Row 1 */}
      <div className="flex  flex-col sm:flex-row  sm:gap-x-5 md:gap-x-6 ">
        <div className="md:w-full mb-3 sm:mb-0">
          <label className="label-style" htmlFor="monthlyin">
            Pendapatan Bulanan
          </label>
          <input
            className="mt-3 input-form-text focus:outline-none focus:shadow-outline"
            id="monthlyin"
            type="text"
            placeholder="Rp. 10.000.000"
          />
        </div>
        <div className="md:w-full">
          <label className="label-style" htmlFor="monthlyex">
            Pengeluaran Bulanan
          </label>
          <input
            className=" mt-3 input-form-text focus:outline-none focus:shadow-outline"
            id="monthlyex"
            type="text"
            placeholder="Rp. 6.000.000"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-x-4 sm:gap-x-5 md:gap-x-6  items-end ">
        <div className="w-fit">
          <label className="label-style" htmlFor="otherspends">
            Perkiraan Imbal Hasil per Tahun (%)
          </label>
          <input
            className="mt-3 input-form-text focus:outline-none focus:shadow-outline"
            id="otherspends"
            type="text"
            placeholder="8%"
          />
        </div>
        <div className="w-full">
          <label className="label-style" htmlFor="riskprof">
            Profil Risiko
          </label>
          <select
            id="riskprof"
            className="w-full text-gray-400 mt-3 input-form-text focus:outline-none focus:shadow-outline"
            defaultValue=""
          >
            <option value="" disabled>
              Moderat
            </option>
            <option value="konservatif">Konservatif</option>
            <option value="moderat">Moderat</option>
            <option value="agresif">Agresif</option>
          </select>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex gap-x-4 sm:gap-x-5 md:gap-x-6  items-end">
        <div>
          <label className="label-style" htmlFor="investment-time">
            Waktu Investasi (Tahun)
          </label>
          <div className=" mt-3 flex items-center input-form-text ">
            <button
              type="button"
              className="px-2"
              onClick={() => setYears((y) => Math.max(1, y - 1))}
            >
              –
            </button>
            <input
              id="investment-time"
              type="number"
              value={years}
              readOnly
              className="w-full font-helvetica text-center bg-minor-grey focus:outline-none"
            />
            <button
              type="button"
              className="px-2"
              onClick={() => setYears((y) => y + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="w-full">
          <label className="label-style" htmlFor="purpose">
            Tujuan Investasi
          </label>
          <input
            className="mt-3 input-form-text focus:outline-none focus:shadow-outline"
            id="purpose"
            type="text"
            placeholder="Dana pendidikan anak"
          />
        </div>
      </div>
    </div>
  );
};

const ResultInstrumentComponen = () => {
  return (
    <div className="border-t lg:border-none lg:mt-0 mt-3 pt-3 space-y-4">
      <p className="font-helvetica text-[15px] md:text-base lg:text-lg font-bold">
        💡 Hasil Analisis Untukmu:
      </p>
      <div className=" bg-green-600 p-4 rounded-lg ">
        <p className="label-style !text-white !font-bold ">
          Kapasitas Investasi
        </p>
        <p className="label-style !text-white mt-2 ">
          Anda memiliki ruang investasi sekitar Rp4.000.000 per bulan.
        </p>
      </div>

      <div className="grid  gap-4 md:grid-cols-2 ">
        <div className=" bg-green-600 p-4 rounded-lg ">
          <p className="label-style !text-white  !font-bold mb-2">
            Rekomendasi Instrumen
          </p>
          <ul className="flex flex-col gap-y-1.5">
            <li className="label-style !text-white ">
              {"-"} Reksa Dana Campuran (Balanced Fund). Potensi return: 7{"-"}
              11% per tahun.
            </li>
            <li className="label-style !text-white ">
              {"-"} Obligasi Pemerintah / SBN Ritel (ORI, SUKRI, SBR). Potensi
              return: 7{"-"}11% per tahun
            </li>
            <li className="label-style !text-white ">
              {"-"} Reksa Dana Pendapatan Tetap (Fixed Income Fund). Potensi
              return: 6{"-"}8% per tahun
            </li>
          </ul>
        </div>

        <div className=" bg-amber-600 p-4 rounded-lg ">
          <p className="label-style !text-white  !font-bold mb-2">
            ⚠️ Peringatan
          </p>
          <ul className="flex flex-col gap-y-1.5">
            <li className="label-style !text-white ">
              - Performa instrumen investasi bisa naik-turun tergantung kondisi
              pasar, ekonomi global, dan kebijakan pemerintah
            </li>
            <li className="label-style !text-white ">
              - Walaupun ada instrumen yang relatif aman (contoh: SBN), tetap
              ada risiko likuiditas, inflasi, dan perubahan suku bunga.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
