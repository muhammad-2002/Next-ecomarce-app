"use client";
import { setLoading } from "@/redux/features/loadingSlice";
import { makeTost } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

const ProductForm = () => {
  interface iPayload {
    imgSrc: null | string;
    fileKey: null | string;
    name: string;
    category: string;
    price: string;
  }
  const [payload, setPayload] = useState<iPayload>({
    imgSrc: null,
    fileKey: null,
    name: "",
    category: "",
    price: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(payload);
    dispatch(setLoading(true));
    axios
      .post("/api/add-product", payload)
      .then(() => {
        makeTost("product added successfully");
        setPayload({
          imgSrc: null,
          fileKey: null,
          name: "",
          category: "",
          price: "",
        });
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoading(false)));
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Image
        className="max-h-[300px] w-auto object-contain rounded-md"
        src={payload.imgSrc ? payload.imgSrc : "/placeholder.jpg"}
        alt="img"
        height={600}
        width={500}
      ></Image>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response

          setPayload({
            ...payload,
            imgSrc: res[0].url,
            fileKey: res[0].key,
          });
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      <input
        onChange={(e) =>
          setPayload({
            ...payload,
            name: e.target.value,
          })
        }
        value={payload.name}
        type="text"
        placeholder="Product name"
        className="px-2 py-2 border-2 rounded-md border-gray-500 outline-none  "
      ></input>
      <input
        onChange={(e) =>
          setPayload({
            ...payload,
            price: e.target.value,
          })
        }
        value={payload.price}
        type="text"
        placeholder="Product price"
        className="px-2 py-2 border-2 rounded-md border-gray-500 outline-none  "
      ></input>
      <input
        onChange={(e) =>
          setPayload({
            ...payload,
            category: e.target.value,
          })
        }
        value={payload.category}
        type="text"
        placeholder="Product  category"
        className="px-2 py-2 border-2 rounded-md border-gray-500 outline-none  "
      ></input>

      <input
        type="submit"
        value={"submit"}
        className="rounded-md bg-[#FD4B6B] font-semibold py-2 cursor-pointer"
      ></input>
    </form>
  );
};

export default ProductForm;
