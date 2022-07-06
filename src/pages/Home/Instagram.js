import React from "react";
import insta from "../../images/instagram.png";
import instagram from "../../images/Instagram-word.png";
import insta1 from "../../images/insta1.jpg";
import insta2 from "../../images/insta2.jpg";
import insta3 from "../../images/insta3.jpg";


const Instagram = () => {
  return (
    <div className="my-20 ">
      <div className="flex justify-center ">
        <img width={60} src={insta} alt="" />
        <p className="text-2xl mt-4 ml-2">FOLLOW US ON</p>
      </div>
      <div className="flex justify-center ">
        <img width={160} src={instagram} alt="" />
      </div>

      <div className="lg:grid grid-cols-4 mx-4 my-10  " >


       <img src={insta1} alt="" />
       <img src={insta2} alt="" />
       <img src={insta3} alt="" />
       <img src={insta1} alt="" />
       <img src={insta2} alt="" />
       <img src={insta3} alt="" />
       <img src={insta1} alt="" />
       <img src={insta2} alt="" />
      

      </div>
    </div>
  );
};

export default Instagram;
