import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const About = () => {
  return (
    <html className="scroll-smooth">
      <div className="">
        <Navbar />
        <div className="h-80 bg-cover opacity-75 bg-[url(public/assets/teamwork.jpg)] flex flex-col items-center justify-center">
          <p className="font-poppins text-4xl font-bold text-black text-shadow-lg  px-48 text-center">
            Cobalah Hidup Sehat dengan Makanan Sehat <br /> Cobalah GoCipes{" "}
            <br /> Tentang Kami
          </p>
          <div className="flex space-x-4">
            <a href="#visi" className="data-te-smooth-scroll-init">
              <button className="items-center bg-grab hover:bg-slate-100 mt-7 rounded-full px-5 py-3 font-semibold text-black">
                Visi Misi
              </button>
            </a>
            <a href="#developer" className="data-te-smooth-scroll-init">
              <button className="items-center bg-grab hover:bg-slate-100 mt-7 rounded-full px-5 py-3 font-semibold text-black">
                Tim Developer
              </button>
            </a>
          </div>
        </div>

        <div
          id="visi"
          className="flex w-full items-center justify-center flex-col pt-24   pb-24"
        >
          <div className="flex items-center justify-center bg-hitam rounded-lg  w-full ">
            <div className="text-center  rounded-lg w-1/2 px-20 text-gray-300">
              <h2 className="text-3xl  mt-5 font-semibold">Visi & Misi</h2>
              <h3 className=" text-lg mt-5">
                Kami menyediakan panduan untuk optimalisasi aplikasi mobile,
                informasi mendalam tentang pola makan seimbang, resep makanan
                sehat, dan manfaat kesehatan yang dapat dicapai melalui
                kebiasaan makan yang tepat.
                <br />
                <br />
                Platform kami dirancang khusus untuk memantapkan individu dalam
                perjalanan mereka menuju gaya hidup yang lebih sehat dengan
                memberikan panduan langkah demi langkah, dan pengembangan
                keterampilan dasar memasak. Kapanpun, Dimanapun.
              </h3>

              <a href="/panduan">
                <button className=" mb-8 bg-grab hover:bg-slate-100 mt-7 rounded-full px-5 py-3 font-semibold text-black">
                  Panduan Pengguna
                </button>
              </a>
            </div>
            <div className="w-1/2 flex-1  pl-40">
              <img
                className="rounded-lg w-80 h-80"
                src="public/assets/about.jpeg"
                alt="Landing Page"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center flex-col rounded-lg bg-hitam">
          <div className="flex items-center justify-center w-full ">
            <div>
              <img
                src="public/assets/community.jpg"
                alt="community"
                className="rounded-lg"
              />
            </div>
            <div className="text-center flex-1 text-slate-200 w-1/2 px-10">
              <h2 className="text-3xl  mt-5 font-semibold">Cerita Kami</h2>
              <h3 className=" text-lg mt-5">
                Di sebuah dunia digital yang penuh dengan tantangan kesehatan
                dan kebutuhan untuk hidup lebih sehat, kami, sebagai sebuah tim
                berkomitmen, memiliki visi besar. Kami ingin menjadi pilar utama
                bagi individu yang mencari perubahan positif dalam hidup mereka
                melalui penerapan gaya hidup sehat. Dengan tekad kuat, kami
                menyusun panduan yang rinci untuk mengoptimalkan penggunaan
                aplikasi mobile, memberikan informasi mendalam tentang pola
                makan seimbang, serta berbagi resep makanan sehat dan manfaat
                kesehatan yang dapat dicapai melalui kebiasaan makan yang tepat.
                Kapanpun, Dimanapun.
              </h3>
            </div>
          </div>
        </div>

        <div
          id="developer"
          className="text-center mb-12 text-black justify-center mt-20 "
        >
          <h1 className="text-3xl  mt-5 font-semibold">Tim Developer</h1>
        </div>

        {/* Carousel */}
        <div className="carousel mb-24 w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="w-full ">
              <div className=" px-4 flex   mt-6 mb-6 justify-between">
                {/* dila */}
                <div className="card w-72 bg-transparent">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/dila.jpg"
                      alt="Dila"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Project Manager</p>
                    <p>Fadhila Risfaniatul Z</p>
                  </div>
                </div>
                {/* alfin */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/alfin.jpeg"
                      alt="Alfin"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">SM-Hacker</p>
                    <p>Alfin Syatriawan</p>
                  </div>
                </div>
                {/* aina */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/aina fazla.jpg"
                      alt="Aina"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hipster</p>
                    <p>Aina Fazla</p>
                  </div>
                </div>
                {/* Rizka */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/rizka hilmi.jpg"
                      alt="Rizka"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hipster</p>
                    <p>Rizka Hilmi Putri</p>
                  </div>
                </div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide4"
                  className="btn bg-slate-100 border-none hover:bg-grab btn-circle"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn bg-slate-100 border-none hover:bg-grab btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
          {/* Batas1 */}
          <div id="slide2" className="carousel-item relative w-full">
            <div className="w-full ">
              <div className=" px-4 flex   mt-6 mb-6 justify-between">
                {/* Kayla */}
                <div className="card w-72 bg-transparent">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/kayla.jpg"
                      alt="Kayla"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hacker</p>
                    <p>Kayla Vyanca Atalaya</p>
                  </div>
                </div>
                {/* Mute */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/mutiara sabrina.jpg"
                      alt="mute"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hipster</p>
                    <p>Mutiara Sabrina Jauhari</p>
                  </div>
                </div>
                {/* Austin */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/austin.jpg"
                      alt="Austin"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hacker</p>
                    <p>Austin Nicholas Tam</p>
                  </div>
                </div>
                {/* Adit */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/adit.jpg"
                      alt="Rizka"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hacker</p>
                    <p>Adityo Khori Ramadhan</p>
                  </div>
                </div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-slate-100 border-none hover:bg-grab"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle bg-slate-100 border-none hover:bg-grab"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
          {/* batas slide2 */}
          {/* slide3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <div className="w-full ">
              <div className=" px-4 flex   mt-6 mb-6 justify-between">
                {/* Firdaus */}
                <div className="card w-72 bg-transparent">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/firdaus.jpg"
                      alt="Firdaus"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hipster</p>
                    <p>Muhammad Firdaus</p>
                  </div>
                </div>
                {/* Ikhasn */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/ikhsan.jpg"
                      alt="Ikhsan"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hacker</p>
                    <p>Rahmad Noor Ikhsan</p>
                  </div>
                </div>
                {/* Dito */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/dito.jpg"
                      alt="Dito"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">Hacker</p>
                    <p>Dito Iqbal Kusuma</p>
                  </div>
                </div>
                {/* Adit */}
                <div className="card w-72 bg-base-100 ">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/rina.jpg"
                      alt="Rina"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">AI Practioners</p>
                    <p>Rina Wati Nurlia Br Sihite</p>
                  </div>
                </div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-slate-100 border-none hover:bg-grab"
                >
                  ❮
                </a>
                <a
                  href="#slide4"
                  className="btn btn-circle bg-slate-100 border-none hover:bg-grab"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
          {/* Batas slide3 */}
          <div id="slide4" className="carousel-item relative w-full">
            <div className="w-full ">
              <div className=" px-4 flex   mt-6 mb-6 justify-between">
                {/* Detu */}
                <div className="card w-72 bg-transparent">
                  <figure>
                    <img
                      src="public/assets/foto kelompok/detu.jpg"
                      alt="Detu"
                      className="rounded-lg"
                    />
                  </figure>
                  <div className="items-center text-center">
                    <p className="text-lg font-bold">AI Practioners</p>
                    <p>I Gede Putu Agus Pranatha Jaya</p>
                  </div>
                </div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide3"
                  className="btn btn-circle bg-slate-100 border-none hover:bg-grab"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-slate-100 border-none hover:bg-grab"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </html>
  );
};

export default About;
