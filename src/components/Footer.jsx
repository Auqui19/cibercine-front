function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white text-base flex justify-center pt-16 pb-5"> 
        <div className="flex flex-col justify-center items-center w-10/12">
            <div className="grid grid-cols-5 gap-4 w-full mb-16">
                <div className="col-span-1">
                    <h1 className="text-2xl font-bold">CiberCine</h1>
                </div>
                <div className="col-span-3">
                    <ul className="flex list-none gap-16 justify-center">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Peliculas</a></li>
                        <li><a href="#">Noticias</a></li>
                    </ul>
                </div>
                <div className="col-span-1 text-2xl flex gap-5 justify-end">
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