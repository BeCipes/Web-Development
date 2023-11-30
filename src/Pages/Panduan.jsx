import Navbar from "../Component/Navbar";
import DropdownPanduan from "../Component/DropdownPanduan";
<<<<<<< Updated upstream
import YoutubeVideo from "../Component/VideoPanduan";
import { FaApple, FaGooglePlay } from 'react-icons/fa';
=======
import { FaApple, FaGooglePlay } from "react-icons/fa";
>>>>>>> Stashed changes
import VideoPanduan from "../Component/VideoPanduan";

const Panduan = () => {
  return (
    <div className="Poppins">
      <Navbar />

<<<<<<< Updated upstream
      <div className="hero ">
        <div className="flex justify-center -z-50 flex-col text-justify lg:flex-row mt-20">
          <div className=" mx-10 w-2/3">
            <h1 className="text-2xl font-bold text-hitam">Artikel Terbaru tentang Healthy Food</h1>
            <p className="py-8 text-lg mr-10 text-hitam">Di tengah maraknya makanan siap saji ini faktor permasalahan kesehatan juga meningkat dengan pesat. Kenapa? Karena sebagian orang mengabaikan masalah pola makan, kandungan yang terdapat di makanan yang dikonsumsi, serta kurangnya wawasan seputar kalori makanan itu sendiri.</p>
          </div>
          <img src="public/assets/bowl1.png" className="max-w-sm  w-1/3" />
        </div>

        <div className="hero mt-24">
          <div className="flex justify-star -z-50 flex-col text-justify lg:flex-row">
            <img src="public/assets/bowl2.png" className="max-w-sm ml-10 w-1/5 mt-5" />
            <div className="mt-16 mr-56 w-3/4">
              <p className="py-8 text-lg mr-56 ml-16 mt-5 text-hitam">Tapi guys, hidup sehat bukan berarti hanya mengkonsumsi makanan sehat saja, sesekali imbangi dengan olahraga ringan paling tidak 10 menit setiap harinya. Mengatur pola makan yang seimbang dan sesuai takaran tentu tidak mudah, apalagi di era yang erat dengan junk food, fast food ini lebih praktis dan enak karena mengandung banyak MSG atau penyedap lainnya sehingga banyak dikonsumsi baik remaja hingga orang tua. Jadi tunggu apa lagi? Mulailah gaya hidup sehat Anda sekarang.</p>
=======
      <div className="container mx-auto">
        <div className="py-12 ">
          <h2 className="font-bold text-2xl text-hitam text-center mb-16">Artikel Terbaru</h2>
          {/* card1 */}
          <div className=" columns-3 px-16 flex justify-between">
            <div className="card w-80 bg-base-100 shadow-xl border">
              <figure>
                <img src="public/assets/alpukat.jpeg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Alpukat, Buah Kaya Manfaat</h2>
                <p>
                  Kamu tahu ga sih bahwa alpukat memiliki beragam manfaat bagi tubuh kita loh...
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
                  <h2 className="card-title">Kaya Omega, Kenali Manfaat Salmon</h2>
                  <p>
                    Selain kaya akan omega, ikan salmon memiliki segudang manfaat yang perlu Anda tahu...
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
                  <h2 className="card-title">Murah dan Tinggi Protein, Kenali Manfaat Tahu</h2>
                  <p>
                    Meskipun terbilang lauk yang murah, tahu memiliki protein nabati yang baik loh...
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
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>

<<<<<<< Updated upstream
      <div className=" flex justify-start text-justify mx-14 mt-10 text-2xl text-hitam Poppins font-bold">
        <h1>Video Tutorial</h1>
      </div>
  
      <div className="hero">
          <div className="flex justify-star -z-0 flex-col text-justify lg:flex-row">
            <div className="App mx-14 my-10 w-2/5">
              <VideoPanduan videoId="iGKF5fgtdWs" />
            </div>
            <div className="mt-5 mr-5 w-3/5">
              <p className="py-8 text-lg mr-10 text-hitam">Healthy Food Recipes adalah tempat yang tepat untuk mencari resep makanan sehat yang lezat. Saatnya mengenali keajaiban resep makanan sehat dan memulai perjalanan menuju gaya hidup yang lebih baik. Untuk pengalaman lebih baik download aplikasi kami di App Store dan Play Store. Panduan pengguna dapat diakses melalui video tutorial aplikasi kami.</p>
            </div>
          </div>
=======
      <div className="hero mt-16">
        <div className="flex justify-star -z-0 flex-col text-justify lg:flex-row">
          <div className="App mx-14 my-10 w-2/5">
            <VideoPanduan videoId="iGKF5fgtdWs" />
          </div>
          <div className="mt-5 mr-5 w-3/5">
            <h1 className="text-justify mr-10  mt-5 text-2xl text-hitam Poppins font-bold">Video Tutorial</h1>
            <p className="py-5 text-lg text-justify mr-10 text-hitam">
              GoCipes merupakan aplikasi yang memberikan panduan memasak kepada pengguna dengan beragam fitur unggulan. Download aplikasi kami melalui Play Store untuk pengalaman lebih baik. Panduan pengguna dapat diakses melalui video tutorial
              aplikasi kami. 
            </p>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>

      <div className="w-11/12 h-96 ml-14 my-16 flex items-center justify-center shadow-lg rounded-lg bg-grab">
        {/* Kolom Kiri */}
        <div className="w-2/3 p-8 flex flex-col items-justify mx-10">
<<<<<<< Updated upstream
          <h2 className="text-white text-2xl font-bold mb-4">Donwload Healthy Food Mobile App</h2>
          <p className="text-white text-lg text-justify mb-6">Unduh aplikasi Healthy Food sekarang dan mulai perjalanan Anda menuju gaya hidup yang lebih sehat!</p>
          
=======
          <h2 className="text-white text-2xl font-bold mb-4">
            Download GoCipes Mobile App
          </h2>
          <p className="text-white text-lg text-justify mb-6">
            Unduh aplikasi GoCipes sekarang dan mulai perjalanan Anda
            menuju gaya hidup yang lebih sehat!
          </p>

>>>>>>> Stashed changes
          <div className="flex space-x-4">
            <a href="link/to/appstore" target="_blank" rel="noopener noreferrer" className="bg-hitam text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-950 transition duration-300">
              <FaApple className="mr-2" /> App Store
            </a>
            <a href="link/to/playstore" target="_blank" rel="noopener noreferrer" className="bg-hitam text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-950 transition duration-300">
              <FaGooglePlay className="mr-2" /> Google Play
            </a>
          </div>
        </div>

        <div className="w-1/3 ml-4 overflow-hidden">
<<<<<<< Updated upstream
          <img src="public/assets/olive salad.png" alt="Mockup Mobile" className="w-96 h-96 object-cover" />
=======
          <img
            src="public/assets/mockup.png"
            alt="Mockup Mobile"
            className="w-96 h-96 object-cover"
          />
>>>>>>> Stashed changes
        </div>
      </div>


      <div className="flex justify-center text-2xl text-hitam Poppins my-20 font-bold">
        <h1>FAQ</h1>
      </div>
      <DropdownPanduan/>



    </div>
  );
};

export default Panduan;
