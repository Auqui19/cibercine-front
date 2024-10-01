import InputAuthentication from './components/InputAuthentication.jsx'
import ImgLogin from '../../assets/images/imgLogin.jpg';

function Login() {
    return (
        <div className="flex text-align-center justify-center h-screen bg-gray-900">
            <div className="w-1/2 hidden md:block">
                <img src={ImgLogin} alt="cine" className="object-cover h-full w-full"/>
            </div>
            <div className="w-full md:w-1/2 bg-gray-800 text-white flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold m-4 pb-4">
                    Iniciar Sesión
                </h2>

                <p className="mb-6 px-20 text-center">
                    Ingresa a tu cuenta para disfrutar de tus beneficios, acumular puntos y vivir al máximo la experiencia CiberCine.
                </p>

                <form className="space-y-6 mx-20 sm:mx-20">
                    <InputAuthentication type="email" placeholder="Correo" required/>
                    <InputAuthentication type="password" placeholder="Contraseña" required/>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-7/12 p-3 bg-yellow-500 text-black font-semibold rounded
                             hover:bg-yellow-600 hover:text-white transition duration-300 
                             flex items-center justify-center gap-2"
                        >
                          <i className="fa-duotone fa-solid fa-user"></i>
                            Iniciar
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center">
                    ¿Aun no tienes cuenta? <a href="#" className="text-yellow-500 hover:text-yellow-600 hover:underline" >Registrate</a>
                </p>
            </div>
        </div>
    )
}

export default Login;