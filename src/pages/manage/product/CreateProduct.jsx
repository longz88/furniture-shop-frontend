/* eslint-disable no-unused-vars */
import {
  Button,
  Modal,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useState } from "react";
import { postAProduct } from "../../../services/product/productApi";
import { useSelector } from "react-redux";

const { Option } = Select;

const CreateProduct = () => {
  // ========= module ===========
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const { categories } = useSelector((state) => state.categories);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const data = values;
    postAProduct(data);
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <Button type="primary" onClick={showModal} className="mb-4 bg-blue-600">
        Add
      </Button>
      <Modal
        title="Add product"
        open={isModalOpen}
        onOk={() => form.submit()}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
        >
          <Row gutter={10}>
            <Col span={12}>
              {" "}
              <Form.Item
                name="namePro"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please input name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please input title!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              {" "}
              <Form.Item
                name="image"
                label="Image"
                rules={[
                  {
                    required: true,
                    message: "Please input image!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="sale" label="Sale">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="priceNew"
                label="Price New"
                rules={[
                  {
                    required: true,
                    message: "Please input price!",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="priceOld" label="Price Old">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="SKU"
                label="SKU"
                rules={[
                  {
                    required: true,
                    message: "Please input SKU!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                    message: "Please select category!",
                  },
                ]}
              >
                <Select>
                  {categories.map((category) => (
                    <Option key={category._id} value={category._id}>
                      {category.name || category.nameCat}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item
                name="material"
                label="Material"
                rules={[
                  {
                    required: true,
                    message: "Please input material!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dimension"
                label="Dimension"
                rules={[
                  {
                    required: true,
                    message: "Please input dimension!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input.TextArea showCount />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateProduct;
