import { setLoading } from "@/redux/features/loadingSlice";
import { useAppSelector } from "@/redux/hooks";
import { makeTost } from "@/utils/helper";
import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";

interface PropTypes {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
}
const PopUp = ({ setOpenPopup, setUpdateTable }: PropTypes) => {
  const productData = useAppSelector((state) => state.productReducer);
  const [inputData, setInputData] = useState({
    name: productData.name,
    category: productData.category,
    price: productData.price,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    //put data
    axios
      .put(`/api/edit-product/${productData._id}`, inputData)
      .then((res) => {
        makeTost("product updated successfully");
        setUpdateTable((prevState) => !prevState);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setOpenPopup(false);
        dispatch(setLoading(false));
        
      });
  };
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-[#00000070] grid place-items-center">
      <div className="bg-white w-[700px] rounded-lg text-center py-8 relative">
        <IoIosCloseCircleOutline
          className="absolute text-black right-0 top-0 hover:text-red-500  text-2xl cursor-pointer"
          onClick={() => setOpenPopup(false)}
        ></IoIosCloseCircleOutline>
        <h1 className="font-semibold text-2xl text-center">Update Product</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full p-4 mt-6 space-y-4  text-slate-800 my-4 mx-auto "
        >
          <input
            type="text"
            className="w-full p-2 outline-none block rounded-lg border-2 "
            placeholder="Name"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          ></input>

          <input
            type="text"
            className="w-full p-2 outline-none block rounded-lg border-2 "
            placeholder="Price"
            value={inputData.price}
            onChange={(e) =>
              setInputData({ ...inputData, price: e.target.value })
            }
          ></input>

          <input
            type="text"
            className="w-full p-2 outline-none block rounded-lg border-2 "
            placeholder="Category"
            value={inputData.category}
            onChange={(e) =>
              setInputData({ ...inputData, category: e.target.value })
            }
          ></input>
          <div className="flex justify-end">
            <input
              type="submit"
              className="bg-blue-400 block px-3 py-2 rounded-md cursor-pointer "
              value={"save"}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
