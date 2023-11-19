import Navbar from "../Component/Navbar";

const Default = () => {
  return (
    <body>
      <div>
        <Navbar />
        {/* Content1 */}
      </div>

      <div className="container mx-auto">
        {/* Content1 */}
        <div className="columns-2 mt-20">
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
                <button className="bg-secondary-100 rounded-full px-5 py-1 hover:bg-primary ">
                  Beranda
                </button>
              </a>
              <button className="bg-secondary-100 rounded-full ml-5 px-4 py-1 hover:bg-primary">
                App
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              className="rounded-full w-80 h-80"
              src="public/assets/Landingpage1.jpg"
              alt=""
            />
          </div>
        </div>

        {/* Content 2 */}
        <div className="columns-1 mx-auto mt-16 mb-96">
          <div className="w-[750px] h-80 bg-primary rounded-lg mx-auto flex items-center justify-between">
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
      </div>
    </body>
  );
};

export default Default;
