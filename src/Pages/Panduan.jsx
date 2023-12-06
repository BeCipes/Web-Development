import Navbar from "../Component/Navbar";
import DropdownPanduan from "../Component/DropdownPanduan";
import YoutubeVideo from "../Component/VideoPanduan";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import VideoPanduan from "../Component/VideoPanduan";
import Footer from "../Component/Footer";

const Panduan = () => {
  return (
    <div className="Poppins">
      <Navbar />

      <div className="hero ">
        <div className="flex justify-center -z-50 flex-col text-justify lg:flex-row mt-20">
          <div className=" mx-10 w-2/3">
            <h1 className="text-2xl font-bold text-hitam">
              Artikel Terbaru tentang Healthy Food
            </h1>
            <p className="py-8 text-lg mr-2 text-hitam">
              Di tengah maraknya makanan siap saji ini faktor permasalahan
              kesehatan juga meningkat dengan pesat. Kenapa? Karena sebagian
              orang mengabaikan masalah pola makan, kandungan yang terdapat di
              makanan yang dikonsumsi, serta kurangnya wawasan seputar kalori
              makanan itu sendiri.
            </p>
          </div>
          <img src="public/assets/bowl1.png" className="max-w-sm  w-1/3" />
        </div>

        <div className="hero mt-24">
          <div className="flex justify-star -z-50 flex-col text-justify lg:flex-row">
            <img
              src="public/assets/bowl2.png"
              className="max-w-sm ml-0 w-1/5 mt-32"
            />
            <div className="mt-16 mr-56 w-3/4">
              <p className="py-8 text-lg mr-52 ml-0 mt-14 text-hitam">
                Tapi guys, hidup sehat bukan berarti hanya mengkonsumsi makanan
                sehat saja, sesekali imbangi dengan olahraga ringan paling tidak
                10 menit setiap harinya. Mengatur pola makan yang seimbang dan
                sesuai takaran tentu tidak mudah, apalagi di era yang erat
                dengan junk food, fast food ini lebih praktis dan enak karena
                mengandung banyak MSG atau penyedap lainnya sehingga banyak
                dikonsumsi baik remaja hingga orang tua. Jadi tunggu apa lagi?
                Mulailah gaya hidup sehat Anda sekarang.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-start text-justify mx-14 mt-10 text-2xl text-hitam Poppins font-bold">
        <h1>Video Tutorial</h1>
      </div>

      <div className="hero">
        <div className="flex justify-star -z-0 flex-col text-justify lg:flex-row">
          <div className="App mx-14 my-10 w-2/5">
            <VideoPanduan videoId="iGKF5fgtdWs" />
          </div>
          <div className="mt-5 mr-5 w-3/5">
            <p className="py-24 text-lg text-center mr-10 text-hitam">
              Healthy Food Recipes adalah tempat yang tepat untuk mencari resep
              makanan sehat yang lezat. Saatnya mengenali keajaiban resep
              makanan sehat dan memulai perjalanan menuju gaya hidup yang lebih
              baik. Untuk pengalaman lebih baik download aplikasi kami di Play
              Store. Panduan pengguna dapat diakses melalui video tutorial
              aplikasi kami.
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12 h-96 ml-14 my-16 flex items-center justify-center shadow-lg rounded-lg bg-grab">
        {/* Kolom Kiri */}
        <div className="w-2/3 p-8 flex flex-col items-justify mx-10">
          <h2 className="text-white text-2xl font-bold mb-4">
            Donwload Healthy Food Mobile App
          </h2>
          <p className="text-white text-lg text-justify mb-6">
            Unduh aplikasi Healthy Food sekarang dan mulai perjalanan Anda
            menuju gaya hidup yang lebih sehat!
          </p>

          <div className="flex space-x-4">
            <a
              href="link/to/playstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-hitam text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-gray-100 hover:text-black transition duration-300"
            >
              <FaGooglePlay className="mr-2" /> Google Play
            </a>
          </div>
        </div>

        <div className="w-1/3 ml-4 overflow-hidden">
          <img
            src="public/assets/olive salad.png"
            alt="Mockup Mobile"
            className="w-96 h-96 object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center text-2xl text-hitam Poppins my-20 font-bold">
        <h1>FAQ</h1>
      </div>
      <div>
        {" "}
        <DropdownPanduan />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Panduan;
