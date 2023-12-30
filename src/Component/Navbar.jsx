import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { RiHealthBookLine } from "react-icons/ri";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [navbarFixed, setNavbarFixed] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const content = (
    <>
      <div className="lg:hidden block fixed top-16 w-full left-0 right-0 bg-grab transition ">
        <ul className="text-center text-xl p-20">
          <Link to="/beranda">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Beranda
            </li>
          </Link>
          <Link to="/panduan">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Panduan Pengguna
            </li>
          </Link>
          <Link to="/about">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Tentang Kami
            </li>
          </Link>
          <Link to="/contactus">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Kontak Dukungan
            </li>
          </Link>
          <Link to="/blog">
            <li className="my-4 py-4 border-b border-lime-500 hover:bg-lime-400 hover:rounded font-semibold">
              Blog
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav
      className={`${
        navbarFixed
          ? "fixed top-0 left-0 right-0 bg-grab shadow-md z-50"
          : "bg-grab"
      }`}
    >
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-10 py-4 ">
        <div className="flex items-center flex-1">
          <Link to="/">
            <span className="text-2xl font-bold flex items-center ">
              <img
                src="public/assets/gocipes.png"
                className="w-8 h-auto"
                alt=""
              />
              <span className="ml-2 hover:text-white">BeCipes</span>
            </span>
          </Link>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-10 text-[18px] font-semibold">
              <Link to="/beranda">
                <li className="hover:text-blue-50 transition border-b-2 border-grab hover:border-blue-50 cursor-pointer">
                  Beranda
                </li>
              </Link>
              <Link to="/panduan">
                <li className="hover:text-blue-50 transition border-b-2 border-grab hover:border-blue-50 cursor-pointer whitespace-nowrap">
                  Panduan Pengguna
                </li>
              </Link>
              <Link to="/about">
                <li className="hover:text-blue-50 transition border-b-2 border-grab hover:border-blue-50 cursor-pointer whitespace-nowrap">
                  Tentang Kami
                </li>
              </Link>
              <Link to="/contactus">
                <li className="hover:text-blue-50 transition border-b-2 border-grab hover:border-blue-50 cursor-pointer whitespace-nowrap">
                  Kontak Dukungan
                </li>
              </Link>
              <Link to="/blog">
                <li className="hover:text-blue-50 transition border-b-2 border-grab hover:border-blue-50 cursor-pointer">
                  Blog
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
