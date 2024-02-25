const Banner = () => {
  return (
    <div className="">
      <div className="flex h-screen items-center bg-bg-banner bg-cover bg-center bg-no-repeat">
        <div className=" ml-auto  mr-14 w-[640px] rounded-lg bg-[#fff3e3] p-9">
          <p className="mb-1 text-base font-medium tracking-widest text-[var(--color)]">
            Hàng mới về
          </p>
          <h1 className="mb-4 pr-20 text-5xl font-bold leading-tight text-[var(--primary-color)]">
            Khám phá bộ sưu tập mới của chúng tôi
          </h1>
          <p className="mb-12 pr-4 text-lg font-medium leading-6 text-[var(--color)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[var(--primary-color)] px-16 py-6 text-base font-bold text-white">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
