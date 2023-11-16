//link react-scroll untuk ke id
import { Link } from "react-router-dom"
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RiHealthBookLine } from "react-icons/ri";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-lime-500 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="/beranda">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Beranda
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/panduan">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Panduan Pengguna
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/about">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Tentang Kami
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/contact">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Kontak Dukungan
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/blog">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Blog
            </li>
          </Link>
          <Link spy={true} smooth={true} to="/login">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-10 py-4">
        <div className="flex items-center flex-1">
          <span className="text-2xl font-bold flex items-center ">
            <RiHealthBookLine />
            <span className="ml-2">Healty Food</span>
          </span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-10 text-[18px] font-semibold">
              <Link spy={true} smooth={true} to="/beranda">
                <li className="hover:text-blue-300 transition border-b-2 border-lime-500 hover:border-blue-300 cursor-pointer">
                  Beranda
                </li>
              </Link>
              <Link spy={true} smooth={true} to= "/panduan">
                <li className="hover:text-blue-300 transition border-b-2 border-lime-500 hover:border-blue-300 cursor-pointer whitespace-nowrap">
                  Panduan Pengguna
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/about">
                <li className="hover:text-blue-300 transition border-b-2 border-lime-500 hover:border-blue-300 cursor-pointer whitespace-nowrap">
                  Tentang Kami
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/contactus">
                <li className="hover:text-blue-300 transition border-b-2 border-lime-500 hover:border-blue-300 cursor-pointer whitespace-nowrap">
                  Kontak Dukungan
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/blog">
                <li className="hover:text-blue-300 transition border-b-2 border-lime-500 hover:border-blue-300 cursor-pointer">
                  Blog
                </li>
              </Link>
              <Link spy={true} smooth={true} to="/login">
                <li className="hover:text-blue-300 transition border-b-2 border-lime-500 hover:border-blue-300 cursor-pointer">
                  Login
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transtion" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
