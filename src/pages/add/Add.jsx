/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import BannerPage from "../../components/BannerPage";
import FormInput from "../../components/FormInput";
import { notification } from "antd";
import { postAProduct } from "../../services/product/productApi";
import { postACategory } from "../../services/category/categoryApi";

const Add = () => {
  const [active, setActive] = useState("product");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [priceNew, setPriceNew] = useState("");
  const [priceOld, setPriceOld] = useState("");
  const [sale, setSale] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [SKU, setSKU] = useState("");
  const [material, setMaterial] = useState("");
  const [dimension, setDimension] = useState("");

  const [nameCategory, setNameCategory] = useState("");

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: `Created a ${active === "product" ? "product" : "category"} successfully !!!`,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddProduct = () => {
    const newData = {
      name: name,
      title: title,
      image: image,
      priceNew: priceNew,
      priceOld: priceOld,
      sale: sale,
      description: description,
      category: category,
      SKU: SKU,
      material: material,
      dimension: dimension,
    };

    postAProduct(newData);

    openNotificationWithIcon("success");
    window.scrollTo(0, 0);
  };

  const handleAddCategory = () => {
    const newCategory = {
      name: nameCategory,
    };
    postACategory(newCategory);
    openNotificationWithIcon("success");
    window.scrollTo(0, 0);
  };

  return (
    <div className="">
      {contextHolder}
      <BannerPage title="Add" />

      <div className="mx-auto my-20 max-w-screen-lg">
        <div className="mb-14 flex justify-center gap-10 text-2xl font-medium">
          <p
            onClick={() => setActive("product")}
            className={`${active === "category" && "text-[var(--gray6)]"} cursor-pointer`}
          >
            Product
          </p>
          <p
            onClick={() => setActive("category")}
            className={`${active === "product" && "text-[var(--gray6)]"} cursor-pointer`}
          >
            Category
          </p>
        </div>
        {active === "product" ? (
          <div className="grid grid-cols-2 gap-5">
            <FormInput name="Name" title="name" setData={setName} />
            <FormInput name="Title" title="title" setData={setTitle} />
            <FormInput name="Image" title="image" setData={setImage} />
            <FormInput
              name="Price New"
              title="priceNew"
              setData={setPriceNew}
            />
            <FormInput
              name="Price Old"
              title="priceOld"
              setData={setPriceOld}
            />
            <FormInput name="sale" title="sale" setData={setSale} />
            <FormInput
              name="Description"
              title="description"
              setData={setDescription}
            />
            <FormInput name="Category" title="category" setData={setCategory} />
            <FormInput name="SKU" title="SKU" setData={setSKU} />
            <FormInput name="Material" title="material" setData={setMaterial} />
            <FormInput
              name="Dimension"
              title="dimension"
              setData={setDimension}
            />
            <button
              onClick={handleAddProduct}
              className="ml-auto mt-auto h-[60px] w-[200px] rounded-lg border border-[var(--gray6)] text-base font-normal
            duration-300 hover:bg-[var(--primary-color)] hover:text-white
          "
            >
              Add
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5">
            <FormInput name="Name" title="name" setData={setNameCategory} />

            <button
              onClick={handleAddCategory}
              className="ml-auto mt-auto h-[60px] w-[200px] rounded-lg border border-[var(--gray6)] text-base font-medium
            duration-300 hover:bg-[var(--primary-color)] hover:text-white
          "
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;
