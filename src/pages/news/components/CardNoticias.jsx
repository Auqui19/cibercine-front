import PropTypes from 'prop-types';
import { useState } from 'react';

const CardNoticias = ({ title, imageUrl, description }) => {
    const [isLoading, setIsLoading] = useState(true);

    // FUNCION QUE SE EJECUTA CUANDO LA IMAGEN SE CARGA
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {isLoading ? (
                <div className="flex justify-center items-center w-full h-96 md:h-auto md:w-48">
                    <p className="text-gray-500">Loading...</p>
                </div>
            ) : null}


            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none 
                            md:rounded-s-lg" src={imageUrl} alt="" onLoad={handleImageLoad} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </div>
    )
}

CardNoticias.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default CardNoticias