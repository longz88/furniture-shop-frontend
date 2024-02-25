/* eslint-disable no-unused-vars */
import { useState } from "react";
import BannerPage from "../../components/BannerPage";
import FormInput from "../../components/FormInput";
import bannerFooter from "../../assets/banner/bannerFooter.jpg";
import { useDispatch, useSelector } from "react-redux";

const CheckOut = () => {
  const [active, setActive] = useState("bank");
  const dispatch = useDispatch();
  const { cartTotalAmount, listProducts } = useSelector((state) => state.cart);

  return (
    <div className="">
      <BannerPage title={"Check Out"} />

      <div className=" mx-auto mt-14 grid max-w-screen-xl grid-cols-2 gap-7">
        <div className=" px-16 pt-9">
          <h1 className=" mb-9 text-4xl font-semibold">Thông tin giao hàng</h1>
          <div className="flex flex-col gap-9">
            <div className="flex items-center gap-8">
              <FormInput name="Họ" title="firstName" />
              <FormInput name="Tên" title="lastName" />
            </div>
            <FormInput name="Tên công ty (Không bắt buộc)" title="company" />
            <FormInput
              name="Tỉnh"
              title="province"
              type="select"
              value={["HN", "HCM", "ĐN", "TB"]}
            />
            <FormInput name="Thành phố" title="city" />
            <FormInput name="Đường" title="street" />

            <FormInput name="Số điện thoại" title="phone" />
            <FormInput name="Địa chỉ email" title="email" type="email" />
            <FormInput name="" title="info" placeholder="Thông tin liên quan" />
          </div>
        </div>

        <div className="px-10 py-20">
          <div className="mb-5 flex flex-col gap-4 ">
            <p className=" text-2xl font-medium">Sản phẩm</p>

            <ul className="flex flex-col gap-3">
              {listProducts.length === 0 ? (
                <p className="text-base font-normal text-[--gray6]">
                  Chưa có sản phẩm nào
                </p>
              ) : (
                <>
                  {listProducts.map((product) => (
                    <li
                      key={product._id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-6">
                        <p className="text-base font-normal text-[--gray6]">
                          {product.namePro}
                        </p>{" "}
                        x <p className="font-medium">{product.cartQuantity}</p>
                      </div>
                      <p className=" font-light">
                        {(product.priceNew * product.cartQuantity)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        &#8363;
                      </p>
                    </li>
                  ))}
                </>
              )}
            </ul>

            <div className="flex items-center justify-between">
              <p className="text-base font-normal">Vận chuyển</p>
              <p className="font-light">Liên hệ phí vận chuyển sau</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-base font-normal">Thành tiền</p>
              <p className="font-light">
                {cartTotalAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                &#8363;
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-base font-normal">Tổng</p>
              <p className="text-2xl font-bold text-[var(--primary-color)]">
                {cartTotalAmount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                &#8363;
              </p>
            </div>
          </div>
          <hr />
          <ul className="pt-6">
            <div className="flex flex-col">
              <div onClick={() => setActive("bank")} className="mb-3">
                <input
                  className=" accent-black"
                  type="radio"
                  name="transfer"
                  id="bank"
                  defaultChecked
                />
                <label
                  className="ml-4 cursor-pointer text-base font-normal"
                  htmlFor="bank"
                >
                  Chuyển khoản ngân hàng
                </label>
              </div>
              {active === "bank" && (
                <div className="mb-6 text-center text-base font-light text-[--gray6]">
                  <p className="mb-4">
                    Quý khách vui lòng chuyển khoản trước số tiền cần thanh
                    toán, sau đó chúng tôi tiến hành giao hàng theo thỏa thuận
                    hoặc hợp đồng với Quý khách.
                  </p>
                  Thông tin tài khoản:
                  <p className=" font-semibold">
                    1027565*** - Vietnambank
                    <br />
                    LongDecor.
                  </p>
                  <br />
                  Nội dung chuyển khoản : Ghi rõ Số điện thoại hoặc Số đơn hàng
                </div>
              )}

              <div onClick={() => setActive("walk")} className="mb-3">
                <input
                  className=" accent-black"
                  type="radio"
                  name="transfer"
                  id="walk"
                />
                <label
                  className="ml-4 cursor-pointer text-base font-normal"
                  htmlFor="walk"
                >
                  Thanh toán khi nhận hàng
                </label>
              </div>
              {active === "walk" && (
                <p className="mb-6 text-base font-light text-[--gray6]">
                  Thanh toán bằng tiền mặt khi nhận hàng.
                </p>
              )}

              <hr />
              <div className="my-4 font-light"></div>
              <div className="mb-10 flex items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-2 cursor-pointer accent-black"
                />
                <p>
                  {" "}
                  Tôi đã đọc và đồng ý điều kiện đổi trả hàng, giao hàng, chính
                  sách bảo mật, điều khoản dịch vụ mua hàng online.
                </p>
              </div>

              <button
                className="mx-auto rounded-xl border border-black px-24 py-4 text-xl
                font-normal tracking-wider duration-300 hover:bg-black hover:text-white"
              >
                Đặt hàng
              </button>
            </div>
          </ul>
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

export default CheckOut;
