/* eslint-disable no-unused-vars */
import BannerPage from "../../components/BannerPage";
import bannerFooter from "../../assets/banner/bannerFooter.jpg";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Empty } from "antd";
import {
  addProductToCart,
  clearCart,
  decreaseProductInCart,
  getCartTotal,
  removeProductInCart,
} from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { listProducts, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="">
      <BannerPage title="Cart" />

      <div className="mx-auto my-20 grid max-w-screen-xl grid-cols-3 gap-8">
        <div className="col-span-2">
          <table className="w-full">
            <tbody>
              <tr className=" h-[55px] bg-[var(--primary-hover)] text-base font-medium">
                <th></th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th></th>
              </tr>
              {listProducts.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <Empty
                      style={{ marginTop: "80px" }}
                      description="Chưa có sản phẩm nào"
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                    />
                  </td>
                </tr>
              ) : (
                <>
                  {listProducts?.map((product) => (
                    <tr
                      key={product._id}
                      className=" h-[160px] text-center text-base font-normal"
                    >
                      <td>
                        <img
                          className="h-[100px] w-[100px] rounded-lg object-cover"
                          src={product.image}
                          alt=""
                        />
                      </td>
                      <td className=" text-[var(--gray6)]">
                        {product.namePro}
                      </td>
                      <td className="w-30 text-[var(--gray6)]">
                        {product.priceNew
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        &#8363;
                      </td>
                      <td className="">
                        <div className="flex items-center justify-center">
                          <button
                            className="mr-2 p-2 text-xl"
                            onClick={() =>
                              dispatch(decreaseProductInCart(product))
                            }
                          >
                            -
                          </button>
                          <p className="flex h-10 w-10 items-center justify-center rounded-lg border">
                            {product.cartQuantity}
                          </p>
                          <button
                            onClick={() => dispatch(addProductToCart(product))}
                            className="ml-2 p-2 text-xl"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="w-[120px]">
                        {(product.priceNew * product.cartQuantity)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        &#8363;
                      </td>
                      <td className="">
                        <FaTrash
                          onClick={() => dispatch(removeProductInCart(product))}
                          size={20}
                          color="var(--primary-color)"
                          className="ml-5 mr-3 cursor-pointer duration-500"
                        />
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
          {listProducts.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-3 rounded-lg border border-[var(--primary-color)] px-10 py-2 
          font-normal text-[var(--primary-color)] duration-300
          hover:bg-[var(--primary-color)] hover:text-white"
            >
              Clear Cart
            </button>
          )}
        </div>
        <div className="h-max w-full bg-[var(--primary-hover)] pb-20 pt-14 text-center">
          <h1 className="mb-16 text-3xl font-semibold">Tổng đơn hàng</h1>
          <div className="mx-auto flex w-[240px] items-center justify-between">
            <p className=" font-medium">Thành tiền</p>
            <p className=" font-normal text-[var(--gray6)]">
              {cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              &#8363;
            </p>
          </div>
          <div className="mx-auto mb-10 mt-8 flex w-[240px] items-center justify-between">
            <p className=" font-medium">Tổng tiền</p>
            <p className="text-xl font-medium text-[var(--primary-color)]">
              {cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              &#8363;
            </p>
          </div>
          <Link to="/checkOut">
            <button
              className="rounded-xl border border-solid border-black px-10 py-3 text-xl
              font-normal duration-300 hover:bg-black hover:text-white"
            >
              Thanh toán
            </button>
          </Link>
        </div>
      </div>

      <img
        className="mt-24 h-[250px] w-full object-cover"
        src={bannerFooter}
        alt=""
      />
    </div>
  );
};

export default Cart;
