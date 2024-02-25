/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo-3.png";
import { LuSearch, LuShoppingCart, LuHeart } from "react-icons/lu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../redux/features/cart/cartSlice";
import { Badge } from "antd";
import BoxSearch from "./BoxSearch";
import { setActivePage } from "../redux/features/page/activePageSlice";

const Header = (props) => {
  const { show } = props;
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { actPage } = useSelector((state) => state.activePage);

  const menu = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Shop",
      link: "shop",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  const [openSearch, setOpenSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div
      className={`${
        !show && "hidden"
      } fixed top-0 z-10 inline-flex h-20 w-screen items-center
      bg-white px-20`}
    >
      <Link to="/">
        <img
          onClick={() => dispatch(setActivePage("Home"))}
          className="h-10 w-40 object-cover"
          src={logo}
          alt="logo"
        />
      </Link>

      <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-20">
        {menu.map((item, index) => (
          <Link to={`/${item.link}`} key={index}>
            <li
              onClick={() => {
                dispatch(setActivePage(item.name));
                window.scrollTo(0, 0);
              }}
              className={`${actPage === item.name && "text-[var(--primary-color)] duration-300"}
              text-lg font-medium duration-300 hover:text-[var(--primary-color)]`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <ul className="ml-auto flex items-center gap-10">
        <li>
          <div
            className={`${openSearch && "bg-[var(--gray5)]"} relative flex items-center
            gap-2 rounded-lg px-4 py-2 duration-500 ease-in`}
          >
            <input
              type="text"
              className={`${!openSearch && "hidden"} border-none bg-transparent outline-none`}
              placeholder="Tìm sản phẩm"
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <LuSearch
              size={24}
              className="cursor-pointer "
              onClick={() => setOpenSearch(!openSearch)}
            />
            <BoxSearch inputSearch={inputSearch} />
          </div>
        </li>

        <li className="cursor-pointer" onClick={() => dispatch(showCart())}>
          <Badge count={cartTotalQuantity}>
            <LuShoppingCart size={24} />
          </Badge>
        </li>
      </ul>
    </div>
  );
};

export default Header;
