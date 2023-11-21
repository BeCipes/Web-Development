import Navbar from "../Component/Navbar";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center flex-col py-20">
        <div className="flex items-center justify-center w-full">
          <div className="w-1/2 px-40">
            <h2 className="text-3xl font-poppins mt-5 font-semibold">
              Hubungi Kami
            </h2>
            <h2 className="font-poppins">
              Silahkan Hubungi Kami Secara Nyaman
            </h2>
            <h2 className="font-poppins">Kapanpun. Dimanapun</h2>
          </div>
          <div className="w-1/2 flex-1">
            <img
              className="rounded-full w-80 h-80"
              src="public/assets/Landingpage1.jpg"
              />    
            </div>
            <div className="flex justify-center">
            <img
              className="flex flex-wrap -mx-2 w-1/3 px-2 my-2"
              src="public/assets/cherry.png"
              />  
            </div> 
          </div>
        </div>
        <div className="flex justify-center">
        <div className=" p-10 m-10" style={{backgroundColor: '#79E018'}}>
          <img 
          className="flex justify-normal"
          src="public/assets/alamat.png" />
          <h2 className="font-bold">
            <center>Alamat</center>
          </h2>
          <p className="">Jalan Peta No 17, Bandung,<br /> Jawa Barat, Indonesia</p>
        </div>
        <div className="-500 p-10 m-10" style={{backgroundColor: '#79E018'}}>
          <img className="flex justify-normal"
          src="public/assets/hotline.png" />
          <h2 className="font-bold">
            <center>Hotline</center>
          </h2>
          <p>+628-175-150-235</p>
        </div>
        <div className="p-10 m-10" style={{backgroundColor: '#79E018'}}>
          <img className="flex justify-center p-5 m-5"
          src="public/assets/email.png" />
          <h2 className=" font-bold">
            <center>Email</center>
          </h2>
          <p>eternallight@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center">
      <img className="flex justify-center p-5 m-5"
         src="public/assets/fb.png" />
            <img className="flex justify-center p-5 m-5"
            src="public/assets/twitter.png" />
               <img className="flex justify-center p-5 m-5"
                 src="public/assets/instagram.png" />
         <img className="flex justify-center p-5 m-5"
               src="public/assets/wa.png" />
      </div>
         <div className="flex justify-center"></div>
         <div className="bg-black justify-stretch p-5 m-5">
            <img className="flex justify-stretch w-40 h-40 mx-auto"
              src="public/assets/homemade-salad.jpg" /> 
              <div className="w-1/2 px-40"></div>
                  <h2 className="flex justify-between text-3xl font-poppins mt-5 font-bold text-white">Masih memiliki pertanyaan?</h2>
                     <h1 className="mt-10 font-medium font-poppins text-2x1 text-label text-white">
                     Kami punya semua jawaban yang Anda butuhkan di menu Panduan Pengguna. 
                     <a href="#">
                        <button type="button" className="btn btn-rounded btn-dark px-md-5 mt-1 tombol3 rounded-full px-5 py-1 text-black" style={{backgroundColor: '#79E018', fontWeight: 'bolder', fontFamily:'poppins', witdth: '80px'}}>
                          Panduan Pengguna
                    </button>
                </a>
                </h1> 
                </div>
                <div>
            </div> 
            <div>
            <div className="flex justify-center"></div>
                <div className="w-1/2 px-40"></div>
             <h3 className="flex justify-center text-3xl font-poppins mt-5 font-bold text-black">Kirimi Kami Pesan</h3>
             <h2 className=" flex justify-center mt-5 font-medium font-poppins text-2x1 text-label text-black">Masukkan Kritik dan Saran Untuk Pengembangan Aplikasi  yang Lebih Baik.</h2>
            
            </div>
            <div  className = "mx-2" > 
      < div  className = "container md:mx-auto md:mt-15 mt-5 bg-white round-lg shadow-lg p-5 pb-5" > 
         
        < div  className = "md:grid grid-cols-2 gap-5 mt-4 font-bold" > 
          < div > 
            < label > Nama Depan </ label > 
            < input 
              className = "border-2 md:mt-2 w-full round-md h-10 pl-2 kursor-pointer font-thin focus:outline-none" 
              ketik = "teks"
             /> 
             
          </ div > 
         
          < div > 
            < label > Nama Belakang </ label > 
            < masukan 
              className = "border-2 md:mt-2 w-full round-md h-10 pl-2 kursor-pointer font-thin focus: outline-none"
              type = "teks"
             /> 
          </ div > 
          < div > 
            < label > No Ponsel </ label > 
            < input 
              className = "border-2 md:mt-2 w-bulat penuh -md h-10 pr-2 pl-2 penunjuk kursor font-fokus tipis: garis besar-tidak ada" 
              type = "angka"
             /> 
          </ div > 
          < div > 
            < label > Email </ label > 
            < masukan 
              nama kelas = " border-2 md:mt-2 w-penuh -md h-10 pl-2 penunjuk kursor fokus tipis font:outline-none" 
              type = "text"
             /> 
          </ div > 
          < div  className = "col-span-2" > 
            < label > Pesan </ label > 
            < textarea 
              className = "border-2 md:mt-2 w- penuh bulat-md pl-2 pt-2 penunjuk kursor font-tipis fokus:garis besar-tidak ada" 
              baris = "4"
             > </textarea > 
          </ div > 
          < div  className = "col-span-2" > 
            < button type = "button" className="btn btn-rounded btn-dark px-md-5 mt-1 tombol3 rounded-full px-5 py-1 text-black" style={{backgroundColor: '#79E018', fontWeight: 'bolder', fontFamily:'poppins', witdth: '80px'}}>
               Kirim Pesan
             </ button > 
             </div>
          </ div > 
          
        </div>
      </ div > 
        </div>
             
    );
  };
  
  export default ContactUs;
