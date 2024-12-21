import ProductForm from "@/components/Admin-panel/ProductForm";

const Products = () => {
  return (
    <div className="h-[calc(100vh-96px)] w-full overflow-y-auto gird place-items-center">
      <div className="bg-white rounded-lg w-[300px] p-4">
        <ProductForm></ProductForm>
      </div>
    </div>
  );
};

export default Products;
