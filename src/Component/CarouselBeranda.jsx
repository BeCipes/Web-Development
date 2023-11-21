import React from 'react';

const CarouselBeranda = () => {
  return (
    <div className="carousel relative rounded-box mx-10 space-x-6 " style={{ zIndex: 0 }}>
      <div id="slide1" className="carousel-item relative">
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
              Baik untuk kesehatan mata, berfungsi sebagaiantioksidan yang baik untuk kesehatan mata, dan mencerahkan kulit, membantu mencegah kulit keriput dan penuaan dini.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative">
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
              Brokoli mengandung kandungan yang bermanfaar untuk kesehatan. Ini karena kaya akan beragam vitamin, mineral, serat, dan senyawa bioaktif lainnya yang dibutuhkan oleh tubuh.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative">
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
              Kol ungu bermanfaat untuk pengurangan peradangan, jantung yang lebih sehat, tulang yang lebih kuat, fungsi usus yang lebih baik, dan bahkan risiko kanker yang lebih rendah.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative">
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
             Banana Pancake merupakan camilan sehat favorit keluarga. Cara membuat pancake pisang sederhana dengan resep yang mudah didapat.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10">Resep</button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <a href="#slide8" className="btn btn-circle text-hitam bg-white border-none hover:bg-white">
            ❯
          </a>
        </div>
      </div>

      <div id="slide5" className="carousel-item relative">
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
              Baik untuk kesehatan mata, berfungsi sebagaiantioksidan yang baik untuk kesehatan mata, dan mencerahkan kulit, membantu mencegah kulit keriput dan penuaan dini.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <a href="#slide1" className="btn btn-circle text-hitam bg-white border-none hover:bg-white">
            ❮
          </a>
        </div>
      </div>

      <div id="slide6" className="carousel-item relative">
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
              Brokoli mengandung kandungan yang bermanfaar untuk kesehatan. Ini karena kaya akan beragam vitamin, mineral, serat, dan senyawa bioaktif lainnya yang dibutuhkan oleh tubuh.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
      </div>

      <div id="slide7" className="carousel-item relative">
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
              Kol ungu bermanfaat untuk pengurangan peradangan, jantung yang lebih sehat, tulang yang lebih kuat, fungsi usus yang lebih baik, dan bahkan risiko kanker yang lebih rendah.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
      </div>

      <div id="slide8" className="carousel-item relative">
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
             Banana Pancake merupakan camilan sehat favorit keluarga. Cara membuat pancake pisang sederhana dengan resep yang mudah didapat.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <a href="#slide12" className="btn btn-circle text-hitam bg-white border-none hover:bg-white">
            ❯
          </a>
        </div>
      </div>

      <div id="slide9" className="carousel-item relative">
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
              Kol ungu bermanfaat untuk pengurangan peradangan, jantung yang lebih sehat, tulang yang lebih kuat, fungsi usus yang lebih baik, dan bahkan risiko kanker yang lebih rendah.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <a href="#slide5" className="btn btn-circle text-hitam bg-white border-none hover:bg-white">
            ❮
          </a>
        </div>
      </div>

      <div id="slide10" className="carousel-item relative">
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
              Baik untuk kesehatan mata, berfungsi sebagaiantioksidan yang baik untuk kesehatan mata, dan mencerahkan kulit, membantu mencegah kulit keriput dan penuaan dini.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
      </div>

      <div id="slide11" className="carousel-item relative">
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
              Baik untuk kesehatan mata, berfungsi sebagaiantioksidan yang baik untuk kesehatan mata, dan mencerahkan kulit, membantu mencegah kulit keriput dan penuaan dini.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
      </div>

      <div id="slide12" className="carousel-item relative">
        <div className="card card-compact w-72 bg-black shadow-xl">
          <figure className="h-1/2">
            <img
              src="public/assets/home2.jpg"
              alt="Shoes"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body items-center text-center h-1/2">
            <h2 className="card-title text-white">Salad Caesar</h2>
            <p className="mb-3 mt-3 text-white">
              Salad Caesar merupakan camilan sehat favorit keluarga. Cara membuat salad caesar sederhana dengan resep yang mudah didapat.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-grab border-none rounded-3xl px-10 text-hitam">Resep</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBeranda;
