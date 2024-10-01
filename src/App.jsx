import Carrusel from './components/Carrucel.jsx'
import Navbar from './components/Navbar.jsx';
import MovieList from './components/MovieList';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Detail from './pages/details/detail.jsx';

const Home = () => {
  return (<h1>HOla</h1>)
}

const estrenoMovies = [
    {
      title: 'Masacre en Texas',
      genre: 'Terror',
      imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002037?referenceScheme=HeadOffice&allowPlaceHolder=true', 
      isEstreno: true,
     
    },
    {
        title: 'Masacre en Texas',
        genre: 'Terror',
        imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001976?referenceScheme=HeadOffice&allowPlaceHolder=true', 
        isEstreno: true,
      },
      {
        title: 'Masacre en Texas',
        genre: 'Terror',
        imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002197?referenceScheme=HeadOffice&allowPlaceHolder=true', 
        isEstreno: true,
      },
      {
        title: 'Masacre en Texas',
        genre: 'Terror',
        imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002037?referenceScheme=HeadOffice&allowPlaceHolder=true', 
        isEstreno: true,
      },
      {
          title: 'Masacre en Texas',
          genre: 'Terror',
          imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001976?referenceScheme=HeadOffice&allowPlaceHolder=true', 
          isEstreno: true,
        },
  ];
  
  const peliculasMovies = [
    {
      title: 'El Señor de los Anillos',
      genre: 'Fantasía',
      imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002198?referenceScheme=HeadOffice&allowPlaceHolder=true',
      
    },

  ];

function App() {
    return (
        <>
          <Navbar/>
          <Carrusel/>
            <div className="bg-gray-900 text-white w-full m-auto flex flex-col gap-16">
              <div className="my-8 max-w-screen-xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-white">BIENVENIDO A CIBERCINE</h1>
                <p className="text-xl mt-4">
                  ¿Estás listo para vivir la más grande experiencia y disfrutar los mejores beneficios?
                </p>
                <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black hover:text-white transition duration-300 font-bold py-2 px-4 rounded">
                  UNIRME
                </button>
              </div>

              <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/deadpool">IR PAGINAS DETAIL</Link>
                
                <Routes>                
                  <Route path="/" element={<Home/>} />
                  <Route path="/deadpool" element={<Detail/>} />
                </Routes>
              </BrowserRouter>

              {/* Lista de Estrenos */}
              <MovieList title="Estrenos" movies={estrenoMovies} />
  

              {/* Lista de Películas */}
              <MovieList title="Películas" movies={peliculasMovies} />
            </div>
        </>
    )
}

export default App