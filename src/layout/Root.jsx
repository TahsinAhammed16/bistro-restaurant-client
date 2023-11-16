import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";

const Root = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooterLog = location.pathname.includes("login");
  const noHeaderFooterReg = location.pathname.includes("register");

  return (
    <div>
      {noHeaderFooterLog || noHeaderFooterReg || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooterLog || noHeaderFooterReg || <Footer></Footer>}
    </div>
  );
};

export default Root;
