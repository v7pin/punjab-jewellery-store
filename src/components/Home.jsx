import React from 'react';
import { Link } from 'react-scroll'; // Import the Link component from react-scroll

const Home = () => {
  return (
    <section id="home" className="relative flex justify-center items-center min-h-screen">
      <div className="container mx-auto flex justify-start items-center p-0 md:p-15">
        {/* This div will only show on mobile screens */}
        <div className="md:hidden w-full flex flex-col items-center justify-center px-5 text-center bg-white bg-opacity-50">
          <div className="text-[#b48c56] mb-4">
            <h3 className="text-xl sm:text-2xl font-[Bebas Neue] leading-tight my-8 mt-64">
              "Discover the Beauty of Simplicity: Elegant Jewellery for Every Occasion."
            </h3>
            <div className="mt-2 mb-4">
              <Link
                to="collections" // The id of the section to scroll to
                smooth={true}
                duration={500}
                className="px-5 py-2.5 my-2 bg-[#b48c56] text-white text-lg font-[Belleza] cursor-pointer transition duration-500 ease-in-out transform hover:scale-110"
              >
                Discover More
              </Link>
            </div>
            <p className="text-lg font-dancing text-amber-900 mt-8 tracking-wider">
              "Experience the allure of fine craftsmanship and timeless design."
            </p>
            <p className="text-lg font-dancing text-amber-900 mt-6 tracking-wider">
              "Cool sophistication meets artisanal beauty in every piece."
            </p>
          </div>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 right-0 bottom-0 w-full h-auto max-sm:mt-[-11rem] min-h-screen"
        id="myVideo"
      >
        <source src="Punjab_Jewelers_main.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Home;
