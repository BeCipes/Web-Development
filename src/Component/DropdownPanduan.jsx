import React from 'react';

const DropdownPanduan = () => {
  return (
    <div className="flex-column justify-center align-middle mx-16 my-20">
      <div className="collapse collapse-arrow bg-white w-11/12 mb-5">
        <input type="radio" name="my-accordion-2" checked="checked" /> 
        <div className="collapse-title text-xl font-semibold text-hitam">
          Apa itu Healthy Food?
        </div>
        <div className="collapse-content font-normal text-hitam"> 
          <p>Healthy Food adalah platform yang dirancnag untuk membantu orang menjalanai gaya hidup sehat dengan menyediakan akses kepada makanan sehat, informasi nutrisi, resep, panduan gizi, untuk memantau asupan makanan, dan tentang pentingnya diet sehat dan keterampilan dasar memasak.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white w-11/12 mb-5">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-xl font-semibold text-hitam">
          Bagaimana cara membuat menu makanan sehat yang bervariasi dan lezat dengan Healthy Food?
        </div>
        <div className="collapse-content font-normal text-hitam"> 
            <ul className="list-disc mx-10">
                <li>Platform Healthy Food menerapkan sayuran segar brwarna-warni untuk mendapatkan nutrisi yang beragam. Memasak dengan berbagai metode seperti dipanggang, direbus, atau dikukus.</li>
                <li>Pilih sumber protein sehat seperti ikan, ayam tanpa kulit, tofu, kacangan-kacangan, dan biji-bijian.</li>
                <li>Eksperimen dengan rempah-rempah dan bumbu untuk memberikan rasa yang berbeda pada protein</li>
            </ul>
        </div>
      </div>
      
      <div className="collapse collapse-arrow bg-white w-11/12 mb-5">
        <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title text-xl font-semibold text-hitam">
          Apa saja elemen makanan penting yang direkomendasikan oleh Healthy Food untuk diet sehat?
        </div>
        <div className="collapse-content font-normal text-hitam">
            <ul className="list-disc mx-10">
                <li>Protein: Asupan protein yang cukup sanagat penting untuk pola makan yang sehat. Makanan kaya protein termasuk dada ayam, telur, daging sapi tanpa lemak, dan lentil.</li>
                <li>Karbohidrat: Karbohidrat kompleks merupakan sumber energi yang baik bagi tubuh serta mengandung mineral, serat, dan vitamin. Makanan kaya karbohidrat kompleks antara lain biji-bijian, pasta, nasi, kacang-kacangan, dan sayuran seperti wortel, apel, pisang, dan brokoli.</li>
                <li>Serat: Makanan tinggi serat membantu Anda kenyang lebih lama dan mencegah makan berlebihan. Beberapa makanan berserat tinggi antara lain biji-bijian, buah-buahan, sayuran, dan kacang-kacangan.</li>
                <li>Lemak Sehat: Lemak sehat sangat penting bagi tubuh dan dapat ditemukan dalam makanan seperti alpukat, kacang-kacangan, biji-bijian, dan ikan berlemak.</li>
            </ul>
        </div>
      </div>

    </div>
  );
};

export default DropdownPanduan;
