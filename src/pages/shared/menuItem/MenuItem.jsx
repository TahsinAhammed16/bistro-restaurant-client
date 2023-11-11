/* eslint-disable react/prop-types */
const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px] mr-3"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-xl">{name}----------</h3>
        <p className="text-[#737373]">{recipe}</p>
      </div>
      <p className="text-yellow-500 text-xl">${price}</p>
    </div>
  );
};

export default MenuItem;
