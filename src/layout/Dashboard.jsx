/* eslint-disable no-unused-vars */
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="flex items-center w-full lg:hidden mt-2 p-2 font-medium gap-1 text- bg-[#D1A054]"
        >
          <IoMdMenu />
          MENU
        </label>
        <Outlet />
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full  bg-[#D1A054] text-base-content">
          {/* Sidebar content here */}
          <div className="p-3">
            <p className="text-2xl font-extrabold">BISTRO BOSS</p>
            <p className="font-semibold text-lg">R E S T A U R A N T</p>
          </div>
          <li>
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaHome></FaHome> USER HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaWallet></FaWallet> RESERVATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/paymentHistory"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaShoppingCart></FaShoppingCart> PAYMENT HISTORY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaShoppingCart></FaShoppingCart> MY CART
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addReview"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaAd></FaAd> ADD REVIEW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myBooking"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaList></FaList> MY BOOKING
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
