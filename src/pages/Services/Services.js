import React from "react";
import { useNavigate } from "react-router-dom";
import picture from "../../images/hair.png";

const Services = () => {


  return (
    <div>
      <h1 className="text-2xl text-center mt-10">Services</h1>
      <p className="my-10 text-center mx-20">
        Sohni Juneja is a well Known Makeup Artist in Delhi for doing
        professional bridal makeup, party makeup and hairstyling. Her bridal
        services are tailored to meet the needs and requirements of the clients.
        Sohni J provides hairstyling, engagement makeup, bridal makeup as well
        as party makeup services. In addition to these, she also provides bridal
        makeup appointment, pre- wedding makeup tips, product recommendation to
        get the best of your look on your special day. Apart from the services,
        she also gives you special offers in hairstyling as well as bridal
        makeup.
      </p>

      <p className="my-20 text-center mx-20">
        Professional makeup artist, Sohni Juneja not only provides you all the
        services at her makeup studio but also at your respective venue. To give
        you smooth and hassle free makeover experience, she also travels within
        the city, outstations and at your doorstep as well.
      </p>

      <div className="grid grid-cols-4 gap-4 m-10">
        <button class="btn btn-outline btn-primary">HAIR STYLING</button>
        <button class="btn btn-outline btn-primary">BRIDAL MAKEUP</button>
        <button class="btn btn-outline btn-primary">PARTY MAKEUP</button>
        <button class="btn btn-outline btn-primary">OFFERS</button>
      </div>

      <div className="border-2 border-black p-10 m-20">
        <h2 className="text-center text-2xl my-10 font-semibold">HAIR STYLING</h2>
        <div className="grid grid-cols-2  m-10 ">
            
          <div>
            <img className="rounded" width={300} src={picture} alt="" />
          </div>

          <div>
            <p>Sohni Juneja is a renowned professional makeup artist in Dehradun and Delhi. Having enormous knowledge about makeup and styling, she very well knows how to give attractive and charming look to her clients. She has been involved in providing her services of makeover to some well known T.V artists as well as celebs. She is successfully transforming lives of the women by making them beautiful.</p>
            <p className="my-4">Get sensational look and let everyone adore your beauty with Delhi best makeup artist at affordable rates. Call us or book your appointment with Best wedding Makeup Artist in Delhi.</p>

            <div className="flex justify-center rounded mt-10">
            <button class="btn btn-xs flex text-white ">VIEW GALLERY</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
