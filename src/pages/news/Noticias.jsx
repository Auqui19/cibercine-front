import CardNoticias from "./components/CardNoticias";

function Noticias() {
    return (
        <div className="py-20 w-11/12 lg:w-10/12 mx-auto">
            <h2 className="py-10 text-2xl text-white font-bold font-poppins">Noticias de Peliculas</h2>
                <div className="grid grid-cols-2 gap-4  ">
                    <CardNoticias
                        imageUrl="https://www.lahiguera.net/cinemania/pelicula/10305/alas_blancas-cartel-11919.jpg"
                        title="Crítica de 'Alas Blancas'"
                        description="No te pierdas 'Alas Blancas', el próximo éxito en cines que te mostramos en exclusiva"
                    />
                    <CardNoticias
                        imageUrl="https://www.lahiguera.net/cinemania/pelicula/11307/hotel_bitcoin-cartel-11921.jpg"
                        title="Noticias sobre la película Hotel Bitcoin"
                        description="Llega a los cines 'Hotel Bitcoin', la nueva comedia de Alejo Sauras y Pablo Chiapella · 'Hotel Bitcoin': Una nueva comedia de enredo protagonizada por Alejo ..."
                    />
                    <CardNoticias
                        imageUrl="https://www.lahiguera.net/cinemania/pelicula/11280/red_one-cartel-11879.jpg"
                        title="De qué trata Red One: fecha de estreno y tráiler"
                        description="Es la nueva película que llega a la pantalla grande de la mano de Dwayne Johnson, Chris Evans y J. K. Simmons, protagonistas de “Red One”. La ..."
                    />
                    <CardNoticias
                        imageUrl="https://www.lahiguera.net/cinemania/pelicula/11179/la_trampa-cartel-11925.jpg"
                        title="'La trampa': ¿Qué dice la crítica del thriller psicológico de M .."
                        description="La nueva película de M. Night Shyamalan ha generado opiniones divididas entre la crítica. Mientras algunos elogian su atmósfera tensa y el ..."
                    />
                    <CardNoticias
                        imageUrl="https://www.lahiguera.net/cinemania/pelicula/11073/gru_4_mi_villano_favorito-cartel-11857.jpg"
                        title="Final explicado de “Mi villano favorito 4”"
                        description="Final explicado de “Mi villano favorito 4”: qué le hizo Maxime Le Mal a Gru Jr. y cuáles son los cameos sorpresas. Si ya disfrutaste de la ..."
                    />
                    <CardNoticias
                        imageUrl="https://www.lahiguera.net/cinemania/pelicula/11281/amenaza_en_el_aire-cartel-11881.jpg"
                        title="Amenaza en el aire, la nueva película de Mel Gibson con ..."
                        description="Con un reparto encabezado por Mark Wahlberg, Michelle Dockery y Topher Grace, Amenaza en el aire se estrena en los cines de España el 31 de ...
"
                    />
                </div>
        </div>

    )
}

export default Noticias