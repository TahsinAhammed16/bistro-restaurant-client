import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import useAxios from "../../../hooks/useAxios";
import { RiDeleteBin4Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <>
      <SectionTitle
        subHeading="At a Glance!"
        heading="MANAGE ALL BOOKINGS"
      ></SectionTitle>
      <div className="w-11/12 bg-slate-100 rounded-lg">
        <div className="flex gap-2 justify-between p-4">
          <h2 className="text-2xl font-bold">Total Items: {users.length}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="rounded-lg bg-[#D1A054]">
              <tr className="text-white">
                <th>#</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <td className="font-bold">{idx + 1}</td>
                  <td>
                    <p>{user.name}</p>
                  </td>
                  <td>{user.email}$</td>
                  <th>
                    <button className=" btn bg-[#D1A054] btn-sm text-white">
                      <FaUsers />
                    </button>
                  </th>
                  <td>
                    <button className=" btn bg-red-600 btn-sm text-white">
                      <RiDeleteBin4Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
