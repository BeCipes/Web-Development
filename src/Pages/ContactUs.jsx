import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="py-5 relative h-128">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-1/2 px-36">
            <h1 className="text-3xl font-bold text-hitam">Hubungi Kami</h1>
            <h2 className=" mt-5 text-xl font-normal text-hitam">
              Silahkan Hubungi Kami Secara Nyaman
            </h2>
            <h2 className="text-xl font-normal text-hitam">
              Kapanpun. Dimanapun.
            </h2>
          </div>
          <div className="w-1/2 flex-1 flex justify-center">
            <img
              className="rounded-full max-w-sm z-10 mt-2"
              src="public/assets/pesto.png"
            />
          </div>
        </div>
        <img
          className="w-48 -right-0 top-28 absolute"
          src="public/assets/blueberry.png"
        />
      </div>
      <div className="flex justify-center text-center mt-10 mb-16">
        <div className="w-3/4 mx-auto flex justify-center space-x-8">
          <div
            className="flex flex-col flex-1 gap-y-5 px-5 m-4 py-10 rounded-lg"
            style={{ backgroundColor: "#79E018", margin: "0 20px" }}
          >
            <img
              className="w-5 mx-auto"
              src="public/assets/alamat.png"
              alt="Alamat Icon"
            />
            <h2 className="font-bold">
              <center>Alamat</center>
            </h2>
            <p className="text-sm">
              Jalan Peta No 17, Bandung,
              <br /> Jawa Barat, Indonesia
            </p>
          </div>
          <div
            className="flex flex-col flex-1 gap-y-5 px-5 m-4 py-10 rounded-lg"
            style={{ backgroundColor: "#79E018", margin: "0 20px" }}
          >
            <img
              className="w-9 mx-auto"
              src="public/assets/hotline.png"
              alt="Hotline Icon"
            />
            <h2 className="font-bold">
              <center>Hotline</center>
            </h2>
            <p className="text-sm">+628-175-150-235</p>
          </div>
          <div
            className="flex flex-col flex-1 gap-y-5 px-5 m-4 py-10 rounded-lg"
            style={{ backgroundColor: "#79E018", margin: "0 20px" }}
          >
            <img
              className="w-7 mx-auto"
              src="public/assets/email.png"
              alt="Email Icon"
            />
            <h2 className="font-bold">
              <center>Email</center>
            </h2>
            <p className="text-sm">eternallight@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="flex justify-center p-5 my-5 mb-10 w-20 h-20 "
          src="public/assets/fb.png"
        />
        <img
          className="flex justify-center p-5 my-5 mb-10 w-20 h-20 "
          src="public/assets/twitter.png"
        />
        <img
          className="flex justify-center p-5 my-5 mb-10 w-20 h-20 "
          src="public/assets/instagram.png"
        />
        <img
          className="flex justify-center p-5 my-5 mb-10 w-20 h-20 "
          src="public/assets/wa.png"
        />
      </div>
      <div className="flex">
        <div className="flex-1 h-full">
          <img
            className="w-full h-96 object-cover object-center"
            src="public/assets/homemade-salad.png"
          />
        </div>
        <div className="flex flex-col flex-1 text-center h-96 gap-y-10 bg-black justify-center">
          <h2 className="text-2xl  font-bold text-white">
            Masih memiliki pertanyaan?
          </h2>
          <h1 className="font-normal text-l text-label text-white px-10">
            Silahkan hubungi kami atau Anda dapat menemukan jawaban seputar
            aplikasi kami di menu "Panduan Pengguna"
          </h1>
          <a href="/panduan">
            <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
              Panduan Pengguna
            </button>
          </a>
        </div>
      </div>

      <div>
        <div className="flex justify-center mt-14 mb-14"></div>
        <div className="w-1/2 px-40"></div>
        <h3 className="flex justify-center text-3xl  mt-10 font-bold text-black">
          Kirimi Kami Pesan
        </h3>
        <h2 className=" flex justify-center mt-5 font-medium  text-2x1 text-label text-black">
          Masukkan Kritik dan Saran untuk Pengembangan Aplikasi yang Lebih Baik
        </h2>
      </div>
      <div className="mx-2">
        <div className="container md:mx-auto md:mt-15 mt-5 bg-white round-lg p-5 pb-5">
          <div className="md:grid grid-cols-2 gap-5 mt-4 font-bold">
            <div>
              <label> Nama Depan </label>
              <input
                className="border-2 border-primary md:mt-2 w-full rounded h-10 pl-2 cursor-pointer font-thin focus:outline-none"
                placeholder="Nama Depan"
                type="text"
              />
            </div>

            <div>
              <label> Nama Belakang </label>
              <input
                className="border-2 border-primary md:mt-2 w-full rounded h-10 pl-2 cursor-pointer font-thin focus: outline-none"
                placeholder="Nama Belakang"
                type="text"
              />
            </div>

            <div>
              <label> Nomor Ponsel </label>
              <input
                className="border-2 border-primary md:mt-2 w-full rounded h-10 pl-2 cursor-pointer font-thin focus:outline-none"
                type="number"
                placeholder="Nomor Ponsel"
              />
            </div>
            <div>
              <label> Email </label>
              <input
                className="border-2 border-primary md:mt-2 w-full rounded h-10 pl-2 cursor-pointer font-thin focus:outline-none"
                type="text"
                placeholder="Alamat Email"
              />
            </div>

            <div className="col-span-2">
              <label> Pesan </label>
              <textarea
                className="border-2 border-primary md:mt-2 w-full  p-2 rounded pl-2 cursor-pointer font-thin focus:outline-none"
                rows="4"
                cols={50}
                placeholder="Tulis pesan Anda disini"
              >
                {" "}
              </textarea>
            </div>

            <div className="col-span-2">
              <a href="">
                <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                  Kirim Pesan
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
