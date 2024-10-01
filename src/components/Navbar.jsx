import LogoCiberCine from "../assets/images/LogoCiberCine.png";
import { useState, useEffect } from "react";
import Login from "../pages/autentication/Login.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLoginModal = () => {
    setLoginModalOpen(!loginModalOpen);
  };

  return (
    <nav
      className={`flex items-center justify-between w-full border-b border-slate-900 h-20 m-auto z-10 fixed mx-auto shadow-md transition-all duration-300 
      bg-slate-900 ${isScrolled ? "bg-opacity-100" : "bg-opacity-30"}`}
    >
      <dir className="m-auto w-10/12 max-w-screen-xl flex items-center justify-between p-0">
        <div className="text-white text-xl font-bold z-3">
          <a className="flex items-center gap-2" href="#">
            <img
              src={LogoCiberCine}
              alt="LogoCiberCine"
              className="w-full h-8 lg:w-12 lg:h-7 "
            />
            <h3 className="text-xl lg:block hidden font-extrabold text-white">
              CiberCine
            </h3>
          </a>
        </div>

        {/* Botón hamburguesa en pantallas pequeñas */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex gap-10 text-neutral-400 transition-all duration-300">
          <li>
            <Link to="/" className="flex gap-2 items-center hover:text-white">
              <i className="fa-solid fa-house"></i>Inicio
            </Link>
          </li>
          <li>
            <Link to="/peliculas" className="flex gap-2 items-center hover:text-white">
              <i className="fa-solid fa-film"></i>Películas
            </Link>
          </li>
          <li>
            <Link to="/noticias" className="flex gap-2 items-center hover:text-white">
              <i className="fa-solid fa-newspaper"></i>Noticias
            </Link>
          </li>
        </ul>

        <button
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 
      hidden sm:block"
          onClick={toggleLoginModal}
        >
          <i className="fa-duotone fa-solid fa-user"></i>
        </button>

        {/* Menú desplegable para pantallas pequeñas */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-gray-900 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4 text-white">
            <li>
              <a
                href="#inicio"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#peliculas"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Películas
              </a>
            </li>
            <li>
              <a
                href="#noticias"
                className="hover:text-gray-300"
                onClick={toggleMenu}
              >
                Noticias
              </a>
            </li>
          </ul>
          <button
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 
          w-full text-center"
            onClick={toggleMenu}
          >
            Unirme
          </button>
        </div>

        {/* Modal de Login */}
        {loginModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative w-full max-w-5xl m-full pt-20 rounded-lg">
              {/* Botón para cerrar el modal */}
              <button
                onClick={toggleLoginModal}
                className="mt-4 w-14 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Cerrar
              </button>
              <Login /> {/* Aquí se carga el componente de Login */}
            </div>
          </div>
        )}
      </dir>
    </nav>
  );
};

export default Navbar;
