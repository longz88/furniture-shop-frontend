import BannerPage from "../../components/BannerPage";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import FormInput from "../../components/FormInput";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <BannerPage title="Contact" />

      <div className="mx-auto max-w-screen-lg">
        <div className="my-24 text-center">
          <p className="mb-3 text-4xl font-semibold">Liên hệ với chúng tôi</p>
          <p className="mx-auto w-[640px] font-normal text-[--gray6]">
            Để biết thêm thông tin về sản phẩm và dịch vụ của chúng tôi. Xin vui
            lòng gửi email cho chúng tôi. Nhân viên của chúng tôi luôn có mặt để
            giúp đỡ bạn. Đừng ngại!
          </p>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col gap-11 p-14">
            <div className="flex items-start gap-6">
              <div className="mt-2">
                <FaLocationDot size={22} className="" />
              </div>
              <div className="">
                <p className="text-2xl font-medium">Địa chỉ</p>
                <p className="mt-1 w-[210px] font-normal">Hà Nội</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-2">
                <FaPhone size={22} className="" />
              </div>
              <div className="">
                <p className="text-2xl font-medium">Số điện thoại</p>
                <p className="mt-1 font-normal">Mobile: +(84) 546-6789</p>
                <p className="mt-1 font-normal">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="mt-2">
                <FaClock size={22} className="" />
              </div>
              <div className="">
                <p className="text-2xl font-medium">Thời gian làm việc</p>
                <p className="mt-1 font-normal">Thứ 2 - Thứ 6: 9:00 - 22:00</p>
                <p className="mt-1 font-normal">
                  Thứ 7 - Chủ nhật: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-9 px-14 pt-14 ">
            <FormInput name="Tên của bạn" title="name" />
            <FormInput name="Địa chỉ email" title="email" />
            <FormInput name="Tin nhắn" title="mess" type="textarea" />

            <button
              className="mr-auto mt-3 rounded-lg bg-[var(--primary-color)]
            px-24 py-3 font-normal tracking-widest text-white"
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
