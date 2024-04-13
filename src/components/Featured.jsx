import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Featured.css"; // Ensure your CSS file has the necessary styles
import { FiPhone } from "react-icons/fi";
import { useState } from "react";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderItems = [
    { title: "Ambar", image: "s11.jpg" },
    { title: "Safira", image: "s10.jpg" },
    { title: "Topaz", image: "s6.jpg" },
    { title: "Diamond ", image: "s2.jpg" },
    { title: "Onyx", image: "s14.jpg" },
    { title: "Pearl ", image: "s20.jpg" },
    // ...additional items
  ];

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Function to handle the opening of the contact modal
  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  // Function to handle the closing of the contact modal
  const handleCloseModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <>
      <section id="featured" className="container mx-auto py-12 mt-6 md:px-40">
        <div className="title flex flex-col items-center justify-center mb-8">
          <div className="w-28 h-0.5 bg-[#b48c56] mt-2 mb-10 "></div>
          <h2 className="text-4xl font-medium font-bebas text-center uppercase relative tracking-widest">
            Featured
          </h2>
        </div>
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            // Added 'group' class for hover control and 'relative' class for positioning
            <div
              key={index}
              className="group  text-center p-10 rounded-lg shadow-xl border-2 bg-white mx-0.5 relative my-10 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {/* OFFERS tag styled as per your screenshot */}
              <div className="offer-tag absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gold text-white text-base font-bold px-3 py-1 rounded-md z-10">
                OFFERS
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-64 rounded-t-lg object-cover w-full sm:h-16 "
                style={{ height: "300px", width: "100%" }}
              />
              <h3 className="text-2xl font-semibold my-4">{item.title}</h3>
              {/* Contact Us button will appear on hover */}

              <div className="contact-details absolute bottom-0 left-0 w-full p-4 rounded-b-lg bg-customBrown text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-full transition-all duration-500 ease-in-out">
                <p className="mb-2">Interested? Contact us now!</p>
                <button
                  className="hover:text-black hover:scale-105 duration-500"
                  onClick={handleContactClick}
                >
                  <div className="flex justify-center items-center">
                    <FiPhone className="inline mr-2" />
                    <span>Contact Us</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {isContactModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Contact Us
            </h2>
            <p className="mb-6 text-center text-gray-600">Please call us at:</p>
            <div className="flex justify-center items-center space-x-3 mb-8">
              <FiPhone size={24} className="text-customBrown" />
              <span className="text-xl font-medium">+91 xxxxxxxxxx</span>
            </div>
            <button
              className="mt-4 bg-customBrown hover:bg-customBrownDark text-white font-bold py-2 px-6 rounded-lg focus:outline-none w-full transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Featured;