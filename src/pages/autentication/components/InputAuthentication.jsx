function InputAutentication(props) {
    return (
        <input 
            //type="email" 
            //placeholder="Correo" 
            //required
            className="w-full p-3 bg-gray-700 text-while placeholder-gray-400 border 
            border-gray-600 rounded focus:outline-none focus:border-yellow-500"
            {...props}
        />
    )
}

export default InputAutentication;