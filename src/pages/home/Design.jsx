/* eslint-disable no-unused-vars */
import { useState } from "react";
import { LuArrowRight } from "react-icons/lu";

const listTitle = [
  {
    image:
      "https://i.pinimg.com/736x/39/d5/9f/39d59f51b73a143c741afe2687a5baf4.jpg",
    title: "Phòng khách",
    des: "Tươi mới",
  },
  {
    image:
      "https://i.pinimg.com/736x/7d/b7/3f/7db73f7ca73e2f33de5f426f2ae25453.jpg",
    title: "Phòng ăn",
    des: "Đầm ấm",
  },
  {
    image:
      "https://i.pinimg.com/736x/55/83/f3/5583f34498babf7bb8d838c98d5f4ece.jpg",
    title: "Phòng ngủ",
    des: "Êm ái",
  },
  {
    image:
      "https://i.pinimg.com/564x/04/5c/d3/045cd3172808a2c52fe9e0e2eae7876b.jpg",
    title: "Phòng làm việc",
    des: "Thoải mái",
  },
];

const Design = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastIndex = currentIndex === listTitle.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="my-40 flex h-[670px] items-center bg-[#FCF8F3]">
      <div className="ml-24 mr-11 w-[420px]">
        <h1 className="text-4xl font-bold">50+ Ý tưởng không gian sống</h1>
        <p className="mb-6 mt-2 text-base font-medium text-[var(--gray2)]">
          Nhà thiết kế của chúng tôi đã tạo ra rất nhiều mẫu phòng đẹp để truyền
          cảm hứng cho bạn
        </p>
        <button className="font-semibold] bg-[var(--primary-color)] px-9 py-3 text-base text-white">
          Tìm hiểu thêm
        </button>
      </div>

      <div className="flex gap-6">
        <div className="relative h-[580px] w-[400px]">
          <img
            className={`h-full w-full object-cover`}
            src={listTitle[currentIndex].image}
            alt=""
          />
          <div className="absolute bottom-6 left-6 flex  items-end ">
            <div className="w-[210px] bg-[var(--white-overlay)] p-8">
              <p className="mb-2 text-base font-medium text-[var(--gray2)]">
                {currentIndex + 1} - {listTitle[currentIndex].title}
              </p>
              <p className="text-2xl font-semibold">
                {listTitle[currentIndex].des}
              </p>
            </div>
            <div
              className="cursor-pointer bg-[var(--primary-color)] p-3"
              onClick={goToNext}
            >
              <LuArrowRight size={20} />
            </div>
          </div>
          <ul className="absolute bottom-8 left-[108%] flex gap-5">
            {listTitle.map((slide, slideIndex) => (
              <li
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`${currentIndex === slideIndex ? "bg-[var(--primary-color)]" : "bg-[var(--gray5)]"}
                h-3 w-3 cursor-pointer rounded-full duration-300
                hover:bg-[var(--primary-color)]`}
              ></li>
            ))}
          </ul>
        </div>

        <div className="flex h-[486px] flex-1 gap-6 overflow-hidden">
          {listTitle
            .filter((item) => item.image !== listTitle[currentIndex].image)
            .map((item, index) => (
              <img
                key={index}
                className="h-full w-[400px] object-cover"
                src={item.image}
                alt=""
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
