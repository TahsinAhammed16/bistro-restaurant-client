import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import Cover from "../../shared/cover/Cover";
console.log(menuImg);

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="OUR MENU"></Cover>
  
    </div>
  );
};

export default Menu;
