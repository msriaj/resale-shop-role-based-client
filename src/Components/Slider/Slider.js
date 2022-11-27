import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
const Slider = () => {
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={1}>
        <SwiperSlide>
          <div className="absolute bg-gray-900 opacity-90 w-full h-full "></div>
          <div className="absolute w-full h-full  flex flex-col justify-center ">
            <section className="text-white p-5 md:p-20">
              <h1 className=" text-2xl md:text-3xl font-extrabold mb-2">
                Before Sold Out Buy <br /> Your Next Phone.
              </h1>
              <p className="md:text-xl">
                Buy and sell with confidence on our website. <br /> with the
                facility of selling <br /> the phone at a good price
              </p>
              <div className="mt-2">
                <button className="px-4 py-2 hover:bg-yellow-700 bg-yellow-500">
                  Register
                </button>
                <button className="px-4 py-2 hover:bg-yellow-700 ml-2 bg-sky-500">
                  Login
                </button>
              </div>
            </section>
          </div>

          <img
            src="https://cdn.discordapp.com/attachments/848180753178951731/1045424749653794906/2.png"
            alt="00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-gray-900 opacity-90 w-full h-full "></div>
          <div className="absolute w-full h-full  flex flex-col justify-center ">
            <section className="text-white p-5 md:p-20">
              <h1 className=" text-2xl md:text-3xl font-extrabold mb-2">
                Sell Your Device <br /> At Best Offer
              </h1>
              <p className="md:text-xl">
                Buy and sell with confidence on our website. <br /> with the
                facility of selling <br /> the phone at a good price
              </p>
              <div className="mt-2">
                <button className="px-4 py-2 hover:bg-yellow-700 bg-yellow-500">
                  Register
                </button>
                <button className="px-4 py-2 hover:bg-yellow-700 ml-2 bg-sky-500">
                  Login
                </button>
              </div>
            </section>
          </div>

          <img
            src="https://cdn.discordapp.com/attachments/848180753178951731/1045424749968363560/3.png"
            alt="00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute bg-gray-900 opacity-90 w-full h-full "></div>
          <div className="absolute w-full h-full  flex flex-col justify-center ">
            <section className="text-white p-5 md:p-20">
              <h1 className=" text-2xl md:text-3xl font-extrabold mb-2">
                Before Sold Out Buy <br /> Your Next Phone.
              </h1>
              <p className="md:text-xl">
                Buy and sell with confidence on our website. <br /> with the
                facility of selling <br /> the phone at a good price
              </p>
              <div className="mt-2">
                <button className="px-4 py-2 hover:bg-yellow-700 bg-yellow-500">
                  Register
                </button>
                <button className="px-4 py-2 hover:bg-yellow-700 ml-2 bg-sky-500">
                  Login
                </button>
              </div>
            </section>
          </div>

          <img
            src="https://cdn.discordapp.com/attachments/848180753178951731/1045424750274560040/4.png"
            alt="00"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
