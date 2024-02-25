/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BoxSearch = (props) => {
  const { inputSearch } = props;
  const { products } = useSelector((state) => state.products);

  return (
    <>
      {inputSearch !== "" && (
        <div
          className="absolute left-0 top-[120%] max-h-[50vh] w-[130%]
            overflow-y-auto rounded-lg bg-white px-2 py-2
            shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]
          "
        >
          <ul className="flex flex-col gap-3 ">
            {products
              .filter((item) => {
                return (
                  item &&
                  item.namePro &&
                  item.namePro.toLowerCase().includes(inputSearch)
                );
              })
              .map((product) => (
                <Link to={`/products/${product._id}`} key={product._id}>
                  <li
                    className="flex items-center gap-4 rounded-md
                      px-2 py-2 duration-300 hover:bg-[var(--gray5)]"
                  >
                    <img
                      className="h-10 w-10 rounded-md object-cover"
                      src={product.image}
                      alt=""
                    />
                    <p>{product.namePro}</p>
                    <p className="ml-auto">
                      {product.priceNew
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      &#8363;
                    </p>
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BoxSearch;
