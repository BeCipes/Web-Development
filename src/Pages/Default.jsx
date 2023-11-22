import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Default = () => {
  return (
    <body>
      <div>
        <Navbar />
        {/* Content1 */}
      </div>

      <div className="container mx-auto">
        {/* Content1 */}
        <div className="columns-2 mt-44">
          <div className="text-center align-middle ">
            <h3 className="text-black text-3xl font-semibold ">
              Selamat datang di Healthy Food
            </h3>

            <p className="mt-3">
              Sebuah platform yang dirancang untuk memantapkan{" "}
              <p className="">
                {" "}
                individu dalam perjalanan mereka menuju gaya hidup yang lebih
                sehat.
              </p>
            </p>
            <div className="mt-4 font-semibold ">
              <a href="/beranda">
                <button className="bg-grab rounded-full px-5 py-1 hover:bg-gray-100 ">
                  Beranda
                </button>
              </a>
              <button className="bg-grab rounded-full ml-5 px-4 py-1 hover:bg-gray-100">
                App
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              className="rounded-full w-80 h-80 -mt-20"
              src="public/assets/Landingpage1.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Content 2 */}
        <div className="columns-1 mx-auto mt-16">
          <div className="w-[750px] h-80 bg-grab rounded-lg mx-auto flex items-center justify-between">
            <img
              className="rounded-lg flex-auto h-80"
              src="public/assets/Landing page2.jpg"
              alt=""
            />
            <div className="text-right px-8">
              <h3 className="w-3/4 font-bold text-xl mb-5 -ml-10">
                Tentang Kami
              </h3>
              <p className="text-center mb-10">
                Platform ini memberikan pengguna panduan langkah demi langkah
                untuk memasak makanan sehat dengan informasi nutrisi yang
                lengkap, memungkinkan mereka untuk mencatat dan menganalisis
                asupan gizi harian, serta memberikan pelajaran tentang nilai
                gizi dan keterampilan memasak dasar.
              </p>
            </div>
          </div>
        </div>
        {/* Content3 */}
        <div className="columns-2  px-24 py-40">
          <div className="text-center -ml-24">
            <h3 className=" text-2xl font-semibold ">Temukan</h3>

            <h3 className=" text-2xl font-semibold ">Healthy Food</h3>
          </div>
          <div>
            <p className="font-medium">
              Agar tubuh selalu sehat dan bugar, serta kebal penyakit,
              <br /> kamu bisa andalkan daftar menu <br /> makanan sehat dan
              bergizi setiap hari
            </p>
          </div>
        </div>
        {/* content4*/}
        <div className="columns-2">
          <div className="hero-content ">
            <img
              src="public/assets/Oatmeal.jpg"
              className="max-w-sm rounded-full w-80 h-80 -mt-20"
            />
          </div>
          <div className="mr-[140px]">
            <h1 className="text-2xl font-bold">Gandum</h1>
            <p className="py-6">
              Oatmeal adalah salah satu makanan superfood yang biasa disantap
              ketika sarapan. Kandungan serat yang tinggi dalam oatmeal sangat
              baik untuk sistem pencernaan.
            </p>
          </div>
        </div>
        <div className="columns-2 mt-44">
          <div className="ml-40">
            <h1 className="text-2xl font-bold">Alpukat</h1>
            <p className="py-6">
              Alpukat merupakan buah yang sangat kaya akan nutrisi: serat,
              vitamin, mineral, dan lemak lemak sehat yang dapat mengurangi
              inflamasi dalam tubuh.
            </p>
          </div>
          <div className="hero-content ">
            <img
              src="public/assets/Alpukat.jpg"
              className="max-w-sm rounded-full w-80 h-80 -mt-20"
            />
          </div>
        </div>
        <div className="columns-2 mt-44">
          <div className="hero-content ">
            <img
              src="public/assets/Yogurt.jpg"
              className="max-w-sm rounded-full w-80 h-80 -mt-20"
            />
          </div>
          <div className="mr-[140px]">
            <h1 className="text-2xl font-bold">Yogurt</h1>
            <p className="py-6">
              Yogurt mengandung probiotik yang sehat untuk kesehatan usus dan
              sistem pencernaan. Selain itu, terdapat juga kandungan lain yang
              sangat baik untuk tubuh, yaitu kalsium, vitamin B12, kalium,
              fosfor, dan zinc .
            </p>
          </div>
        </div>
      </div>

      {/* content5 */}
      <div
        className="columns-1 w-full relative bg-no-repeat bg-cover mt-16"
        style={{ backgroundImage: "url(public/assets/landingpage..jpg" }}
      >
        <div className="bg-opacity-60 absolute w-full h-full z-10 bg-black"></div>
        <div className="mx-auto text-center py-40 z-20 relative">
          <h1 className="mb-5 text-4xl font-bold text-white w-1/2 mx-auto">
            Yuk andalkan daftar menu makanan sehat dan bergizi setiap hari.
          </h1>
          <a href="/beranda">
            <button className="btn bg-grab border-none hover:bg-gray-100 rounded-3xl px-5 mr-5 font-semibold">
              Beranda
            </button>{" "}
          </a>
          <button className="btn bg-grab border-none hover:bg-gray-100 rounded-3xl px-5 w-[94px] font-semibold">
            App
          </button>
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Default;
