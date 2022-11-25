import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
const Slider = () => {
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={1}>
        <SwiperSlide>
          <div className="absolute  w-full h-full">
            <section className="text-gray-50 body-font">
              <h1>Before Sold Out </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                repudiandae natus debitis, labore quasi itaque consectetur quod
                sed dignissimos reprehenderit earum, est, id ea facere.
              </p>
              <button>Register</button>
              <button>Login</button>
            </section>
          </div>
          <img
            src="https://cdn.discordapp.com/attachments/848180753178951731/1045424749653794906/2.png"
            alt="00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.discordapp.com/attachments/848180753178951731/1045424749968363560/3.png"
            alt="00"
          />
        </SwiperSlide>
        <SwiperSlide>
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
