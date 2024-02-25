/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import HeaderTitle from "../../components/HeaderTitle";
import Product from "../../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productsSlice";
import { Empty, Spin } from "antd";
import { Link } from "react-router-dom";

const ListProducts = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector(
    (state) => state.products,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = currentPage * blogsPerPage;
  const paginatedBlogs = products.slice(startIndex, endIndex);

  return (
    <div className="relative">
      <HeaderTitle title={"Sản phẩm mới"} />

      {isLoading ? (
        <Spin />
      ) : isError ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No data" />
      ) : (
        <>
          <div className="mx-auto mt-16 grid max-w-screen-xl grid-cols-4 gap-8">
            {paginatedBlogs.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <Link to="/shop" className="">
            <button
              className="absolute left-2/4 top-full -translate-x-2/4 translate-y-8 
              border border-solid border-[var(--primary-color)] px-20
              py-3 text-base font-semibold text-[var(--primary-color)] duration-300
              hover:bg-[var(--primary-color)] hover:text-white"
            >
              Xem thêm
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ListProducts;
