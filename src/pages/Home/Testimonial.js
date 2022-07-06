import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Testimonials</h1>

      <div className="my-20">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex">
              <img class="mask mask-squircle w-56 "  src={img2} />
              
              <p className="mt-10 mx-10 text-justify ">
                <span className="text-xl font-semibold">Vatsala Wilson </span>
                 I am glad that I had you as my makeup artist on our big day.
                Thank you so much for all your help, you are one seriously
                talented woman! I looked so beautiful and not to mention that
                makeup looked stubbing on me.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <img class="mask mask-squircle w-56 "  src={img3} />
              
              <p className="mt-10 mx-10 text-justify ">
                <span className="text-xl font-semibold">Maneesha Thapa </span>
                It was such a wonderful experience to have my makeup done from her. She is no doubt one of the finest makeup artist in India. My makeup and hair was everything I ever imagined.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <img class="mask mask-squircle w-56 "  src={img1} />
              
              <p className="mt-10 mx-10 text-justify ">
                <span className="text-xl font-semibold">Vishakha Dodhi </span>
                Hey guys, if you are looking for a perfect makeup artist then you should definitely go for Sohni. She is extremely professional. She understand the need of the client and yes she is a magician.
              </p>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
