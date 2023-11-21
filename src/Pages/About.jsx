import Navbar from "../Component/Navbar";

const About = () => {
  return (
    <div className="Poppins">
      <Navbar />

      <div className="flex w-full items-center justify-center flex-col pt-24  pb-24">
        <div className="flex items-center justify-center w-full ">
          <div className="text-center w-1/2 px-20 text-black">
            <h2 className="text-3xl  mt-5 font-semibold">Visi & Misi</h2>
            <h3 className=" mt-5">
              Kami menyediakan panduan untuk optimalisasi aplikasi mobile,
              informasi mendalam tentang pola makan seimbang, resep makanan
              sehat, dan manfaat kesehatan yang dapat dicapai melalui kebiasaan
              makan yang tepat.
              <br />
              <br />
              Melalui kontak dan dukungan yang mudah diakses, kami membantu
              pengguna menyelesaikan masalah seputar aplikasi mobile dan
              memberikan panduan yang diperlukan dalam perjalanan mereka menuju
              gaya hidup sehat.
              <br />
              <br />
              Platform kami dirancang khusus untuk memantapkan individu dalam
              perjalanan mereka menuju gaya hidup yang lebih sehat dengan
              memberikan panduan langkah demi langkah, dan pengembangan
              keterampilan dasar memasak.
            </h3>
            <h2 className="">Kapanpun, Dimanapun.</h2>
            <button className=" bg-grab mt-7 rounded-full px-5 py-5 text-black">
              Panduan Pengguna
            </button>
          </div>
          <div className="w-1/2 flex-1  pl-40">
            <img
              className="rounded-full w-80 h-80"
              src="public/assets/Landingpage1.jpg"
              alt="Landing Page"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center flex-col  bg-black">
        <div className="flex items-center justify-center w-full ">
          <div>
            <img src="public/assets/community.jpg" alt="community" />
          </div>
          <div className="text-center flex-1 text-white w-1/2 px-10">
            <h2 className="text-3xl font-poppins mt-5 font-semibold">
              Cerita Kami
            </h2>
            <h3 className="font-poppins mt-5">
              Di sebuah dunia digital yang penuh dengan tantangan kesehatan dan
              kebutuhan untuk hidup lebih sehat, kami, sebagai sebuah tim
              berkomitmen, memiliki visi besar. Kami ingin menjadi pilar utama
              bagi individu yang mencari perubahan positif dalam hidup mereka
              melalui penerapan gaya hidup sehat. Dengan tekad kuat, kami
              menyusun panduan yang rinci untuk mengoptimalkan penggunaan
              aplikasi mobile, memberikan informasi mendalam tentang pola makan
              seimbang, serta berbagi resep makanan sehat dan manfaat kesehatan
              yang dapat dicapai melalui kebiasaan makan yang tepat.
            </h3>
            <h2 className="font-poppins">Kapanpun. Dimanapun</h2>
          </div>
        </div>
      </div>

      <div className="text-center text-black justify-center mt-20 ">
        <h1 className="text-3xl font-poppins mt-5 font-semibold">
          Tim Developer
        </h1>
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
    </div>
  );
};

export default About;
