import { FaCog, FaHome, FaPoll, FaRegEnvelopeOpen, FaRegFileAlt } from "react-icons/fa"
import { Outlet, Link } from 'react-router-dom'
export const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? ' hidden ' : ' block '} w-64 bg-blue-200 fixed h-full px-4 py-2`}>
        <div className="my-2 mb-4">
            <h1 className="text-2x text-black font-bold">Admin Dashboard</h1>
        </div>
        <hr />
        <ul className="mt-3 text-black font-bold">
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to="" className="px-3">
                    <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                    Home
                </Link>
            </li>

            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to="" className="px-3">
                    <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegFileAlt>
                    Blogs
                </Link>
            </li>

            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to="reports" className="px-3">
                    <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2"></FaPoll>
                    Reports
                </Link>
            </li>

            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to="" className="px-3">
                    <FaRegEnvelopeOpen className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegEnvelopeOpen>
                    Inbox
                </Link>
            </li>

            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to="" className="px-3">
                    <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
                    Settings
                </Link>
            </li>
        </ul>
        <Outlet />
    </div>
  )
}
