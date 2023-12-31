import {
  FaAd,
  FaBook,
  FaCalendar,
  FaFileContract,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const isAdmin = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* responsive menu  */}
        <label
          htmlFor="my-drawer-2"
          className="flex items-center w-full lg:hidden mt-2 p-2 font-medium gap-1 bg-[#D1A054]"
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
          <Link to="/" className="p-3">
            <p className="text-2xl font-extrabold">BISTRO BOSS</p>
            <p className="font-semibold text-lg">R E S T A U R A N T</p>
          </Link>

          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white"
                      : "text-[#151515] font-medium"
                  }
                >
                  <FaHome></FaHome> ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white"
                      : "text-[#151515] font-medium"
                  }
                >
                  <FaUtensils></FaUtensils> ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white"
                      : "text-[#151515] font-medium"
                  }
                >
                  <FaList></FaList> MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageBookings"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white"
                      : "text-[#151515] font-medium"
                  }
                >
                  <FaBook></FaBook> MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-white"
                      : "text-[#151515] font-medium"
                  }
                >
                  <FaUsers></FaUsers> ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <FaList></FaList> MY CART ({cart.length})
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
                  <FaCalendar></FaCalendar> MY BOOKING
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          {/* shared nav links */}
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaHome /> HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <IoMdMenu /> MENU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order/salad"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaShoppingCart /> SHOP
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white"
                  : "text-[#151515] font-medium"
              }
            >
              <FaFileContract /> CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
