import React from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="m-10" id="banner">

      <div class="text">
        <div>
          <h1>SOHNI JUNEJA</h1>
          <p>
            Sohni Juneja, a product of National Institute of Fashion Technology
            Delhi, Where she got her proficiency in her passion for Designing
            and Styling.
          </p>
          <a href="#">
            Read More<i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div class="carousel w-full ">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={img3} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class=" text-4xl text-pink-700">
              ❮
            </a>
            <a href="#slide2" class="text-4xl text-pink-700">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={img2} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="text-4xl text-pink-700">
              ❮
            </a>
            <a href="#slide3" class="text-4xl text-pink-700">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src={img1} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="text-4xl text-pink-700">
              ❮
            </a>
            <a href="#slide4" class="text-4xl text-pink-700">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src={img4} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="text-4xl text-pink-700">
              ❮
            </a>
            <a href="#slide1" class="text-4xl text-pink-700">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
