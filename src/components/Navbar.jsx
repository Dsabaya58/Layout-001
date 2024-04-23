import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa"
import { FaUser } from "react-icons/fa6"
import { FcSettings } from "react-icons/fc"
import { HiOutlineLogout } from "react-icons/hi"

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className="bg-blue-300 px-4 py-3 flex justify-between shadow-lg ">
        <div className="flex items-center text-xl">
            <FaBars className="text-blck me-4 cursor-pointer" onClick={() => setSidebarToggle(!sidebarToggle)}></FaBars>
            <span className="text-black font-semibold">Toursboat</span>
        </div>
        <div className="flex items-center gap-x-5">
            <div className="relative md:w-56">
                <span className="relative md:absolute inset-y-0 flex items-center pl-2">
                    <button className="p-1 focus:outline-none text-black md:text-black"><FaSearch /></button>
                </span>
                <input type="text" className="w-full px-4 pl-12 rounded shadow outline-none" />
            </div>

            <div className="text-black">
                <FaBell className="w-6 h-6"/>
            </div>

            <div className="relative">
            <button className="text-black group">
                <FaUserCircle className="w-6 h-6 mt-1"/>
                <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0 h-35">
                    <ul className="py-2 text-sm text-gray-950 font-semibold items-center justify-between mt-4">
                        <li className="hover:shadow hover:bg-blue-200 ml-2 mr-2 rounded"><a href="" className="flex  items-center justify-center gap-2"><FaUser />Profile</a></li>
                        <li className="hover:shadow hover:bg-blue-200 ml-2 mr-2 rounded"><a href="" className="flex  items-center justify-center gap-2"><FcSettings />Setting</a></li>
                        <li className="hover:shadow hover:bg-blue-200 ml-2 mr-2 rounded"><a href="" className="flex  items-center justify-center gap-2"><HiOutlineLogout /> Log Out</a></li>
                    </ul>
                </div>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar