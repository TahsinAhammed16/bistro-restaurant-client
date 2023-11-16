import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
          to="/messages"
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
          <div className="dropdown dropdown-end ml-2">
           
            <Link to="/login">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://www.summithealth.org.au/wp-content/uploads/2021/07/placeholder.jpg" />
                </div>
              </label>{" "}
            </Link>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
