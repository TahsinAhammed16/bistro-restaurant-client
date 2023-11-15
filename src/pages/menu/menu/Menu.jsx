import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import Cover from "../../shared/cover/Cover";
console.log(menuImg);

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title="OUR MENU"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="DESSERTS"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title="PIZZA"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
