import Navbar from "../Component/Navbar";

const Default = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h3 className="text-black text-3xl font-semibold ">
          Selamat datang di Healthy food{" "}
        </h3>

        <p className="font-poppins bg-primary">
          Sebuah platform yang dirancang untuk memantapkan individu dalam
          perjalanan mereka menuju gaya hidup yang lebih sehat.
        </p>
      </div>
    </div>
  );
};

export default Default;
