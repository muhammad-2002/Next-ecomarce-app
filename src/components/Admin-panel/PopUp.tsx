import { setLoading } from "@/redux/features/loadingSlice";
import { useAppSelector } from "@/redux/hooks";
import axios from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

interface PropTypes {
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
}
const PopUp = ({ setOpenPopup, setUpdateTable }: PropTypes) => {
    const productData = useAppSelector((state)=>state.productReducer)
    const [inputData,setInputData]=useState({
        name:productData.name,
        category:productData.category,
        price:productData.price

    })
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;
    dispatch(setLoading(true));
    //put data
    axios.put(`/edit-product/${}`)
  };
  return (
    <div>
      <h1>Popup</h1>
    </div>
  );
};

export default PopUp;
