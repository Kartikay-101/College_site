import React from "react";
// slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//end of slider component
import college1 from "../Assets/Images/college1.jpg";
import college2 from "../Assets/Images/college2.jpg";
import college3 from "../Assets/Images/college3.jpeg";
import whatsapp from "../Assets/Images/whatsapp.png";
function Crousel_Images() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div id="college-pic">
            <div className="relative bg-gradient-to-r from-custom-blue to-custom-dark-blue via-custom-light-blue">
              <div
                className="w-full mx-auto relative"
                style={{ height: "530px" }}
              >
                <img
                  src={college1}
                  alt="glbajaj"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-end justify-end text-end text-white z-10">
                  <a href="#">
                    <img src={whatsapp} className="w-16 mb-72" />
                  </a>
                  <h1 className="text-3xl font-semibold mb-4 mr-10 text-center">
                    G L Bajaj Institute of <br /> Technology and Management
                  </h1>
                  <div className="flex gap-4">
                    <button className="bg-blue-600 text-white font-semibold  mb-10 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700">
                      Know more
                    </button>
                    <button className="bg-blue-600 text-white font-semibold mr-24 mb-10 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700">
                      Get Admission
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="college-pic">
              <div className="relative bg-gradient-to-r from-custom-blue to-custom-dark-blue via-custom-light-blue">
                <div
                  className="w-full mx-auto relative"
                  style={{ height: "530px" }}
                >
                  <img
                    src={college2}
                    alt="glbajaj"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute inset-0 flex flex-col items-end justify-end text-end text-white z-10">
                    <a href="#">
                      <img src={whatsapp} className="w-16 mb-80" />
                    </a>
                    <h1 className="text-3xl font-semibold mb-4 mr-10 text-center">
                      IIMT Group of College
                    </h1>
                    <div className="flex gap-4">
                      <button className="bg-blue-600 text-white font-semibold mb-10 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700">
                        Know more
                      </button>
                      <button className="bg-blue-600 text-white font-semibold mr-12 mb-10 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700">
                        Get Admission
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="college-pic">
              <div className="relative bg-gradient-to-r from-custom-blue to-custom-dark-blue via-custom-light-blue">
                <div
                  className="w-full mx-auto relative"
                  style={{ height: "530px" }}
                >
                  <img
                    src={college3}
                    alt="glbajaj"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute inset-0 flex flex-col items-end justify-end text-end text-white z-10">
                    <a href="#">
                      <img src={whatsapp} className="w-16 mb-80" />
                    </a>
                    <h1 className="text-3xl font-semibold mb-4 mr-10 text-center">
                      Mangalmay Group of College
                    </h1>
                    <div className="flex gap-4">
                      <button className="bg-blue-600 text-white font-semibold mb-10 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700">
                        Know more
                      </button>
                      <button className="bg-blue-600 text-white font-semibold mr-28 mb-10 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700">
                        Get Admission
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Crousel_Images;
