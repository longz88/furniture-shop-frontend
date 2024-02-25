/* eslint-disable no-unused-vars */
import { Table, Button, Flex, Modal, Popconfirm, message } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteACategory } from "../../../services/category/categoryApi";
import CreateCategory from "./CreateCategory";
import UpdateProduct from "./UpdateCategory";

const ManageCategory = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDelete, setDataDelete] = useState("");

  const confirm = () => {
    message.success(`Deleted ${dataDelete.nameCat}`);
    deleteACategory(dataDelete._id);
  };
  // const cancel = () => {
  //   message.error("No delete");
  // };

  const { categories } = useSelector((state) => state.categories);

  const columns = [
    {
      title: "Name Category",
      dataIndex: "nameCat",
    },
    {
      title: "Action",
      key: "action",
      render: (category) => (
        <Flex wrap="wrap" gap="small">
          <Button
            onClick={() => {
              setIsUpdateModalOpen(true);
              setDataUpdate(category);
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Delete category"
            description={`Are you sure to delete ${dataDelete.nameCat}?`}
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              onClick={() => {
                setDataDelete(category);
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
    setData(categories);
  }, [categories]);

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
      <CreateCategory />

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

export default ManageCategory;
