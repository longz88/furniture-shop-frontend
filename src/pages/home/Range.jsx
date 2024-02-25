import { Link } from "react-router-dom";
import HeaderTitle from "../../components/HeaderTitle";

const Range = () => {
  return (
    <div className="pb-10">
      <HeaderTitle title={"Không gian nội thất"} />

      <div className=" mt-16 flex items-center justify-center gap-6">
        <Link>
          <div className="">
            <img
              className="h-[480px] w-[380px] rounded-lg object-cover duration-300 hover:scale-105"
              src="https://i.pinimg.com/736x/39/d5/9f/39d59f51b73a143c741afe2687a5baf4.jpg"
              alt=""
            />
            <p className="mt-8 text-center text-2xl font-semibold text-[var(--color)]">
              Phòng khách
            </p>
          </div>
        </Link>

        <Link>
          <div className="">
            <img
              className="h-[480px] w-[380px] rounded-lg object-cover duration-300 hover:scale-105"
              src="https://i.pinimg.com/564x/07/1a/a1/071aa1a33967120c1becb60bfe86c731.jpg"
              alt=""
            />
            <p className="mt-8 text-center text-2xl font-semibold text-[var(--color)]">
              Phòng ăn
            </p>
          </div>
        </Link>

        <Link>
          <div className="">
            <img
              className="h-[480px] w-[380px] rounded-lg object-cover duration-300 hover:scale-105"
              src="https://i.pinimg.com/564x/fd/07/0b/fd070b034939ddc860e158b8ca98651e.jpg"
              alt=""
            />
            <p className="mt-8 text-center text-2xl font-semibold text-[var(--color)]">
              Phòng ngủ
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Range;
