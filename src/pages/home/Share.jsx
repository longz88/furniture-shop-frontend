import HeaderTitle from "../../components/HeaderTitle";

const Share = () => {
  return (
    <div className="mb-20 text-center">
      <HeaderTitle title={"#DecorNộiThất"} />
      <p className="mt-4 text-xl font-semibold text-[var(--gray2)]">
        Chia sẻ thiết kế của bạn
      </p>
      <img
        className="mt-10 w-full object-cover"
        src="https://abfurnishings.in/wp-content/uploads/2022/07/Untitled-design-2022-07-31T220611.782-min-2048x1025.png"
        alt=""
      />
    </div>
  );
};

export default Share;
