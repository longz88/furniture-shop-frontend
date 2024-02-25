/* eslint-disable no-unused-vars */
import BannerPage from "../../components/BannerPage";
import Product from "../../components/Product";
import { ConfigProvider, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SelectBox from "../../components/SelectBox";

const dataSort = ["Bán chạy", "Mới nhất", "Giá: Tăng dần", "Giá: Giảm dần"];

const Shop = () => {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;
  const totalPages = Math.ceil(products.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = currentPage * blogsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <BannerPage title={"Shop"} />

      <div className="bg-[#F9F1E7]">
        <div className="mx-auto flex h-[80px] max-w-screen-xl items-center justify-between">
          <p>
            Hiển thị {startIndex} – {endIndex} trong {products.length} kết quả
          </p>
          <div className="flex items-center gap-8">
            <SelectBox values={categories} titleDefault="Phân loại" />
            <SelectBox values={dataSort} titleDefault="Sort" />
          </div>
        </div>
      </div>

      <div className="">
        <div className="mx-auto mt-16 grid max-w-screen-xl grid-cols-4 gap-8">
          {paginatedProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center gap-10">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer rounded-lg bg-[#F9F1E7] px-6 py-3 text-xl
            font-light duration-300 hover:bg-[var(--primary-color)] hover:text-white"
        >
          Prev
        </button>
        <p
          className="cursor-pointer rounded-lg bg-[var(--primary-color)] px-6 py-3 text-xl
          font-light text-white duration-300 hover:bg-[var(--primary-color)] hover:text-white"
        >
          {currentPage} / {totalPages}
        </p>
        <button
          disabled={currentPage === totalPages}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer rounded-lg bg-[#F9F1E7] px-6 py-3 text-xl
            font-light duration-300 hover:bg-[var(--primary-color)] hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
