import LogoCiberCine from '../assets/images/LogoCiberCine.png';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={
        `flex items-center justify-between p-5 w-full m-auto z-10
        fixed top-0 mx-auto flex-row bg-gray-900 shadow-md ' :
          'bg-gray-900'} transition-all duration-300`}
        >
      <div className="text-white text-xl font-bold z-3">
          <a className="flex items-center gap-2" href="#">
            <img src={LogoCiberCine} alt="LogoCiberCine" className="w-full h-8 lg:w-12 lg:h-7 "/>
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
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      <ul className="hidden md:flex gap-10 text-white">
        <li><a href="#" className="hover:text-yellow-500">Inicio</a></li>
        <li><a href="#" className="hover:text-yellow-500">Películas</a></li>
        <li><a href="#" className="hover:text-yellow-500">Noticias</a></li>
      </ul>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 hidden sm:block">
                <i className="fa-duotone fa-solid fa-user"></i>
        </button>

      {/* Menú desplegable para pantallas pequeñas */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center py-4 space-y-4 text-white">
          <li><a href="#inicio" className="hover:text-gray-300" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="#peliculas" className="hover:text-gray-300" onClick={toggleMenu}>Películas</a></li>
          <li><a href="#noticias" className="hover:text-gray-300" onClick={toggleMenu}>Noticias</a></li>
        </ul>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 w-full text-center" onClick={toggleMenu}>Unirme</button>
      </div>
    </nav>
  );
};

export default Navbar;
