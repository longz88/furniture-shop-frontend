/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { updateACategory } from "../../../services/category/categoryApi";

const UpdateProduct = (props) => {
  const { dataUpdate, isUpdateModalOpen, setIsUpdateModalOpen, setDataUpdate } =
    props;

  const [nameCat, setNameCat] = useState("");

  const handleCancel = () => {
    setIsUpdateModalOpen(false);
    setDataUpdate(null);
    setNameCat("");
  };

  const handleOk = () => {
    const data = {
      nameCat,
    };

    updateACategory(data, dataUpdate._id);
    console.log(data);
    setIsUpdateModalOpen(false);
  };

  useEffect(() => {
    if (dataUpdate) {
      setNameCat(dataUpdate.nameCat);
    }
  }, [dataUpdate]);

  return (
    <div className="">
      <Modal
        title="Update product"
        open={isUpdateModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex-1">
          <label>Name</label>
          <Input
            type="text"
            value={nameCat}
            onChange={(e) => setNameCat(e.target.value)}
            className="mt-2"
            required
          />
        </div>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
