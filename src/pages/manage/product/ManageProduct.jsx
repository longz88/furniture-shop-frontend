/* eslint-disable no-unused-vars */
import { Table, Button, Flex, Modal, Popconfirm, message } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import { deleteAProduct } from "../../../services/product/productApi";

// const columns = [
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
// ];

const ManageProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDelete, setDataDelete] = useState("");

  const confirm = () => {
    message.success(`Deleted ${dataDelete.namePro}`);
    deleteAProduct(dataDelete._id);
  };

  const products = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          className="h-12 w-12 rounded-md object-cover"
          src={image}
          alt="image"
        />
      ),
    },
    {
      title: "Name Product",
      dataIndex: "namePro",
      width: "25%",
    },
    {
      title: "Category",
      dataIndex: "category",
      width: "20%",
    },
    {
      title: "Price New",
      dataIndex: "priceNew",
      width: "10%",
      render: (priceNew) => (
        <p>{priceNew.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      ),
    },
    {
      title: "Price Old",
      dataIndex: "priceOld",
      width: "10%",
      render: (priceOld) => (
        <p>{priceOld?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (product) => (
        <Flex wrap="wrap" gap="small">
          <Button
            onClick={() => {
              setIsUpdateModalOpen(true);
              setDataUpdate(product);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete product"
            description={`Are you sure to delete this product?`}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              onClick={() => {
                setDataDelete(product);
              }}
            >
              Delete
            </Button>
          </Popconfirm>
        </Flex>
      ),
    },
  ];

  const [data, setData] = useState();
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 6,
    },
  });

  useEffect(() => {
    setData(products.products);
  }, [products]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div className="">
      <CreateProduct />

      <Table
        columns={columns}
        dataSource={data}
        pagination={tableParams.pagination}
        rowKey={(item) => item._id}
        onChange={handleTableChange}
      />
      <UpdateProduct
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
    </div>
  );
};

export default ManageProduct;
