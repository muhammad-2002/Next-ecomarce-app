import toast from "react-hot-toast";

export const makeTost = (text: string) => {
  toast.success(text, {
    style: {
      borderRadius: "4px",
      background: "#333",
      color: "#fff",
    },
  });
};
