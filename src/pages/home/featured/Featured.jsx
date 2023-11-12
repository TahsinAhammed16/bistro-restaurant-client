import featuredImg from "../../../assets/home/featured.jpg";
import featuredBg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div
      className="text-white pt-3 my-24 bg-fixed"
      style={{
        backgroundImage: `url(${featuredBg})`,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        backgroundBlendMode: "overlay",
      }}
    >
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-6 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            expedita hic dolorem, iusto vel suscipit nam excepturi debitis
            magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
            consectetur blanditiis laboriosam fugiat ea quia similique quam nisi
            reprehenderit numquam magnam nemo vitae cupiditate, atque maiores
            dicta minus pariatur. Perspiciatis nobis vero quas?
          </p>
          <button className="btn btn-outline border-white text-white mt-3">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
