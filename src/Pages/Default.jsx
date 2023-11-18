import Navbar from "../Component/Navbar";

const Default = () => {
  return (
    <body>
      <div>
        <Navbar />

        <div className="my-52 text-center w-1/2">
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
          <div className="mt-4 font-semibold text-center">
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

        <div className="container">
          <img
            className="w-80 h-80  mb-32 rounded-full object-right"
            src="public/assets/Landingpage1.jpg"
            alt=""
          />
        </div>
      </div>
    </body>
  );
};

export default Default;
