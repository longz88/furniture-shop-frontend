import { BsBagX } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartTotal,
  removeProductInCart,
  showCart,
} from "../redux/features/cart/cartSlice";
import { Empty } from "antd";
import { useEffect } from "react";

const TabCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { isShow, listProducts, cartTotalAmount } = cart;

  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(getCartTotal());
  }, [dispatch, cart]);

  return (
    <div
      className={`${!isShow && "hidden"} fixed bottom-0 left-0 right-0 top-0 z-20 `}
    >
      <div
        onClick={() => dispatch(showCart())}
        className="absolute h-full w-full bg-[#00000033]"
      ></div>
      <div className="absolute right-0 top-0 h-auto w-[420px] rounded-bl-xl bg-white">
        <div className="p-7">
          <div className="flex items-start justify-between ">
            <h1 className="w-[280px] border-b border-[var(--gray6)] pb-7 text-2xl font-semibold">
              Giỏ hàng
            </h1>
            <BsBagX
              size={22}
              className="mt-2 cursor-pointer"
              color="var(--gray6)"
              onClick={() => dispatch(showCart())}
            />
          </div>
          <ul className="no-scrollbar mt-10 max-h-[42vh] overflow-y-auto">
            {listProducts.length === 0 ? (
              <Empty
                description="Chưa có sản phẩm nào"
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            ) : (
              listProducts.map((product) => (
                <li key={product._id} className="mb-5 flex items-center">
                  <Link>
                    <img
                      className="mr-8 h-[70px] w-[70px] rounded-lg object-cover"
                      src={product.image}
                      alt="image product"
                    />
                  </Link>
                  <div className=" text-xs font-medium">
                    <p className="mb-2 text-base font-normal">
                      {product.namePro}
                    </p>
                    <div className="flex gap-3">
                      <p>{product.cartQuantity}</p> x{" "}
                      <p className="text-[var(--primary-color)]">
                        {product.priceNew
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        &#8363;
                      </p>
                    </div>
                  </div>
                  <IoIosCloseCircle
                    onClick={() => dispatch(removeProductInCart(product))}
                    className="ml-auto cursor-pointer text-[var(--gray6)]"
                    size={22}
                  />
                </li>
              ))
            )}
          </ul>
          <div className="mt-6 flex items-center gap-28">
            <p className="text-base font-normal">Thành tiền</p>
            <p className="text-base font-semibold text-[var(--primary-color)]">
              {cartTotalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              &#8363;
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--gray6)] p-7 text-center">
          <Link to="/cart">
            <button
              onClick={() => dispatch(showCart())}
              className="mr-6 rounded-full border border-solid border-black px-9 py-2 text-xs font-normal
            duration-300 hover:bg-black hover:text-white
          "
            >
              Xem giỏ hàng
            </button>
          </Link>
          <Link to="/checkOut">
            <button
              onClick={() => dispatch(showCart())}
              className="rounded-full border border-solid border-black px-9 py-2 text-xs font-normal
            duration-300 hover:bg-black hover:text-white
          "
            >
              Thanh toán
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCart;
