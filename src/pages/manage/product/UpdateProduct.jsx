/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { updateAProduct } from "../../../services/product/productApi";

const UpdateProduct = (props) => {
  const { dataUpdate, isUpdateModalOpen, setIsUpdateModalOpen, setDataUpdate } =
    props;

  const [namePro, setNamePro] = useState("");
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

  const handleCancel = () => {
    setIsUpdateModalOpen(false);
    setDataUpdate(null);
    setNamePro("");
    setTitle("");
    setImage("");
    setPriceNew("");
    setPriceOld("");
    setSale("");
    setDescription("");
    setCategory("");
    setSKU("");
    setMaterial("");
    setDimension("");
  };

  const handleOk = () => {
    const data = {
      namePro,
      title,
      image,
      priceNew,
      priceOld,
      sale,
      description,
      category,
      SKU,
      dimension,
      material,
    };

    updateAProduct(data, dataUpdate._id);
    console.log(data);
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    if (dataUpdate) {
      setNamePro(dataUpdate.namePro);
      setTitle(dataUpdate.title);
      setImage(dataUpdate.image);
      setPriceNew(dataUpdate.priceNew);
      setPriceOld(dataUpdate.priceOld);
      setSale(dataUpdate.sale);
      setDescription(dataUpdate.description);
      setCategory(dataUpdate.category);
      setSKU(dataUpdate.SKU);
      setMaterial(dataUpdate.material);
      setDimension(dataUpdate.dimension);
    }
  }, [dataUpdate]);

  return (
    <div className="">
      <Modal
        title="Update product"
        open={isUpdateModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{
          top: 50,
        }}
      >
        <div className="mb-5 flex gap-4">
          <div className="flex-1">
            <label>Name</label>
            <Input
              type="text"
              value={namePro}
              onChange={(e) => setNamePro(e.target.value)}
              className="mt-2"
              required
            />
          </div>
          <div className="flex-1">
            <label>Title</label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2"
              required
            />
          </div>
        </div>

        <div className="mb-5 flex gap-4">
          <div className="flex-1">
            <label>Image</label>
            <Input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-2"
              required
            />
          </div>
          <div className="flex-1">
            <label>Sale</label>
            <Input
              type="text"
              value={sale}
              onChange={(e) => setSale(e.target.value)}
              className="mt-2"
              required
            />
          </div>
        </div>

        <div className="mb-5 flex gap-4">
          <div className="flex-1">
            <label>PriceNew</label>
            <Input
              type="number"
              value={priceNew}
              onChange={(e) => setPriceNew(e.target.value)}
              className="mt-2"
              required
            />
          </div>
          <div className="flex-1">
            <label>PriceOld</label>
            <Input
              type="number"
              value={priceOld}
              onChange={(e) => setPriceOld(e.target.value)}
              className="mt-2"
              required
            />
          </div>
        </div>

        <div className="mb-5 flex gap-4">
          <div className="flex-1">
            <label>SKU</label>
            <Input
              type="text"
              value={SKU}
              onChange={(e) => setSKU(e.target.value)}
              className="mt-2"
              required
            />
          </div>
          <div className="flex-1 flex-col">
            <label>Category</label>
            <div className="">
              <Select className="mt-2 w-full">
                {/* {categories.length > 0 &&
                  categories.map((item) => (
                    <Option key={item._id} value={category}>
                      {category}
                    </Option>
                  ))} */}
              </Select>
            </div>
          </div>
        </div>

        <div className="mb-5 flex gap-4">
          <div className="flex-1">
            <label>Material</label>
            <Input
              type="text"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="mt-2"
              required
            />
          </div>
          <div className="flex-1">
            <label>Dimension</label>
            <Input
              type="text"
              value={dimension}
              onChange={(e) => setDimension(e.target.value)}
              className="mt-2"
              required
            />
          </div>
        </div>

        <div className="flex-1">
          <label>Description</label>
          <Input
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2"
            required
          />
        </div>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
