import React from "react";
import logo1 from "../../images/logos/Amazon.svg";
import logo2 from "../../images/logos/Daraz.pk Logo.svg";
import logo3 from "../../images/logos/Ebay.svg";
import logo4 from "../../images/logos/Walmart.svg";

const Accolades = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-20">Accolades</h1>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 mb-10 ">
          <a className="mx-10 my-2" href="https://www.amazon.com/">
            <img src={logo1} width={100} alt="" />
          </a>
          <a className="mx-10 my-2" href="https://www.daraz.com.bd/#">
            <img src={logo2} width={100}  alt="" />
          </a>
          <a className="mx-10 my-2" href="https://www.ebay.com/">
            <img src={logo3} width={100}  alt="" />
          </a>
          <a className="mx-10 my-2" href="https://www.walmart.com/">
            <img src={logo4} width={100}  alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Accolades;
