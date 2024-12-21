import { iProduct } from "@/app/admin/dashboard/page";
import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { makeTost } from "@/utils/helper";
import axios from "axios";
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
  const onDelete = () => {
    const payload = {
      fileKey: product.fileKey,
    };
    dispatch(setLoading(true));
    axios
      .delete("/api/uploadthing", { data: payload })
      .then((res) => {
        console.log(res.data);
        axios
          .delete(`/api/delete-product/${product._id}`)
          .then(() => {
            makeTost("successfully delete product");
            setUpdateTable((prevEvent) => !prevEvent);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
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
