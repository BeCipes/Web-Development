import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import CarouselBeranda from "../Component/CarouselBeranda";
import GridBeranda from "../Component/GridBeranda";

const Beranda = () => {
  return (
    <div className="Poppins">
      <Navbar />
      <div className="hero">
        <div className="hero-content -z-50 flex-col text-center lg:flex-row-reverse">
          <img
            src="public/assets/home1.jpg"
            className="max-w-sm rounded-full mx-10 mt-10"
          />
          <div>
            <h1 className="text-3xl font-bold text-hitam">
              Selamat Datang di Website Healthy Food Recipes
            </h1>
            <p className="py-8 text-lg text-hitam">
              Tempat inspirasi dan kreasi dalam memasak makanan sehat. <br />
              Mari mulai menjelajahi dunia kuliner kami.
            </p>
            <a href="/blog">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam ">
                Blog
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="flex justify-start-z-50 flex-col text-center lg:flex-row">
          <img
            src="public/assets/blueberry.png"
            className="max-w-sm mx-0 mb-20 flex justify-start -ml-20"
          />
          <div className="mb-20 mt-40 mx-10">
            <h1 className="text-3xl font-bold text-hitam">
              Terima kasih telah mengunjungi situs web kami!
            </h1>
            <p className="py-8 text-lg  text-hitam">
              Healthy Food Recipes adalah tempat yang tepat untuk mencari resep
              makanan sehat yang lezat. Saatnya mengenali keajaiban resep
              makanan sehat dan memulai perjalanan menuju gaya hidup yang lebih
              baik.
            </p>
            <a href="">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                Landing Page
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <CarouselBeranda />
      </div>

      <div className="text-center lg:flex-row">
        <div className="relative -z-50">
          <img
            src="public/assets/home8.png"
            alt="daun"
            className="w-1/2 h-52 rounded-lg object-cover"
          />
          <h1 className="text-2xl font-bold text-hitam absolute top-0 left-0 p-1 mx-20 my-10">
            Kami mengajak Anda untuk mengeksplorasi dunia resep makanan sehat,
            karena makanan yang baik adalah awal dari hidup yang sehat
          </h1>
        </div>
      </div>

      <div className="flex bg-stone-950 text-white rounded-md mb-16 mx-16 max-w-full h-96">
        {/* Image Side */}
        <div className="w-1/2">
          <img
            src="public/assets/home2.jpg"
            alt="Card"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        {/* Text Side */}
        <div className="flex flex-col justify-center items-center h-full w-1/2 px-10 py-10 text-left">
          <div className="text-lg mb-10 text-center">
            Kami punya semua jawaban yang Anda butuhkan di mneu "Panduan
            Pengguna". Silahkan klik untuk melihat
          </div>
          <a href="/panduan">
            <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
              Panduan Pengguna
            </button>
          </a>
        </div>
      </div>

      <div className="bg-stone-950 w-full h-fit px-3 py-3 relative">
        <div className="flex bg-white text-hitam rounded-md my-32 mx-32 max-w-full h-96">
          {/* Text Side */}
          <div
            className="flex flex-col justify-center items-center h-full w-1/2 px-10 py-10 text-left"
            style={{ zIndex: 1 }}
          >
            <div className="text-xl mb-10 text-center">
              Kami mengundang Anda untuk menjelajahi <br />
              beragam resep makanan sehat yang kami <br /> sajikan, mengenai tim
              kami yang penuh <br /> semangat di halaman "Tentang Kami".
            </div>
            <a href="/about">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                Tentang Kami
              </button>
            </a>
          </div>
          {/* Image Side */}
          <div
            className="w-1/2 relative"
            style={{
              transform: "translateY(-30px) translateX(30px)",
              zIndex: 2,
            }}
          >
            <img
              src="public/assets/home3.jpg"
              alt="Card"
              className="w-full h-full object-cover rounded-md"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="text-center lg:flex-row">
        <div className="my-20 mx-20">
          <h1 className="text-2xl font-bold text-hitam">
            Kenali Resep Makanan Sehat
          </h1>
        </div>
        <GridBeranda />
      </div>

      <div
        className="hero h-96 -z-50"
        style={{ backgroundImage: "url(public/assets/home6.jpg" }}
      >
        <div className="absolute min-h-full -right-0 -z-0">
          <img src="public/assets/home55.png" alt="Additional Image" />
        </div>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold text-white">
              Jelajahi <br />
              Healthy Food Recipes
            </h1>
            <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam mr-5">
              App{" "}
            </button>{" "}
            <span>
              <a href="/blog">
                <button className="btn bg-grab border-none rounded-3xl px-10 text-black ">
                  Blog
                </button>
              </a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Beranda;
