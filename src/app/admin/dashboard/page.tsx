"use client";
import PopUp from "@/components/Admin-panel/PopUp";
import ProductRow from "@/components/Admin-panel/ProductRow";
import { setLoading } from "@/redux/features/loadingSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export interface iProduct {
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string;
}
const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get("/api/get-products")
      .then((res) => setProducts(res?.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  }, [updateTable]);
  return (
    <div>
      <div className="bg-white h-[calc(100vh-96px)] rounded-lg p-4">
        <h1 className="text-3xl">All Products</h1>
        <div className="mt-4 h-[calc(100vh-180px)] overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-500 border-t border-[#ececec]">
                <td>SR No.</td>
                <td>Name</td>
                <td>Price</td>
                <td>Picture</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {products.map((product: iProduct, index) => (
                <ProductRow
                  key={product._id}
                  srNo={index + 1}
                  setOpenPopup={setOpenPopup}
                  setUpdateTable={setUpdateTable}
                  product={product}
                ></ProductRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openPopup && (
        <PopUp
          setOpenPopup={setOpenPopup}
          setUpdateTable={setUpdateTable}
        ></PopUp>
      )}
    </div>
  );
};

export default Dashboard;
