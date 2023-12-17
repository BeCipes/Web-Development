import React from "react";
import { Link } from "react-router-dom";

const CarouselBeranda = () => {
  return (
    <div className="carousel  w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full ">
          <div className=" px-4 flex   mt-6 mb-6 justify-between">
           
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/sandwitch.jpg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Sandwich Mozarela</h2>
                  <p className="mb-3 mt-3 text-white">
                    Sandwich vegan terbuat dari roti gandum baik dikonsumsi
                    untuk memperbaiki nutrisi tubuh. Kandungan sayur di dalamnya
                    juga memberikan manfaat yang baik bagi tubuh Anda.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/sayur bening.jpg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Sayur Bening Bayam</h2>
                  <p className="mb-3 mt-3 text-white">
                    Bayam mengandung kandungan yang bermanfaat untuk kesehatan.
                    Ini karena kaya akan beragam vitamin, mineral, serat, dan
                    senyawa bioaktif lainnya yang dibutuhkan oleh tubuh.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/omelet.jpg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Omelet Kol Ungu</h2>
                  <p className="mb-3 mt-3 text-white">
                    Kol ungu bermanfaat untuk pengurangan peradangan, jantung
                    yang lebih sehat, tulang yang lebih kuat, fungsi usus yang
                    lebih baik, dan bahkan risiko kanker yang lebih rendah.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/banana pancake.jpg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Banana Pancakes</h2>
                  <p className="mb-3 mt-3 text-white">
                    Banana Pancake merupakan camilan sehat favorit keluarga.
                    Cara membuat pancake pisang sederhana dengan resep yang
                    mudah didapat.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
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
           
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/avocado toast.jpeg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Avocado Toast</h2>
                  <p className="mb-3 mt-3 text-white">
                    Hidangan populer ini memiliki sejumlah manfaat, terutama
                    karena kombinasi antara roti dan alpukat yang kaya nutrisi.
                    Alpukat kaya akan vitamin K dan juga memberikan energi bagi
                    tubuh Anda.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/salad.jpeg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Salad</h2>
                  <p className="mb-3 mt-3 text-white">
                    Manfaat pada hidangan ini sudah tidak perlu dipertanyakan
                    lagi, kandungan sayur mayur di dalam satu porsi salad kaya
                    akan vitamin, mineral, serat yang baik bagi sistem
                    pencernaan Anda.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/tofu.jpeg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">
                    Tumis Sayur Bok Choy
                  </h2>
                  <p className="mb-3 mt-3 text-white">
                    Hidangan sayur bok choy dengan kombinasi tahu memberikan
                    banyak manfaat bagi tubuh, baik bagi kesehetan tulang, kaya
                    akan nutrisi, sumber protein, dan rendah kalori.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/waffle.jpeg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Strawberry Waffle</h2>
                  <p className="mb-3 mt-3 text-white">
                    Strawberry Waffle merupakan camilan sehat favorit keluarga.
                    Kandungan straberry memberikan manfaat bagi kesehatan mata,
                    kesehatan jantung, mengandung vitamin C, dan kaya serat.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
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
            
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/salad avocado.jpeg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Avocado Salad</h2>
                  <p className="mb-3 mt-3 text-white">
                    Alpukat kaya akan vitamin K dan juga memberikan energi bagi
                    tubuh Anda. Kandungan alpukat juga mengandung asam lemak
                    sehat dan mengandung serat tinggi.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/spinach crepes.jpeg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Spinach Crepes</h2>
                  <p className="mb-3 mt-3 text-white">
                    Bayam mengandung kandungan yang bermanfaat untuk kesehatan.
                    Ini karena kaya akan beragam vitamin, mineral, serat, dan
                    senyawa bioaktif lainnya yang dibutuhkan oleh tubuh.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/spring roll.jpeg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Shrimp Spring Roll</h2>
                  <p className="mb-3 mt-3 text-white">
                    Hidangan Shrimp Spring Roll, atau juga dikenal sebagai
                    Lumpia Udang atau Goi Cuon, memiliki beberapa manfaat
                    kesehatan dan nutrisi.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-item relative">
              <div className="card card-compact w-72 bg-black shadow-xl">
                <figure className="h-1/2">
                  <img
                    src="public/assets/vegan pasta.jpeg"
                    alt="Shoes"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center h-1/2">
                  <h2 className="card-title text-white">Vegan Pasta</h2>
                  <p className="mb-3 mt-3 text-white">
                    Kombinasi pasta dan sayuran memiliki banyak manfaat bagi
                    tubuh. Selain memberikan energi bagi tubuh, sayuran dalam
                    pasta memberikan nutrisi dan kaya akan serat.
                  </p>
                  <div className="card-actions justify-end">
                    <Link to="">
                      <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">
                        Resep
                      </button>
                    </Link>
                  </div>
                </div>
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
              href="#slide1"
              className="btn btn-circle bg-slate-100 border-none hover:bg-grab"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBeranda;
