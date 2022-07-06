import React from "react";
import blog1 from "../../images/blog1.jpg";

const Blog = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Blogs</h1>

      <div className="lg:grid grid-cols-3 my-20">
        <div class="card lg:max-w-lg mx-5 card-compact bg-base-100 shadow-xl ">
          <figure>
            <img src={blog1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">How to Get Dewy Skin without Makeup</h2>
            <p>15-Mar-2022 By Sohni </p>
            <div class="card-actions justify-end">
              <button class="btn btn-link">
                <a
                  target="_blank"
                  href="https://sohnijuneja.com/blog/how-to-get-dewy-skin-without-makeup/"
                >
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>

        <div class="card card-compact lg:max-w-lg mx-5 bg-base-100 shadow-xl">
          <figure>
            <img src={blog1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">10 MAKE-UP TRICKS BY PROFESSIONAL MAKEUP ARTIST IN DELHI</h2>
            <p>15-Mar-2022 By Sohni </p>
            <div class="card-actions justify-end">
              <button class="btn btn-link">
                <a
                  target="_blank"
                  href="https://sohnijuneja.com/blog/10-make-up-tricks-by-professional-makeup-artist-in-delhi/"
                >
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>

        <div class="card card-compact lg:max-w-lg mx-5 bg-base-100 shadow-xl">
          <figure>
            <img src={blog1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">YOU NEED TO TAKE CARE OF THESE BAD BEAUTY HABITS</h2>
            <p>15-Mar-2022 By Sohni </p>
            <div class="card-actions justify-end">
              <button class="btn btn-link">
                <a 
                  target="_blank"
                  href="https://sohnijuneja.com/blog/you-need-to-take-care-of-these-bad-beauty-habits/"
                >
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
