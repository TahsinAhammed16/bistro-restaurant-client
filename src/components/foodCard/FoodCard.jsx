/* eslint-disable react/prop-types */

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  const handleAddToCart = (food) => {
    console.log(food);
  };

  return (
    <div className="card w-96 bg-slate-200 shadow-xl mx-auto h-[500px] shadow-none hover:shadow-xl hover:border">
      <figure>
        <img src={image} alt="" className="w-[400px] h-[300px]" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white rounded-lg p-1">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="font-bold text-xl text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-amber-600 text-amber-600 border-0 border-b-4 mt-4 flex  mx-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
