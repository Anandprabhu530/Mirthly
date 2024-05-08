const Navbar = () =>{
    return(
        <div className="text-black w-full flex p-4 justify-center gap-6">
            <div className="border hover:bg-white hover:text-black cursor-pointer border-white text-white p-2 rounded-xl">Guider</div>
            <div className="border hover:bg-white hover:text-black cursor-pointer border-white text-white p-2 rounded-xl">Builder</div>
            <div className="border hover:bg-white hover:text-black cursor-pointer border-white text-white p-2 rounded-xl">Analyze</div>
        </div>
    )
}

export default Navbar