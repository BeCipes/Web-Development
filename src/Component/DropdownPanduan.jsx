import React from 'react';

const DropdownPanduan = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-16 my-20">
      <div className="collapse collapse-arrow bg-white w-11/12 mb-5">
        <input type="checkbox" id="accordion1" /> 
        <div className="collapse-title text-xl font-semibold text-black">
          <label htmlFor="accordion1">Apa itu Healthy Food?</label>
        </div>
        <div className="collapse-content font-normal text-black"> 
          <p>Healthy Food adalah platform yang dirancang untuk membantu orang menjalani gaya hidup sehat dengan menyediakan akses kepada makanan sehat, informasi nutrisi, resep, panduan gizi, untuk memantau asupan makanan, dan tentang pentingnya diet sehat dan keterampilan dasar memasak.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-white w-11/12 mb-5">
        <input type="checkbox" id="accordion2" /> 
        <div className="collapse-title text-xl font-semibold text-black">
          <label htmlFor="accordion2">Bagaimana cara membuat menu makanan sehat yang bervariasi dan lezat dengan Healthy Food?</label>
        </div>
        <div className="collapse-content font-normal text-black"> 
          <ul className="list-disc mx-10">
            <li>Platform Healthy Food menerapkan sayuran segar berwarna-warni untuk mendapatkan nutrisi yang beragam. Memasak dengan berbagai metode seperti dipanggang, direbus, atau dikukus.</li>
            <li>Pilih sumber protein sehat seperti ikan, ayam tanpa kulit, tofu, kacang-kacangan, dan biji-bijian.</li>
            <li>Eksperimen dengan rempah-rempah dan bumbu untuk memberikan rasa yang berbeda pada protein</li>
          </ul>
        </div>
      </div>
      
      <div className="collapse collapse-arrow bg-white w-11/12 mb-5">
        <input type="checkbox" id="accordion3" /> 
        <div className="collapse-title text-xl font-semibold text-black">
          <label htmlFor="accordion3">Apa saja elemen makanan penting yang direkomendasikan oleh Healthy Food untuk diet sehat?</label>
        </div>
        <div className="collapse-content font-normal text-black">
          <ul className="list-disc mx-10">
            <li>Protein: Asupan protein yang cukup sangat penting untuk pola makan yang sehat. Makanan kaya protein termasuk dada ayam, telur, daging sapi tanpa lemak, dan lentil.</li>
            <li>Karbohidrat: Karbohidrat kompleks merupakan sumber energi yang baik bagi tubuh serta mengandung mineral, serat, dan vitamin.</li>
            <li>Serat: Makanan tinggi serat membantu Anda kenyang lebih lama dan mencegah makan berlebihan.</li>
            <li>Lemak Sehat: Lemak sehat sangat penting bagi tubuh dan dapat ditemukan dalam makanan seperti alpukat, kacang-kacangan, biji-bijian, dan ikan berlemak.</li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default DropdownPanduan;
