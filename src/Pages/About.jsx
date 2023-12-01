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
            <a href="#slide1" className="data-te-smooth-scroll-init">
              <button className="items-center bg-grab hover:bg-slate-100 mt-7 rounded-full px-5 py-3 font-semibold text-black">
                Visi Misi
              </button>
            </a>
            <a href="#slide2" className="data-te-smooth-scroll-init">
              <button className="items-center bg-grab hover:bg-slate-100 mt-7 rounded-full px-5 py-3 font-semibold text-black">
                Tim Developer
              </button>
            </a>
          </div>
        </div>

        <div
          id="slide1"
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

        <div className="flex w-full items-center justify-center flex-col  bg-hitam">
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
          id="slide2"
          className="text-center text-black justify-center mt-20 "
        >
          <h1 className="text-3xl  mt-5 font-semibold">Tim Developer</h1>
        </div>

        <div
          className="carousel relative rounded-box mx-10 space-x-6  mt-20 mb-20"
          style={{ zIndex: 0 }}
        >
          <div id="slide1" className="carousel-item relative">
            <img
              src="public/assets/foto kelompok/dila.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
          </div>

          <div id="slide2" className="carousel-item relative ">
            <img
              src="public/assets/foto kelompok/alfin.jpeg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
          </div>

          <div id="slide3" className="carousel-item relative">
            <img
              src="public/assets/foto kelompok/aina fazla.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
          </div>

          <div id="slide4" className="carousel-item relative">
            <img
              src="public/assets/foto kelompok/rizka hilmi.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
            <div className="absolute top-1/3 transform -translate-y-1/2 right-8">
              <a
                href="#slide8"
                className="btn btn-circle text-black bg-white border-none hover:bg-white"
              >
                ❯
              </a>
            </div>
          </div>

          <div id="slide5" className="carousel-item">
            <img
              src="public/assets/foto kelompok/kayla.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
            <div className="absolute top-1/3 transform -translate-y-1/2 -right-30">
              <a
                href="#slide1"
                className="btn btn-circle text-black bg-white border-none hover:bg-white"
              >
                ❮
              </a>
            </div>
          </div>

          <div id="slide6" className="carousel-item">
            <img
              src="public/assets/foto kelompok/mutiara sabrina.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
          </div>

          <div id="slide7" className="carousel-item">
            <img
              src="public/assets/foto kelompok/austin.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
          </div>

          <div id="slide8" className="carousel-item relative">
            <img
              src="public/assets/foto kelompok/adit.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
            <div className="absolute top-1/3 right-0 transform -translate-y-1/2">
              <a
                href="#slide11"
                className="btn btn-circle text-black bg-white border-none hover:bg-white"
              >
                ❯
              </a>
            </div>
          </div>

          <div id="slide9" className="carousel-item">
            <img
              src="public/assets/foto kelompok/dito.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
            <div className="absolute top-1/3 transform -translate-y-1/2 -right-30">
              <a
                href="#slide5"
                className="btn btn-circle text-black bg-white border-none hover:bg-white"
              >
                ❮
              </a>
            </div>
          </div>

          <div id="slide10" className="carousel-item">
            <img
              src="public/assets/foto kelompok/ikhsan.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
          </div>

          <div id="slide11" className="carousel-item">
            <img
              src="public/assets/foto kelompok/firdaus.jpg"
              alt="Burger"
              className="rounded-box w-72 h-3/4"
            />
          </div>
        </div>
        <Footer />
      </div>
    </html>
  );
};

export default About;
