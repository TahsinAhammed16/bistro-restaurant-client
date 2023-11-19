import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <SectionTitle
        subHeading="My Cart"
        heading="WANNA ADD MORE?"
      ></SectionTitle>
      <div className="w-11/12 bg-slate-100 rounded-lg">
        <div className="flex gap-2 justify-between p-4">
          <h2 className="text-2xl font-bold">Items: {cart.length}</h2>
          <h2 className="text-2xl font-bold">Total Price: {totalPrice}$</h2>
          <button className="btn btn-sm btn-primary border-0 bg-[#D1A054] hover:bg-[#D1A054] hover:shadow-md text-white">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="rounded-lg bg-[#D1A054]">
              <tr className="text-white">
                <th>#</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td></td>
                  <td>
                    <div className="avatar">
                      <div className="mask w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
