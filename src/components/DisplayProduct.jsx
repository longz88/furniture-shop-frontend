/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import image from "../assets/imgProduct/sofa2.webp";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/productSlice";

const DisplayProduct = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  return (
    <div className="mt-20">
      <div className=" w-full bg-[var(--primary-hover)]">
        <div className=" mx-auto flex h-[100px] max-w-screen-xl items-center gap-4">
          <p className="font-normal text-[var(--gray6)]">Home</p> &#62;{" "}
          <p className="font-normal text-[var(--gray6)]">Shop</p> &#62;{" "}
          <p
            className="ml-9 mt-1 text-base font-normal before:relative 
              before:right-6 before:inline-block before:h-8 before:w-[2px]
              before:bg-[var(--gray6)] before:align-middle"
          >
            {product.namePro}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-screen-xl grid-cols-2 gap-[100px]">
        <div className="grid grid-cols-5 gap-8">
          <div className="flex flex-col gap-8">
            <img
              className="rounded-lg object-cover"
              src={product.image}
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src={product.image}
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src={product.image}
              alt=""
            />
            <img
              className="rounded-lg object-cover"
              src={product.image}
              alt=""
            />
          </div>
          <img
            className="col-span-4 rounded-lg object-cover"
            src={product.image}
            alt=""
          />
        </div>
        <div className="">
          <div className=" border-b border-[#D9D9D9]">
            <h1 className=" text-5xl font-normal">{product.namePro}</h1>
            <p className="mt-3 text-2xl font-medium text-[var(--gray6)]">
              {product.priceNew} &#8363;
            </p>
            <div className="my-4 flex items-center">
              <div className="mr-11 flex items-center gap-1">
                <FaStar color="#FFC700" size={18} />
                <FaStar color="#FFC700" size={18} />
                <FaStar color="#FFC700" size={18} />
                <FaStar color="#FFC700" size={18} />
                <FaStarHalf color="#FFC700" size={18} />
              </div>
              <p
                className="text-sm font-normal leading-8 text-[var(--gray6)] before:relative before:right-6 
                before:inline-block before:h-7 before:w-[1px] before:bg-[var(--gray6)] before:align-middle"
              >
                5 Customer Review
              </p>
            </div>

            <p className="w-9/12 text-sm font-normal">{product.description}</p>

            <div className="my-5">
              <p className="text-sm font-normal text-[var(--gray6)]">Size</p>
              <div className="mt-3 flex items-center gap-4">
                <p className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[var(--primary-color)] text-sm font-normal text-white hover:bg-[var(--primary-color)] hover:text-white">
                  XS
                </p>
                <p className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[var(--primary-hover)] text-sm font-normal hover:bg-[var(--primary-color)] hover:text-white">
                  L
                </p>
                <p className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-[var(--primary-hover)] text-sm font-normal hover:bg-[var(--primary-color)] hover:text-white ">
                  XL
                </p>
              </div>
            </div>

            <div className="">
              <p className="text-sm font-normal text-[var(--gray6)]">Color</p>
              <div className="mt-3 flex items-center gap-4">
                <p className="h-8 w-8 rounded-full bg-[#816DFA]"></p>
                <p className="h-8 w-8 rounded-full bg-black"></p>
                <p className="h-8 w-8 rounded-full bg-[var(--primary-color)]"></p>
              </div>
            </div>

            <div className="mb-16 mt-8 flex items-center gap-3">
              <div className="flex items-center gap-8 rounded-xl border border-solid border-black px-3 py-4 text-xl font-normal">
                <button
                  onClick={() => setCount(count - 1)}
                  disabled={count === 1}
                >
                  -
                </button>
                <p className="flex w-5 items-center justify-center">{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
              <button className="rounded-xl border border-solid border-black px-12 py-4 text-xl font-normal duration-300 hover:bg-black hover:text-white">
                Add To Cart
              </button>
            </div>
          </div>

          <div className="mb-16 mt-10 grid grid-cols-5 text-base font-normal text-[var(--gray6)]">
            <ul className="flex flex-col gap-3">
              <li>SKU</li>
              <li>Category</li>
              <li>Material</li>
              <li>Dimension</li>
            </ul>
            <ul className="col-span-4 flex flex-col gap-3">
              <li>: {product.SKU}</li>
              <li>: Sofa</li>
              <li>: {product.material}</li>
              <li>: {product.dimension}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
