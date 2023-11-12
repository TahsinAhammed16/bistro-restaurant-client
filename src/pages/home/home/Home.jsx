import { Helmet } from "react-helmet";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
