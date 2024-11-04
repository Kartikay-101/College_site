import React from "react";

import college1 from "../Assets/Images/college1.jpg";
import rankings from "../Assets/Images/ranking.png";
import naac from "../Assets/Images/naac.png";
import certificate from "../Assets/Images/certificate.png";
import course from "../Assets/Images/course.png";
import internship from "../Assets/Images/internship.png";
import rating from "../Assets/Images/rating.png";
import Bannerone from "./Bannerone";
import Footer from "./Footer";

function Banner() {
  var cards = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* college banner */}
      <Bannerone />
      {/* banner */}
      <div className="items-center justify-center flex flex-col bg-white h-full text-black">
        <img src={rankings} alt="ranking" className="h-40" />
        <h1 className="text-4xl text-center ">
          INDIA’S LARGEST COMMON APPLICATION FORM <br /> FOR COLLEGE ADMISSIONS
        </h1>
        <h1 className="text-4xl mb-10 text-orange-300 mt-10 text-center">
          2000+ Colleges,
          <br />1 Application Form
        </h1>
        <h1 className="text-4xl mb-10">
          Apply to your dream colleges made easy!
        </h1>
        <button className="bg-blue-900 w-fit p-4 mb-10 rounded-xl text-2xl text-white ">
          Start Application and Registered
        </button>
        <h1 className="text-xl mb-10">Update on exam</h1>
        <p className="blink w-fit mb-10 mr-10 ml-10 text-center">
          Sarkari Result Android Apps || Sarkari Result Youtube
          Channel || Sarkari Result Apple / IOS Apps|| Follow Instagram Railway
          Technician Online Form 2024 || Allahabad HC Group C & D Online Form
          2024 | | MP Primary TET Online Form 2024 RPSC RAS Online Form
          2024 || UP Ayush NEET UG Online Counseling 2024 || SSC CGL Tier I
          Answer Key 2024 Railway NTPC Graduate Level 2024 Online Form || BSPHCL
          Various Post Online Form 2024 || Himachal Police Constable Online Form
          2024
        </p>
      </div>
      {/* find the dream */}
      <div className="flex justify-center pb-10 bg-white ">
        <img src={naac} alt="naac" className="h-20" />
        <h1 className="ml-10 text-4xl text-black text-center justify-center items-center flex">
          Find Your Dream College
        </h1>
      </div>
      {/* college search */}
      <div className="bg-white pb-10">
        <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-gray-100 mr-10 ml-10">
          <input
            type="text"
            placeholder="Search for college, courses, internships and more"
            className="flex-grow px-2 py-3 focus:outline-none text-gray-700 bg-white"
          />
          <button className="bg-yellow-500 text-black px-6 py-3 font-semibold">
            Search
          </button>
        </div>
      </div>
      {/* college card */}
      <h1 className="text-4xl pl-10 pb-10 text-black bg-white">
        Explore College
      </h1>
      <div className="bg-white flex justify-center items-center h-80 p-10 w-full">
        {[...Array(3)].map((_, index) => (
          <div className="card image-full mr-10">
            <figure>
              <img src={college1} alt="gl bajaj" className="" />
            </figure>
            <div className=" absolute card-body items-center -mt-6">
              <h2 className="card-title  text-center text-white">
                G L Bajaj Institute of <br /> Technology and Management
              </h2>
            </div>
            <div className="card-body items-end justify-between flex-row ">
              <h5 className=" text-white cursor-pointer">Get Admission</h5>
              <h5 className=" text-white cursor-pointer">learn more..</h5>
            </div>
          </div>
        ))}
      </div>

      {/* top reccommeded college */}
      <div className="bg-white text-black">
        <h1 className="text-4xl pl-10 mb-10">Top Recommended College</h1>
        <div className="bg-white flex justify-center pb-10 pl-10 h-80 w-auto ">
          {[...Array(3)].map((_, index) => (
            <div className="card image-full mr-10">
              <figure>
                <img src={college1} alt="gl bajaj" className="" />
              </figure>
              <div className=" absolute card-body items-center -mt-6">
                <h2 className="card-title  text-center text-white">
                  G L Bajaj Institute of <br /> Technology and Management
                </h2>
              </div>
              <div className="card-body items-end justify-between flex-row ">
                <h5 className=" text-white cursor-pointer">Get Admission</h5>
                <h5 className=" text-white cursor-pointer">learn more..</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white text-black p-10 ">
        <ul className="flex justify-center gap-52">
          <li className="flex flex-col justify-center items-center">
            <img src={course} className="w-16" />
            <a>Get your Course</a>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={certificate} className="w-16" />
            <a>Get your Certificate</a>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={internship} className="w-16" />
            <a>Get your Internship</a>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={rating} className="w-16" />
            <a>Rating</a>
          </li>
        </ul>
      </div>
      <div className="bg-white text-black pb-10">
        <h1 className="text-4xl pl-10 pb-10">Explore Program</h1>
        <div>
          <ul className="flex justify-around">
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>BTECH</a>
            </li>

            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>MTECH</a>
            </li>
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>BCA</a>
            </li>
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>MCA</a>
            </li>
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>MBA</a>
            </li>
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>BBA</a>
            </li>
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>DIPOLMA</a>
            </li>
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>B.PHARMA</a>
            </li>
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>LAW</a>
            </li>
            <li className="border border-black rounded-xl w-auto  pl-4 pr-4 text-center">
              <a>PHD</a>
            </li>
            <li className="border border-black rounded-xl w-44 text-center ">
              View all course{" >>"}
            </li>
          </ul>
        </div>
      </div>
      {/* top college */}
      <div className="bg-white pb-10 text-black">
        <h1 className="text-4xl pl-10 pb-10 text-black">Top Colleges</h1>
        {[...Array(3)].map((_, index) => (
          <div className="flex justify-center mt-10">
            {[...Array(3)].map((_, index) => (
              <div className="text-center items-center justify-center flex mr-10">
                <div className="card card-compact bg-white w-96 shadow-xl">
                  <figure>
                    <img src={college1} alt="Glbajaj" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      G L Bajaj Institute of Technology and Management
                    </h2>
                    <p>NAAC Ranking :- A+ grade</p>
                    <p>
                      All courses detail <a href="#">click here {">>"}</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-yellow-100 text-black pl-10 flex h-40 p-10 justify-center items-center space-x-6">
        <div className="w-fit">
          <h1 className="text-3xl font-bold font-serif">
            Confused about the best career choice for you?
          </h1>
          <p className="text-xl font-serif">
            Discover your path with Career Compass, our personalised career
            recommendation tool. Explore your skills, personality, and interests
            for career advice and guidance designed just for you.
          </p>
        </div>
        <h1 className="font-serif rounded-md bg-yellow-400 px-4 py-2 w-fit whitespace-nowrap cursor-pointer">
          Get Career Recommendation
        </h1>
      </div>

      {/* 24 hours */}
      <div className="bg-black text-white">
        <h1 className="ml-10 mb-4 pt-4 text-xl">
          Get our experts to answer your questions within 24 Hrs
        </h1>
        <div className="pb-10">
          <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-gray-100 mr-10 ml-10">
            <input
              type="text"
              placeholder="Write your question here "
              className="flex-grow px-2 py-3 focus:outline-none text-gray-700 bg-white"
            />
            <button className="bg-yellow-500 text-black px-6 py-3 font-semibold">
              Ask Question
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Banner;
