import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiShoppingBag } from "react-icons/fi";

const Collections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false, // Disable arrows for better touch swipe experience
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const collectionItems = [
    { id: 1, imgSrc: "S1.jpg", title: "NECKLACE" },
    { id: 2, imgSrc: "s2.jpg", title: "RINGS" },
    { id: 3, imgSrc: "s3.jpg", title: "PEARLS" },
    // ...other items
  ];

  return (
    <section
      id="collections"
      className="py-24 bg-no-repeat bg-cover bg-collections-bg "
    >
      <div className="container mx-auto">
      <div className="title flex flex-col items-center justify-center mb-10">
          <div className="w-40 h-0.5 bg-[#b48c56]  mb-8 "></div>
          <h2 className="text-4xl font-medium font-bebas text-center mb-4 uppercase relative tracking-widest">
            Collections
          </h2>
        </div>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {collectionItems.map((item) => (
            <div key={item.id} className="px-4">
              <div className="card flex flex-col items-center bg-white px-4 py-12  shadow-lg  transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-center items-center h-64 w-64 mb-4">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="rounded-md object-cover h-64 w-full mb-4"
                  />
                </div>{" "}
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <div className="icon mt-4">
                  <FiShoppingBag className="text-2xl text-black hover:text-gray-700 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Collections;
