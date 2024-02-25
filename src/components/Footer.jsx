/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logoFooter from "../assets/logo/logo-3.png";
import { BsStars } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/features/page/activePageSlice";

const Footer = () => {
  const dispatch = useDispatch();
  // const { actPage } = useSelector((state) => state.activePage);

  return (
    <div className="mt-24 border-t border-gray-200">
      <div className="mx-auto grid max-w-screen-xl grid-cols-7 border-b border-gray-200 py-12">
        <div className="col-span-2">
          <Link to="/">
            <img
              onClick={() => dispatch(setActivePage("Home"))}
              className="mb-10 h-10 w-32 object-cover"
              src={logoFooter}
              alt=""
            />
          </Link>
          <p className="text-base font-normal text-[var(--gray5)]">Hà Nội</p>
        </div>

        <div className="flex flex-col gap-12 text-base font-medium">
          <p className="text-[var(--gray5)] ">Liên kết</p>
          <Link to="/">
            <p
              className="duration-300 hover:text-[var(--primary-color)]"
              onClick={() => dispatch(setActivePage("Home"))}
            >
              Home
            </p>
          </Link>
          <Link to="/shop">
            <p
              className="duration-300 hover:text-[var(--primary-color)]"
              onClick={() => dispatch(setActivePage("Shop"))}
            >
              Shop
            </p>
          </Link>
          <Link to="/about">
            <p
              className="duration-300 hover:text-[var(--primary-color)]"
              onClick={() => dispatch(setActivePage("About"))}
            >
              About
            </p>
          </Link>
          <Link to="/contact">
            <p
              className="duration-300 hover:text-[var(--primary-color)]"
              onClick={() => dispatch(setActivePage("Contact"))}
            >
              Contact
            </p>
          </Link>
        </div>
        <div className="col-span-2 flex flex-col gap-12 text-base font-medium">
          <p className="text-[var(--gray5)] ">Chăm sóc khách hàng</p>
          <Link to="/">
            <p className="duration-300 hover:text-[var(--primary-color)]">
              Thanh toán
            </p>
          </Link>
          <Link to="/">
            <p className="duration-300 hover:text-[var(--primary-color)]">
              Đổi trả
            </p>
          </Link>
          <Link to="/">
            <p className="duration-300 hover:text-[var(--primary-color)]">
              Chính sách bảo mật
            </p>
          </Link>
          <Link to="/manage">
            <p
              className="flex items-center gap-2 duration-300 hover:text-[var(--primary-color)]"
              onClick={() => dispatch(setActivePage(""))}
            >
              Manage
              <BsStars />
            </p>
          </Link>
        </div>
        <div className="col-span-2 flex flex-col gap-12 text-base font-medium">
          <p className="text-[var(--gray5)] ">Newsletter</p>
          <div className="flex items-center gap-3">
            <input
              className="border-b border-black pb-1 pr-10 outline-none"
              type="text"
              placeholder="Nhập email của bạn"
            />
            <button className="border-b  border-black pb-1 duration-300 hover:text-[var(--primary-color)]">
              ĐĂNG KÝ
            </button>
          </div>
        </div>
      </div>

      <p className="mx-auto my-9 max-w-screen-xl">
        &#169; Edit by{" "}
        <span className="text-[var(--primary-color)]">Chu Long</span> - 2024
      </p>
    </div>
  );
};

export default Footer;
