import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditButton from "../Component/EditButton";
import DeleteButton from "../Component/DeleteButton";
import DeleteFile from "./DeleteFile";

const ArtikelList = () => {
  const dummyData = [
    {
      id: 1,
      headline: "Sample Headline 1",
      image: "sample-image-1.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed sem sit amet arcu blandit tincidunt. Ut a sem eu velit ultricies feugiat sit amet eu tortor. Curabitur quis neque vel urna aliquam suscipit. Integer eu tortor et ligula gravida auctor. Donec nec felis vitae elit dictum consectetur.",
      penulis: "John Doe",
      sumber: "Example sumber 1",
      kategori: "Technology",
    },
    {
      id: 2,
      headline: "Sample Headline 2",
      image: "sample-image-2.jpg",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      penulis: "Jane Smith",
      sumber: "Example sumber 2",
      kategori: "Science",
    },
    {
      id: 3,
      headline: "Sample Headline 3",
      image: "sample-image-3.jpg",
      content:
        "Aenean tincidunt tincidunt erat, ac fringilla dui hendrerit at. In hac habitasse platea dictumst. Integer a metus nec lectus lacinia malesuada. Vestibulum ac dui auctor, eleifend lectus vel, blandit ligula. Fusce quis orci vel velit bibendum mattis non a augue.",
      penulis: "Bob Johnson",
      sumber: "Example sumber 3",
      kategori: "Travel",
    },
    {
      id: 4,
      headline: "Sample Headline 4",
      image: "sample-image-4.jpg",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Fusce bibendum diam ut massa sollicitudin, a bibendum orci gravida. Nunc euismod tortor ut velit varius, et efficitur elit malesuada.",
      penulis: "Alice White",
      sumber: "Example sumber 4",
      kategori: "Food",
    },
    {
      id: 5,
      headline: "Sample Headline 5",
      image: "sample-image-5.jpg",
      content:
        "Vivamus aliquam dolor quis justo cursus, in vehicula neque tempus. Maecenas tincidunt nisl et neque efficitur, nec vulputate lacus luctus. Nulla facilisi. Sed quis commodo quam. Etiam ut pharetra enim. Sed id sapien eu ex fringilla scelerisque.",
      penulis: "Charlie Brown",
      sumber: "Example sumber 5",
      kategori: "Health",
    },
  ];

  const [selectedArtikelId, setSelectedArtikelId] = useState(null);

  const deleteProduct = async (artikelId) => {
    setSelectedArtikelId(artikelId);
  };

  const confirmDelete = () => {
    axios.delete(`http://localhost:5000/admin/${artikelId}`)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error deleting artikel:", error);
      })
      .finally(() => {
        setSelectedArtikelId(null);
      });
  };
  const cancelDelete = () => {
    setSelectedArtikelId(null);
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="w-4/5 sm:ml-56">
        <div className="relative shadow rounded-lg mt-3">
          <table className="w-full text-sm text-left text-green-500">
            <thead className="text-xs text-green-700 uppercase bg-slate-300">
              <tr>
                <th className="py-3 px-1 text-center">No</th>
                <th className="py-3 px-6">Headline</th>
                <th className="py-3 px-6">Gambar</th>
                <th className="py-3 px-6">Isi</th>
                <th className="py-3 px-6">Penulis</th>
                <th className="py-3 px-6">Sumber</th>
                <th className="py-3 px-6">Artikel</th>
                <th className="py-3 px-1 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((artikel, index) => (
                <tr key={artikel.id} className="bg-white border-b">
                  <td className="py-3 px-1 text-center">{index + 1}</td>
                  <td className="py-3 px-6 font-medium text-gray-900">{artikel.headline}</td>
                  <td className="py-3 px-6">{artikel.image}</td>
                  <td className="py-3 px-6 max-w-[200px] overflow-hidden whitespace-nowrap truncate-overflow">
                    {artikel.content}
                  </td>
                  <td className="py-3 px-6">{artikel.penulis}</td>
                  <td className="py-3 px-6">{artikel.sumber}</td>
                  <td className="py-3 px-6">{artikel.kategori}</td>
                  <td className="py-3 px-1 text-center">
                  <div className="flex">
                    {/* <Link to={`/edit-artikel/${artikel.id}`} className="mr-2"> */}
                    <Link to={`/edit-artikel`} className="mr-2">
                      <EditButton />
                    </Link>
                    <Link onClick={() => deleteProduct(artikel.id)}>
                      <DeleteButton />
                    </Link>
                  </div>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedArtikelId && (
        <DeleteFile user ="artikel"onDelete={confirmDelete} onCancel={cancelDelete} />
      )}
    </div>
  );
};

export default ArtikelList;
