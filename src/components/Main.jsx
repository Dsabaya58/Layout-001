// import { FaShoppingCart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FcBullish, FcCurrencyExchange, FcSalesPerformance } from "react-icons/fc";

const Main = () => {
  return (
    <div className="container-w-100% mt-0">
        <div className="ml-6  font-bold text-gray-950 font-xl">
            <h1>DASHBOARD</h1>
        </div>
        <div className="grid grid-cols-12 gap-4 ml-4 mr-4 h-60">

            {/* <!-- Column --> */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-slate-300 shadow-md rounded-xl">
                <FcSalesPerformance className="w-12 h-12 ml-4 mt-4"/>
                <h1 className="text-gray-950 ml-5 mt-4 font-semibold">Sales</h1>
            </div>

            {/* <!-- Column --> */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-slate-300 shadow-md rounded-xl">
                <FcBullish className="w-12 h-12 ml-4 mt-4"/>
                <h1 className="text-gray-950 ml-5 mt-4 font-semibold">Orders</h1>
            </div>

            {/* <!-- Column --> */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-slate-300 shadow-md rounded-xl">
                <FcCurrencyExchange className="w-12 h-12 ml-4 mt-4"/>
                <h1 className="text-gray-950 ml-5 mt-4 font-semibold">Profits</h1>
            </div>

            {/* <!-- Column --> */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-slate-300 shadow-md rounded-xl">
                <FaPeopleGroup className="w-12 h-12 ml-4 mt-4"/>
                <h1 className="text-gray-950 ml-5 mt-4 font-semibold">Customers</h1>
            </div>

        </div>
    </div>
  )
}

export default Main;