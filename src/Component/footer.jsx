import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <footer className="footer p-10 bg-grab text-base-content px-20">
        <nav>
          <header className=" font-semibold text-lg text-black">
            Website Healthy Food{" "}
          </header>
          <p className=" py-1 font-medium">
            Platform kami memberikan pengguna panduan langkah <br /> demi
            langkah untuk memasak makanan sehat dengan <br /> informasi nutrisi
            yang lengkap, memungkinkan mereka <br />
            untuk mencatat dan menganalisis asupan gizi harian, serta <br />
            memberikan pelajaran tentang nilai gizi dan keterampilan <br />
            memasak dasar.{" "}
          </p>
          <a className="font-semibold text-lg text-black">Panduan Informasi</a>
          <a href="/panduan" className=" font-medium hover:text-white">
            Panduan Pengguna
          </a>
          <a href="/about" className=" font-medium hover:text-white ">
            Tentang kami
          </a>
          <a href="/contact" className=" font-medium hover:text-white">
            Kontak & Dukungan
          </a>
          <a href="/panduan" className=" font-medium hover:text-white">
            FAQ's
          </a>
          <p className="text-black font-semibold">
            © Eternal Light 2023. Hak Cipta Dilindungi
          </p>
        </nav>
        <nav>
          <header className=" font-semibold text-lg text-black">
            Kontak Kami
          </header>{" "}
          <div>
            <p className="font-semibold text-black">Hotline</p>
            <p>Jalan Peta No 17, Bandung, Jawa Barat, Indonesia</p>
          </div>
          <div>
            {" "}
            <p className="font-semibold text-black">Alamat</p>
            <p> eternallight@gmail.com</p>
          </div>
          <div>
            {" "}
            <p className="font-semibold text-black">Email</p>
            <p>+628-175-150-235</p>
          </div>
        </nav>
        <nav>
          <a href="/login">
            <img
              src="public/assets/gocipes.png"
              alt="logo"
              className="w-20 h-auto"
            />
          </a>
          <header className="font-semibold text-lg text-black">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:fill-white "
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:fill-white"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:fill-white"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="hover:fill-white"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <div className="flex space-x-4 mt-10">
            <a
              href="link/to/playstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-hitam text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-white hover:text-hitam transition duration-300"
            >
              <FaGooglePlay className="mr-2" /> Google Play
            </a>
          </div>
        </nav>
      </footer>
    </footer>
  );
};

export default Footer;
