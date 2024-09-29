function Register() {
    return (
        <div className="flex text-align-center justify-center h-screen bg-gray-900">
            <div className="w-1/2 hidden md:block">
                <img src="https://img.freepik.com/fotos-premium/grupo-personas-estan-sentadas-cine-palabras-no-parte-inferior_783884-235385.jpg" alt="cine" className="object-cover h-full w-full"/>
            </div>
            <div className="w-full md:w-1/2 bg-gray-800 text-white flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold m-4 pb-4">
                    Registrate
                </h2>

                <p className="mb-6 px-20 text-center">
                    Completa tus datos y accede a nuestros servicios.
                </p>

                <form className="space-y-6 mx-20">
                    <input 
                        type="name" 
                        placeholder="Nombre" 
                        required
                        className="w-full p-3 bg-gray-700 text-while placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
                    />
                     <input 
                        type="lastName" 
                        placeholder="Apellido" 
                        required
                        className="w-full p-3 bg-gray-700 text-while placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
                    />
                    <input 
                        type="email" 
                        placeholder="Correo" 
                        required
                        className="w-full p-3 bg-gray-700 text-while placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
                    />
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        required
                        className="w-full p-3 bg-gray-700 text-while placeholder-gray-400 border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
                    />
        
                    
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-7/12 p-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 hover:text-white transition duration-300"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center">
                    ¿Ya tienes cuenta? <a href="#" className="text-yellow-500 hover:text-yellow-600 hover:underline" >Iniciar Sesión</a>
                </p>
            </div>
        </div>
    )
}

export default Register;