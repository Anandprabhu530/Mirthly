import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-fit bg-slate-800 rounded-full">
        <div className="hidden lg:visible absolute text-white font-bold">
          Logo
        </div>
        <div className="text-black w-fit flex justify-center">
          <Link
            href="/guider"
            className="border hover:bg-white hover:text-black hover:rounded-full cursor-pointer text-lg text-white px-4 py-1 rounded-full+
                    "
          >
            Guider
          </Link>
          <Link
            href="/resume"
            className="border hover:bg-white hover:text-black hover:rounded-full cursor-pointer text-lg text-white px-4 py-1 rounded-full+
                    "
          >
            Builder
          </Link>
          <Link
            href="/analyze"
            className="border hover:bg-white hover:text-black hover:rounded-full cursor-pointer text-lg text-white px-4 py-1 rounded-full+
                    "
          >
            Analyze
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
