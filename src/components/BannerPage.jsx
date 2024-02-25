/* eslint-disable react/prop-types */
import logoBanner from "../assets/banner/logo-banner.png";
import banner from "../assets/banner/banner-img.png";

const BannerPage = (props) => {
  const { title } = props;

  return (
    <div className="relative mt-20">
      <img
        className="mx-auto h-[312px] w-full object-cover"
        src={banner}
        alt=""
      />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <img className="h-12 w-24 object-cover " src={logoBanner} alt="" />
        <h1 className="text-5xl font-semibold">{title}</h1>
        <div className="mt-4 flex items-center gap-4">
          <p className="text-lg font-medium">Home</p> &#62;{" "}
          <p className="text-lg font-normal text-[var(--gray1)]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
