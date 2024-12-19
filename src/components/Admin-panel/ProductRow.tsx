import { iProduct } from "@/app/admin/dashboard/page";
import { setProduct } from "@/redux/features/productSlice";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";

interface PropsTypes {
  srNo: number;
  setOpenPopup: Dispatch<SetStateAction<boolean>>;
  setUpdateTable: Dispatch<SetStateAction<boolean>>;
  product: iProduct;
}
const ProductRow = ({
  srNo,
  setOpenPopup,
  setUpdateTable,
  product,
}: PropsTypes) => {
  const dispatch = useDispatch();
  const onEdit = () => {
    dispatch(setProduct(product));
    setOpenPopup(true);
  };
  const onDelete = () => {};
  return (
    <tr>
      <td>
        <div>{srNo}</div>
      </td>
      <td>
        <div>{product.name}</div>
      </td>
      <td>
        <div>${product.price}</div>
      </td>
      
      <td>
        <Image src={product.imgSrc} width={40} height={40} alt="image"></Image>
      </td>
      <td>
        <div className="text-2xl flex items-center gap-2 text-gray-600">
          <CiEdit
            className="hover:text-black cursor-pointer"
            onClick={onEdit}
          ></CiEdit>
          <RiDeleteBack2Fill
            className="text-[20px] cursor-pointer hover:bg-red-600"
            onClick={onDelete}
          ></RiDeleteBack2Fill>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
