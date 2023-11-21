import Navbar from "../Component/Navbar";
import React from "react";
import Footer from "../Component/footer";
const About = () => {
  return (
    <>
      <Navbar />

      <div className="flex w-full items-center justify-center flex-col pt-24  pb-24">
        <div className="flex items-center justify-center w-full ">
          <div className="text-center w-1/2 px-20">
            <h2 className="text-3xl font-poppins mt-5 font-semibold">
              Visi misi
            </h2>
            <h3 className="font-poppins mt-5">
              Kami menyediakan panduan untuk optimalisasi aplikasi mobile,
              informasi mendalam tentang pola makan seimbang, resep makanan
              sehat, dan manfaat kesehatan yang dapat dicapai melalui kebiasaan
              makan yang tepat. 
              <br/>
              Melalui kontak dan dukungan yang mudah diakses,
              kami membantu pengguna menyelesaikan masalah seputar aplikasi
              mobile dan memberikan panduan yang diperlukan dalam perjalanan
              mereka menuju gaya hidup sehat. 
              <br/>
              Platform kami dirancang khusus
              untuk memantapkan individu dalam perjalanan mereka menuju gaya
              hidup yang lebih sehat dengan memberikan panduan langkah demi
              langkah, dan pengembangan keterampilan dasar memasak.
            </h3>
            <h2 className="font-poppins">Kapanpun. Dimanapun</h2>
            <button className=" bg-lime-500 mt-7 rounded-full px-8 h-8">Panduan Pengguna</button>
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
        <div className="w-1/2 flex">
            <img
              
              src="public/assets/community.jpg"
              alt="community"
            />
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
            melalui penerapan gaya hidup sehat. Dengan tekad kuat, kami menyusun
            panduan yang rinci untuk mengoptimalkan penggunaan aplikasi mobile,
            memberikan informasi mendalam tentang pola makan seimbang, serta
            berbagi resep makanan sehat dan manfaat kesehatan yang dapat dicapai
            melalui kebiasaan makan yang tepat.
            </h3>
            <h2 className="font-poppins">Kapanpun. Dimanapun</h2>
          </div>

        </div>

      </div>
      <div className="carousel relative rounded-box mx-10 space-x-6  font-poppins mt-20" style={{ zIndex: 0 }}>
      <div id="slide1" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/dila.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/alfin.jpeg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/aina fazla.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/rizka hilmi.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <a href="#slide8" className="btn btn-circle text-black bg-white border-none hover:bg-white">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/kayla.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <a href="#slide1" className="btn btn-circle text-black bg-white border-none hover:bg-white">
            ❮
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/mutiara sabrina.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div id="slide7" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/austin.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <div id="slide8" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/adit.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <a href="#slide12" className="btn btn-circle text-black bg-white border-none hover:bg-white">
            ❯
          </a>
        </div>
      </div>

      <div id="slide9" className="carousel-item relative">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/firdaus.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <a href="#slide5" className="btn btn-circle text-black bg-white border-none hover:bg-white">
            ❮
          </a>
        </div>
      </div>

      <div id="slide10" className="carousel-item relative rounded-box mx-10 ...">
        <div className="card card-compact w-96 ">
          <figure className="h-3/4">
            <img
              src="public/assets/foto kelompok/ikhsan.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <>
  <div id="slide11" className="carousel-item relative rounded-box mx-10 ...">
    <div className="card card-compact w-96"> 
      <figure className="h-3/4"> 
        <img
          src="public/assets/foto kelompok/dito.jpg"
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </figure>
    </div>
  </div>
</>

    </div>
    </>
  );
};

export default About;
