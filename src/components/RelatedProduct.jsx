import Product from "./Product";

const data = [
  {
    id: 1,
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/463/122/products/ghe-sofa-future-phong-cach-hien-dai-3.jpg?v=1673174432377",
    name: "Syltherine",
    title: "Stylish cafe chair",
    priceNew: "2.500.000",
    priceOld: "3.500.000",
  },
  {
    id: 2,
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/463/122/products/ghe-sofa-future-phong-cach-hien-dai-3.jpg?v=1673174432377",
    name: "Syltherine",
    title: "Stylish cafe chair",
    priceNew: "2.500.000",
    priceOld: "3.500.000",
  },
  {
    id: 3,
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/463/122/products/ghe-sofa-future-phong-cach-hien-dai-3.jpg?v=1673174432377",
    name: "Syltherine",
    title: "Stylish cafe chair",
    priceNew: "2.500.000",
    priceOld: "3.500.000",
  },
  {
    id: 4,
    img: "https://bizweb.dktcdn.net/thumb/1024x1024/100/463/122/products/ghe-sofa-future-phong-cach-hien-dai-3.jpg?v=1673174432377",
    name: "Syltherine",
    title: "Stylish cafe chair",
    priceNew: "2.500.000",
    priceOld: "3.500.000",
  },
];

const RelatedProduct = () => {
  return (
    <div className="mt-14 text-center">
      <h1 className="text-4xl font-medium">Related Products</h1>
      <div className="mx-auto mt-8 grid max-w-screen-xl grid-cols-4 gap-8">
        {data.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <button
        className="mb-24 mt-11 border border-solid border-[var(--primary-color)] px-20 py-3 
        text-base font-semibold text-[var(--primary-color)] duration-300 hover:bg-[var(--primary-color)] hover:text-white
      "
      >
        Show More
      </button>
    </div>
  );
};

export default RelatedProduct;
