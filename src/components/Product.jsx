/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { FaCircleInfo } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart, showCart } from "../redux/features/cart/cartSlice";

const Product = (props) => {
  const { product } = props;
  const { _id, image, namePro, title, priceNew, priceOld, sale } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(showCart());
    dispatch(addProductToCart(product));
  };

  return (
    <div className="group relative overflow-hidden rounded">
      <img
        className="h-[300px] w-full rounded-t border object-cover"
        src={image}
        alt={namePro}
      />
      {sale && (
        <div
          className={`absolute right-6 top-6 flex h-12 w-12 items-center
          justify-center rounded-full ${sale === "New" ? "bg-[#2EC1AC]" : "bg-[#E97171]"} `}
        >
          <p className="font-medium text-white">{sale}</p>
        </div>
      )}

      <div className="flex flex-col items-start bg-[#F4F5F7] px-4 pb-8 pt-4">
        <p
          className="w-[260px] overflow-hidden text-ellipsis whitespace-nowrap
          text-2xl font-semibold text-[var(--gray1)]"
        >
          {namePro}
        </p>
        <p
          className="my-2 w-[240px] overflow-hidden text-ellipsis
        whitespace-nowrap text-base font-medium text-[var(--gray3)]"
        >
          {title}
        </p>
        <div className="flex items-center">
          <p className="mr-4 text-xl font-semibold">
            {priceNew.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} &#8363;
          </p>
          {priceOld ? (
            <p className="text-base font-normal text-[var(--gray4)] line-through">
              {priceOld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              &#8363;
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        className="absolute left-0 top-0 flex h-0 w-full flex-col items-center
        justify-center bg-[var(--gray-hover)] opacity-0 duration-500 ease-linear
        group-hover:h-full group-hover:opacity-100 "
      >
        <button
          onClick={handleAddToCart}
          className="mb-6 bg-white px-10 py-3 text-base font-semibold text-[var(--primary-color)]"
        >
          Thêm vào giỏ hàng
        </button>

        <Link to={`/products/${_id}`}>
          <div className="flex items-center gap-1 text-white">
            <FaCircleInfo size={14} />
            <p className="text-base font-semibold">Thông tin</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
