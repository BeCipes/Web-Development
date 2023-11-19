import React from 'react';
import Navbar from "../Component/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
     
      <div className="container-fluid sectionView pt-lg-5" style={{ backgroundColor: '#FFFAEE', fontFamily: 'Poppins' }}>
        <div className="row pb-lg-5">
          
          <div className="col-md-6 col-12 text-center order-lg-1 order-2">
            <img src="src/assets/Landingpage1.jpg" alt="" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '20px' }} />
          </div>
          <div className="me-5 col-xl-6 col-12 order-lg-2 order-1 pt-lg-5 pe-lg-5 p-md-5 text-lg-start text-center kolomview">
            <span className="fw-bold text-display-4" style={{fontWeight: 'bold', fontFamily: 'Poppins' }}>Visi Misi</span><br /><br />
            <p className="px-md-0 px-3 fs-md-6 fs-6 text-md-start text-center"  >
              Kami menyediakan panduan untuk optimalisasi aplikasi mobile, informasi mendalam tentang pola makan seimbang, resep makanan sehat, dan manfaat kesehatan yang dapat dicapai melalui kebiasaan makan yang tepat.
              Melalui kontak dan dukungan yang mudah diakses, kami membantu pengguna menyelesaikan masalah seputar aplikasi mobile dan memberikan panduan yang diperlukan dalam perjalanan mereka menuju gaya hidup sehat.
              Platform kami dirancang khusus untuk memantapkan individu dalam perjalanan mereka menuju gaya hidup yang lebih sehat dengan memberikan panduan langkah demi langkah, dan pengembangan keterampilan dasar memasak.
            </p>
            <a href="#Panduan">
              <button type="button" className="btn btn-rounded btn-dark px-md-5 mt-3 tombol2 rounded" style={{ backgroundColor: '#79E018', fontWeight: 'bold', fontFamily: 'Poppins' }}>
                Panduan pengguna
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid sectionView pt-5 pb-5" style={{ backgroundColor: '#181616', fontFamily: 'Poppins' }}>
        <div className="col-lg-6 col-12 order-lg-1 order-2 p-lg-5 p-md-5 p-0 text-lg-start text-center kolomview" style={{ marginLeft: '90px' }}>
        <span className="fw-bold text-display-4" style={{fontWeight: 500,color: '#FFFFFF',fontWeight: 'bold', fontFamily: 'Poppins' }}>CERITA KAMI</span><br /><br />
          <p className="px-md-0 px-3 fs-md-6 fs-6 text-md-start text-center" style={{fontWeight: 500,color: '#FFFFFF', fontFamily: 'Poppins' }} >
            Di sebuah dunia digital yang penuh dengan tantangan kesehatan dan kebutuhan untuk hidup lebih sehat, kami, sebagai sebuah tim berkomitmen, memiliki visi besar. Kami ingin menjadi pilar utama bagi individu yang mencari perubahan positif dalam hidup mereka melalui penerapan gaya hidup sehat. Dengan tekad kuat, kami menyusun panduan yang rinci untuk mengoptimalkan penggunaan aplikasi mobile, memberikan informasi mendalam tentang pola makan seimbang, serta berbagi resep makanan sehat dan manfaat kesehatan yang dapat dicapai melalui kebiasaan makan yang tepat.
          </p>
          <a href="#">
            <button type="button" className="btn btn-rounded btn-dark px-md-5 mt-1 tombol3 rounded" style={{ backgroundColor: '#79E018', fontWeight: 'bolder', fontFamily: 'Poppins' }}>
              App
            </button>
          </a>
        </div>
        <div className="col-lg-6 col-12 order-lg-2 mx-sm-5 order-1 m-auto text-center">
          <img src="src/assets/community.jpg" alt="image" style={{ width: '90%', height: 'auto', marginTop: '20px', borderRadius: '20px' }} />
        </div>
      </div>
    </>
  );
};

export default About;
