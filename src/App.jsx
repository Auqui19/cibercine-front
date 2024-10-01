import Carrusel from './components/Carrucel.jsx'
import MovieList from './components/MovieList';


const estrenoMovies = [
    {
      title: 'Masacre en Texas',
      genre: 'Terror',
      imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002037?referenceScheme=HeadOffice&allowPlaceHolder=true', 
     
    },
    {
        title: 'Masacre en Texas',
        genre: 'Terror',
        imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001976?referenceScheme=HeadOffice&allowPlaceHolder=true', 
       
      },
      {
        title: 'Masacre en Texas',
        genre: 'Terror',
        imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002197?referenceScheme=HeadOffice&allowPlaceHolder=true', 
       
      },
      {
        title: 'Masacre en Texas',
        genre: 'Terror',
        imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00002037?referenceScheme=HeadOffice&allowPlaceHolder=true', 
       
      },
      {
          title: 'Masacre en Texas',
          genre: 'Terror',
          imageUrl: 'https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001976?referenceScheme=HeadOffice&allowPlaceHolder=true', 
         
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
            <Carrusel/>
            <div className="bg-gray-900 min-h-screen text-white p-6">
  <div className="my-8 max-w-screen-xl mx-auto text-center">
    <h1 className="text-4xl font-bold text-white">BIENVENIDO A CIBERCINE</h1>
    <p className="text-xl mt-4">
      ¿Estás listo para vivir la más grande experiencia y disfrutar los mejores beneficios?
    </p>
    <button className="mt-6 transition bg-yellow-500 hover:bg-yellow-600 text-black hover:text-white transition duration-300 font-bold py-2 px-4 rounded">
      UNIRME
    </button>
  </div>

  {/* Lista de Estrenos */}
  <MovieList title="Estrenos" movies={estrenoMovies} />
  

  {/* Lista de Películas */}
  <MovieList title="Películas" movies={peliculasMovies} />
</div>

        </>
    )
}

export default App