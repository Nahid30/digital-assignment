import React from "react";

const Collapse = () => {
  return (
    <div className="mx-10">
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div class="collapse-title text-2xl font-medium">BOOK SERVICE</div>
        <div class="collapse-content text-center">
          <div className="lg:grid grid-cols-3 ">
            <ul className="text-xl">
              <li>Bridal look</li>
              <li className="my-6">Party</li>
              <li>Fashion</li>
              <li className="mt-6">Day Look</li>
            </ul>
            <ul>
              <li>
                <button class="btn btn-sm btn-primary">Book Now</button>
              </li>
              <li>
                <button class="btn btn-sm btn-primary my-6">Book Now</button>
              </li>
              <li>
                <button class="btn btn-sm btn-primary">Book Now</button>
              </li>
              <li>
                <button class="btn btn-sm btn-primary mt-6">Book Now</button>
              </li>
            </ul>
            <ul>
              <li>
                <button class="btn btn-sm btn-success">Call Now</button>
              </li>
              <li>
                <button class="btn btn-sm btn-success my-6">Call Now</button>
              </li>
              <li>
                <button class="btn btn-sm btn-success">Call Now</button>
              </li>
              <li>
                <button class="btn btn-sm btn-success mt-6">Call Now</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-6">
        <div
          tabindex="0"
          class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div class="collapse-title text-2xl font-medium">
            SOHNI JUNEJA SCHOOL OF MAKEUP
          </div>
          <div class="collapse-content">
            <div>
              <p>
                Sohni Juneja School of Makeup offers premier makeup, grooming,
                and hairstyling courses. The courses are supervised and
                conducted by Sohni Juneja. Anyone willing to gain an
                understanding of professional makeup and grooming can enroll in
                the Sohni Juneja School of Makeup.
              </p>
              <p className="text-xl my-4 font-semibold ">Features of Sohni Juneja School of Makeup</p>
              <ul>
                <li>Practical hands-on training.</li>
                <li>Latest techniques and advanced information on the latest equipment and updates.</li>
                <li>Best Learning Experience in a professional setting.</li>
                <li>Fixed enrollment to ensure individual attention.</li>
                <li>Application-based courses to kick start your professional journey.</li>
              </ul>

              <p className="text-xl my-4 font-semibold ">COURSE DETAILS</p>
                <ul>
                    <li><span>Course Name:</span>  Professional Makeup Classes</li>
                    <li><span>Conducted By:</span>  Sohni Juneja</li>
                    <li><span>Batch Details:</span>   Starting July 20th Onwards</li>
                    <li><span>Duration: </span>  15 Classes</li>
                </ul>

                <p className="text-xl my-4 font-semibold ">Course Content</p>
                <ul>
                    <li>UNDERSTANDING SKIN TONE &TYPE</li>
                    <li>THEORY OF MAKE-UP</li>
                    <li>COLOR CORRECTION</li>
                    <li>BASE SELECTION</li>
                    <li>DAY MAKEUP</li>
                    <li>CONTOURING & HIGHLIGHTING, LINER TECHNIQUES</li>
                    <li>EYEBROW SHAPING</li>
                    <li>LIP SHAPING</li>
                    <li>5-10-15 MINS MAKE-UP</li>
                    <li>TV/ STILL SHOOT MAKE-UP</li>
                    <li>DRAMATIC MAKEUP</li>
                    <li>WEDDING MAKEUP</li>
                    <li>AIR BRUSH MAKEUP</li>
                    <li>EVENING MAKEUP(SMOKEY EYES, ETC)</li>
                </ul>
                <div className="font-semibold mt-6 text-center">
                <p>DM on 9999963537 to enroll</p>
                <p>Email: junejasohni@gmail.com</p>
                <p>Website: www.sohnijuneja.com</p>
                <button class="btn btn-outline btn-wide mt-4 ">Rs 97,000 + GST</button>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
