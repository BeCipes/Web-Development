import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="py-5 relative h-128">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-1/2 px-40">
            <h2 className="text-3xl  mt-5 font-semibold text-hitam">
              Hubungi Kami
            </h2>
            <h2 className=" mt-5 font-medium text-hitam">
              Silahkan Hubungi Kami Secara Nyaman
            </h2>
            <h2 className=" font-medium text-hitam">Kapanpun. Dimanapun</h2>
          </div>
          <div className="w-1/2 flex-1 flex justify-center">
            <img
              className="rounded-full w-96 h-96 z-10"
              src="public/assets/Landingpage1.jpg"
            />
          </div>
        </div>
        <img
          className="w-48 right-0 top-10 absolute"
          src="public/assets/blueberry.png"
        />
      </div>
      <div className="w-3/4 mx-auto flex justify-center text-center">
        <div
          className="flex flex-col flex-1 gap-y-3 p-10 m-10 rounded-lg"
          style={{ backgroundColor: "#79E018" }}
        >
          <img className="w-8 mx-auto" src="public/assets/alamat.png" />
          <h2 className="font-bold">
            <center>Alamat</center>
          </h2>
          <p className="">
            Jalan Peta No 17, Bandung,
            <br /> Jawa Barat, Indonesia
          </p>
        </div>
        <div
          className="flex flex-col flex-1 gap-y-3 p-10 m-10 rounded-lg"
          style={{ backgroundColor: "#79E018" }}
        >
          <img className="w-14 mx-auto" src="public/assets/hotline.png" />
          <h2 className="font-bold">
            <center>Hotline</center>
          </h2>
          <p>+628-175-150-235</p>
        </div>
        <div
          className="flex flex-col flex-1 gap-y-3 p-10 m-10 rounded-lg"
          style={{ backgroundColor: "#79E018" }}
        >
          <img className="w-12 mx-auto" src="public/assets/email.png" />
          <h2 className="font-bold ">
            <center>Email</center>
          </h2>
          <p>eternallight@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="flex justify-center p-5 m-5 w-20 h-20 "
          src="public/assets/fb.png"
        />
        <img
          className="flex justify-center p-5 m-5 w-20 h-20 "
          src="public/assets/twitter.png"
        />
        <img
          className="flex justify-center p-5 m-5 w-20 h-20 "
          src="public/assets/instagram.png"
        />
        <img
          className="flex justify-center p-5 m-5 w-20 h-20 "
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
          <h2 className="text-3xl  font-bold text-white">
            Masih memiliki pertanyaan?
          </h2>
          <h1 className="font-medium  text-2x1 text-label text-white">
            Kami punya semua jawaban yang Anda butuhkan di menu Panduan
            Pengguna.
          </h1>
          <a href="#">
            <button
              type="button"
              className="btn rounded-3xl bg-grab px-md-5 mt-1  px-5 py-1 text-black border-none hover:bg-gray-100"
              style={{
                backgroundColor: "#79E018",

                witdth: "80px",
              }}
            >
              <p>Panduan Pengguna</p>
            </button>
          </a>
        </div>
      </div>

      <div>
        <div className="flex justify-center"></div>
        <div className="w-1/2 px-40"></div>
        <h3 className="flex justify-center text-3xl  mt-10 font-bold text-black">
          Kirimi Kami Pesan
        </h3>
        <h2 className=" flex justify-center mt-5 font-medium  text-2x1 text-label text-black">
          Masukkan Kritik dan Saran Untuk Pengembangan Aplikasi yang Lebih Baik.
        </h2>
      </div>
      <div className="mx-2">
        <div className="container md:mx-auto md:mt-15 mt-5 bg-white round-lg shadow-lg p-5 pb-5">
          <div className="md:grid grid-cols-2 gap-5 mt-4 font-bold">
            <div>
              <label> Nama Depan </label>
              <input
                className="border-2 border-primary md:mt-2 w-full rounded h-10 pl-2 cursor-pointer font-thin focus:outline-none"
                placeholder="teks"
                type="text"
              />
            </div>

            <div>
              <label> Nama Belakang </label>
              <input
                className="border-2 border-primary md:mt-2 w-full rounded h-10 pl-2 cursor-pointer font-thin focus: outline-none"
                placeholder="teks"
                type="text"
              />
            </div>

            <div>
              <label> No Ponsel </label>
              <input
                className="border-2 border-primary md:mt-2 w-full rounded h-10 pl-2 cursor-pointer font-thin focus:outline-none"
                type="number"
                placeholder="0812 1234 1234"
              />
            </div>
            <div>
              <label> Email </label>
              <input
                className="border-2 border-primary md:mt-2 w-full rounded h-10 pl-2 cursor-pointer font-thin focus:outline-none"
                type="text"
                placeholder="youremail@mail.com"
              />
            </div>

            <div className="col-span-2">
              <label> Pesan </label>
              <textarea
                className="border-2 border-primary md:mt-2 w-full  p-2 rounded h-10 pl-2 cursor-pointer font-thin focus:outline-none"
                rows="4"
                cols={50}
                placeholder="Tulis pesan anda disini"
              >
                {" "}
              </textarea>
            </div>

            <div className="col-span-2">
              <button
                type="button"
                className="btn btn-rounded btn-dark px-md-5 mt-1 tombol3 rounded-full px-5 py-1 text-black"
                style={{
                  backgroundColor: "#79E018",

                  witdth: "80px",
                }}
              >
                <p>Kirim Pesan</p>
              </button>
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
