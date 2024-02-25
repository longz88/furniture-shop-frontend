/* eslint-disable no-unused-vars */
import BannerPage from "../../components/BannerPage";
import { LuSofa } from "react-icons/lu";
import { TbCategory2 } from "react-icons/tb";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Manager = () => {
  const [active, setActive] = useState("product");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="">
      <BannerPage title="Manage" />

      <div className="my-20 grid w-full grid-cols-6">
        <div className="border-r">
          <ul className="p-3 text-base font-medium">
            <Link to="/manage">
              <li
                onClick={() => setActive("product")}
                className={`${active === "category" && "text-[var(--gray6)]"} flex cursor-pointer
              items-center gap-2 rounded-lg p-3 text-base font-medium duration-300 hover:bg-[var(--gray5)]`}
              >
                <LuSofa size={18} />
                <p>Product</p>
              </li>
            </Link>

            <Link to="/manage/category">
              <li
                onClick={() => setActive("category")}
                className={`${active === "product" && "text-[var(--gray6)]"} flex cursor-pointer
              items-center gap-2 rounded-lg p-3 text-base font-medium duration-300 hover:bg-[var(--gray5)]`}
              >
                <TbCategory2 size={18} />
                <p>Category</p>
              </li>
            </Link>
          </ul>
        </div>

        <div className="col-span-5 px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Manager;
