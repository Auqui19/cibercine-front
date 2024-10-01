function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white text-base pt-16 pb-5"> 
        <div className="flex flex-col justify-center items-center m-auto w-10/12 max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-full mb-8 lg:mb-16">
                <div className="col-span-1">
                    <h1 className="text-2xl font-bold text-center lg:text-left">CiberCine</h1>
                </div>
                <div className="col-span-1 lg:col-span-3 my-8 lg:my-0">
                    <ul className="flex list-none gap-16 justify-center">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Peliculas</a></li>
                        <li><a href="#">Noticias</a></li>
                    </ul>
                </div>
                <div className="col-span-1 text-3xl flex gap-5 justify-center lg:justify-end">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-x-twitter"></i>
                    <i className="fa-brands fa-square-instagram"></i>
                </div>
            </div>
            <div>
                <p>Copyright © 2024 CiberCine. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer