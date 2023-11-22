import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Blog = () => {
  return (
    <body>
      <div>
        <Navbar />
      </div>

      <div className="container mx-auto">
        <div className="py-12 ">
          <h2 className="font-semibold text-3xl text-center mb-28">Artikel</h2>
          {/* card1 */}
          <div className=" columns-3 px-16 flex justify-between">
            <div className="card w-64 bg-base-100 shadow-xl border">
              <figure>
                <img src="public/assets/sayur.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Sayur merupakan</h2>
                <p>
                  Manfaat sayuran tak ada habisnya, Ini pentingnya dikonsumsi
                  setiap hari...
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://www.sehatq.com/artikel/manfaat-sayuran-tak-ada-habisnya-ini-pentingnya-dikonsumsi-setiap-hari"
                    target="_blank"
                  >
                    <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                      Selengkapnya
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* card2 */}
            <div className="">
              <div className="card w-64 bg-base-100 shadow-xl border">
                <figure>
                  <img src="public/assets/kacanghijau.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Kacang hijau?</h2>
                  <p>
                    Siapa sih yang tidak tau kacang hijau ? Salah satu
                    polong-polongan dan berprotein nabati tinggi ini...
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://www.greeners.co/flora-fauna/kacang-hijau-kaya-protein-nabati/"
                      target="_blank"
                    >
                      {" "}
                      <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                        Selengkapnya
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card3 */}
            <div className="">
              <div className="card w-64 bg-base-100 shadow-xl border">
                <figure>
                  <img src="public/assets/tahu.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Tempe Sehat tauuu</h2>
                  <p>
                    Meskipun terbilang lauk yang murah,tempe merupakan
                    penghasilan protein nabati yang baik loh...
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://yankes.kemkes.go.id/view_artikel/1755/tempe-makanan-sederhana-yang-bergizi"
                      target="_blank"
                    >
                      <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                        Selengkapnya
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card4 */}
          <div className=" columns-3 px-16 flex justify-between py-24">
            <div className="card w-64 bg-base-100 shadow-xl border">
              <figure>
                <img src="public/assets/brokoli.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Brokoli Sehebat itu?</h2>
                <p>
                  Nyesal baru tau ada sayur yang banyak manfaatnya kayak gini
                  buat remaja,nangis banget kalau gini...
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://ykpbankbjb.or.id/content/post/74/manfaat-yang-terkandung-dalam-sayuran-brokoli"
                    target="_blank"
                  >
                    <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                      Selengkapnya
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* card5 */}
            <div className="">
              <div className="card w-64 bg-base-100 shadow-xl border">
                <figure>
                  <img src="public/assets/ciwi.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Affaa iyah?</h2>
                  <p>
                    Hahhh,menatap wanita cantik bermanfaat bagi kesehatan ?{" "}
                    <br /> Yuk cari tau kebenarannya...
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://www.ayoindonesia.com/lifestyle/pr-012245094/melihat-foto-wanita-cantik-bermanfaat-bagi-kesehatan-otak"
                      target="_blank"
                    >
                      <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                        Selengkapnya
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card6 */}
            <div className="">
              <div className="card w-64 bg-base-100 shadow-xl border">
                <figure>
                  <img src="public/assets/viral.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">OOommmaaaggga?</h2>
                  <p>
                    VIRALLL!!! <br />
                    Ternyata makanan ini tinggi kalori <br />
                    berbahaya sekali, <br />
                    gen z wajib waspada...
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://hellosehat.com/nutrisi/fakta-gizi/pengertian-kalori/"
                      target="_blank"
                    >
                      <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                        Selengkapnya
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card7 */}{" "}
          <div className=" columns-3 px-16 flex justify-between py-24">
            <div className="card w-64 bg-base-100 shadow-xl border">
              <figure>
                <img src="public/assets/alpukat.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kemana aja?</h2>
                <p>
                  Baru tau ya dek? Sering dikonsumsi saat diet,ternyata buah-
                  buah ini terlarang...
                </p>
                <div className="card-actions justify-end">
                  <a
                    href="https://www.gooddoctor.co.id/hidup-sehat/nutrisi/buah-yang-harus-dihindari-saat-diet/"
                    target="_blank"
                  >
                    <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                      Selengkapnya
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* card8 */}
            <div className="">
              <div className="card w-64 bg-base-100 shadow-xl border">
                <figure>
                  <img src="public/assets/jamu.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Hari gini minum jamu?</h2>
                  <p>
                    Identik dengan rasa yang pahit,ternyata jamu baik dikonsumsi
                    untuk kesehatan...
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://www.gramedia.com/literasi/jenis-dan-manfaat-jamu-serta-penjelasannya/"
                      target="_blank"
                    >
                      <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                        Selengkapnya
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card9 */}
            <div className="">
              <div className="card w-64 bg-base-100 shadow-xl border">
                <figure>
                  <img src="public/assets/masak.jpg" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Udah gede gatau masak?</h2>
                  <p>
                    Pip pip pipppp calon mantu,aku kasih tau tips memasak bagi
                    kalian sang pemula...
                  </p>
                  <div className="card-actions justify-end">
                    <a
                      href="https://amp.kontan.co.id/news/kesulitan-memasak-ikuti-5-tips-belajar-masak-untuk-pemula-yang-ingin-pandai-memasak"
                      target="_blank"
                    >
                      <div className="badge badge-outline h-8 hover:bg-gray-500 hover:text-white">
                        Selengkapnya
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* batas */}
        </div>
        {/* cerita pengguna */}
        <h3 className="text-3xl font-semibold text-center">
          Cerita Menarik Pengguna
        </h3>
        <div className="column-2 flex justify-between px-24 mt-24">
          <div className="bg-hitam w-[500px] h-[700px] px-40 py-20 rounded-xl">
            {" "}
            <img
              src="public/assets/profile.jpg"
              className="rounded-full w-[100px] h-[100px] -ml-36"
              alt=""
            />{" "}
            <p className="text-white -ml-[367px] mt-5 text-center">
              {" "}
              Buk Sibuk <br />
              Seorang Ibu Ibu
            </p>
            <div className="bg-slate-100 w-[300px] h-[450px] rounded-xl font-normal font-mono text-3xl text-center flex items-center px-4 -mt-24">
              {" "}
              “Saya merasa terbantu dalam memasak karena ada fitur waktu
              sehingga bisa membuat saya tidak lupa langkah-langkah memasak
              sambil menelepon”
            </div>
          </div>

          <div className="w-96 h-auto py-20">
            {" "}
            <img src="public/assets/flower.svg"></img>{" "}
            <img
              className="animate-spin-slow"
              src="public/assets/bunga.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mb-60"></div>
      <Footer />
    </body>
  );
};

export default Blog;
