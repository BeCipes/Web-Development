import Navbar from "../Component/Navbar";
import DropdownPanduan from "../Component/DropdownPanduan";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import VideoPanduan from "../Component/VideoPanduan";
import Footer from "../Component/Footer";

const Panduan = () => {
  return (
    <div className="Poppins">
      <Navbar />

      <div className="container mx-auto">
        <div className="py-12 ">
          <h2 className="font-bold text-2xl text-hitam text-center mb-16">
            Artikel Terbaru
          </h2>
          {/* card1 */}
          <div className=" columns-3 px-16 flex justify-between">
            <div className="card w-80 bg-base-100 shadow-xl border">
              <figure>
                <img src="public/assets/alpukat.jpeg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Alpukat, Buah Kaya Manfaat</h2>
                <p>
                  Kamu tahu ga sih bahwa alpukat memiliki beragam manfaat bagi
                  tubuh kita loh...
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://indonesiabaik.id/infografis/alpukat-buah-nikmat-kaya-manfaat"
                    target="_blank"
                  >
                    <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                      Selengkapnya
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* card2 */}
            <div className="">
              <div className="card w-80 bg-base-100 shadow-xl border">
                <figure>
                  <img src="public/assets/salmon.jpeg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Kaya Omega, Kenali Manfaat Salmon
                  </h2>
                  <p>
                    Selain kaya akan omega, ikan salmon memiliki segudang
                    manfaat yang perlu Anda tahu...
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://doktersehat.com/gaya-hidup/gizi-dan-nutrisi/manfaat-ikan-salmon-bagi-kesehatan"
                      target="_blank"
                    >
                      {" "}
                      <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                        Selengkapnya
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="">
              <div className="card w-80 bg-base-100 shadow-xl border">
                <figure>
                  <img src="public/assets/tahu putih.jpeg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Murah dan Tinggi Protein, Kenali Manfaat Tahu
                  </h2>
                  <p>
                    Meskipun terbilang lauk yang murah, tahu memiliki protein
                    nabati yang baik loh...
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://www.halodoc.com/artikel/murah-dan-bergizi-ini-5-manfaat-tahu-untuk-kesehatan-tubuh"
                      target="_blank"
                    >
                      <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                        Selengkapnya
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero mt-16">
        <div className="flex justify-star -z-0 flex-col text-justify lg:flex-row">
          <div className="App mx-14 my-10 w-2/5">
            <VideoPanduan videoId="iGKF5fgtdWs" />
          </div>
          <div className="mt-5 mr-5 w-3/5">
            <h1 className="text-justify mr-10  mt-5 text-2xl text-hitam Poppins font-bold">
              Video Tutorial
            </h1>
            <p className="py-5 text-lg text-justify mr-10 text-hitam">
              BeCipes merupakan aplikasi yang memberikan panduan memasak kepada
              pengguna dengan beragam fitur unggulan. Download aplikasi kami
              melalui Play Store untuk pengalaman lebih baik. Panduan pengguna
              dapat diakses melalui video tutorial aplikasi kami.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 h-96 ml-14 my-16 flex items-center justify-center shadow-lg rounded-lg bg-grab">
        {/* Kolom Kiri */}
        <div className="w-2/3 p-8 flex flex-col items-justify mx-10">
          <h2 className="text-white text-2xl font-bold mb-4">
            Download BeCipes Mobile App
          </h2>
          <p className="text-white text-lg text-justify mb-6">
            Unduh aplikasi BeCipes sekarang dan mulai perjalanan Anda menuju
            gaya hidup yang lebih sehat!
          </p>

          <div className="flex space-x-4">
            <a
              href="link/to/playstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-hitam text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-white hover:text-hitam transition duration-300"
            >
              <FaGooglePlay className="mr-2" /> Google Play
            </a>
          </div>
        </div>

        <div className="w-1/3 ml-4 overflow-hidden">
          <img
            src="public/assets/mockup.png"
            alt="Mockup Mobile"
            className="w-96 h-96 object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center text-2xl text-hitam Poppins my-20 font-bold">
        <h1>FAQ</h1>
      </div>
      <DropdownPanduan />
      <Footer />
    </div>
  );
};

export default Panduan;
