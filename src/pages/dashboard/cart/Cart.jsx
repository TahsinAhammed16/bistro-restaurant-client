import Swal from "sweetalert2";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxios from "../../../hooks/useAxios";
import useCart from "../../../hooks/useCart";
import { RiDeleteBin4Line } from "react-icons/ri";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxios();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
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
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <td className="font-bold">{idx + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask w-12 h-12">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>{item.price}$</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className=" btn bg-red-600 btn-sm text-white"
                    >
                      <RiDeleteBin4Line />
                    </button>
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
