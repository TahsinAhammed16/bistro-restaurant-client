import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/messages"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          <button className="flex relative mr-5">
            <FaShoppingCart className=""></FaShoppingCart>
            <div className="bg-green-600 left-3 top-2 text-white font-bold text-xs p-1 rounded-full absolute">
              +{cart.length}
            </div>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black p-2 fixed z-10 bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-extrabold text-xl text-black"
            >
              {navOptions}
            </ul>
          </div>
          <div className="text-white">
            <p className="text-2xl font-extrabold">BISTRO BOSS</p>
            <p className="font-semibold text-lg">R E S T A U R A N T</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 font-extrabold text-xl gap-5 text-white">
            {navOptions}
          </ul>
        </div>
        <div>
          {user ? (
            <>
              <div className="dropdown dropdown-end ml-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-base-200 rounded-box w-60"
                >
                  <li>
                    <a className="justify-between">Name: {user.displayName}</a>
                  </li>
                  <li>
                    <a>Email: {user.email}</a>
                  </li>
                  <li>
                    <a
                      onClick={handleSignOut}
                      className="bg-red-600 text-white font-semibold"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://www.summithealth.org.au/wp-content/uploads/2021/07/placeholder.jpg" />
                  </div>
                </label>{" "}
              </Link>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
