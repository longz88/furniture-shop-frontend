/* eslint-disable no-unused-vars */
import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { postACategory } from "../../../services/category/categoryApi";

const CreateCategoryd = () => {
  // ========= module ===========
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formCategory] = Form.useForm();

  const { categories } = useSelector((state) => state.categories);

  const showModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCancel = () => {
    setIsAddModalOpen(false);
    formCategory.resetFields();
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const data = values;
    postACategory(data);
    formCategory.resetFields();
    setIsAddModalOpen(false);
  };

  return (
    <div className="">
      <Button type="primary" onClick={showModal} className="mb-4 bg-blue-600">
        Add
      </Button>
      <Modal
        title="Add category"
        open={isAddModalOpen}
        onOk={() => formCategory.submit()}
        onCancel={handleCancel}
      >
        <Form
          form={formCategory}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
        >
          <Form.Item
            name="nameCat"
            label="Name category"
            rules={[
              {
                required: true,
                message: "Please input name!",
                whitespace: true,
              },
            ]}
            autoFocus={true}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateCategoryd;
